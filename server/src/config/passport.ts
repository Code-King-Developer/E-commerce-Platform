import passport from 'passport';
import { Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth20';
import AppleStrategy from 'passport-apple';
import User from '../models/User.js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// Google Strategy
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL || '/api/auth/google/callback',
      },
      async (_accessToken: string, _refreshToken: string, profile: any, done: VerifyCallback) => {
        try {
          const googleId = profile.id;
          let user = await User.findOne({ googleId });

          if (!user) {
            // Check if user exists with same email
            const email = profile.emails?.[0].value;
            if (email) {
                user = await User.findOne({ email });
            }

            if (user) {
              user.googleId = profile.id;
              await user.save();
            } else {
              user = await User.create({
                name: profile.displayName,
                email: email || `${profile.id}@google.com`,
                googleId: profile.id,
              });
            }
          }

          return done(null, user);
        } catch (error) {
          return done(error as Error);
        }
      }
    )
  );
}

// Apple Strategy
if (process.env.APPLE_CLIENT_ID && process.env.APPLE_TEAM_ID && process.env.APPLE_KEY_ID && process.env.APPLE_PRIVATE_KEY_PATH) {
    try {
        const privateKey = fs.readFileSync(path.resolve(process.env.APPLE_PRIVATE_KEY_PATH), 'utf8');

        passport.use(
            new AppleStrategy(
                {
                    clientID: process.env.APPLE_CLIENT_ID,
                    teamID: process.env.APPLE_TEAM_ID,
                    keyID: process.env.APPLE_KEY_ID,
                    privateKeyString: privateKey,
                    callbackURL: process.env.APPLE_CALLBACK_URL || '/api/auth/apple/callback',
                    passReqToCallback: true,
                },
                async (_req: any, _accessToken: string, _refreshToken: string, _idToken: string, profile: any, done: (err: Error | null, user?: any) => void) => {
                    try {
                        const appleId = profile.id;
                        let user = await User.findOne({ appleId });

                        if (!user) {
                            // Apple only sends name/email on first login
                            const email = profile.email;
                            if (email) {
                                user = await User.findOne({ email });
                            }

                            if (user) {
                                user.appleId = profile.id;
                                await user.save();
                            } else {
                                user = await User.create({
                                    name: profile.name ? `${profile.name.firstName} ${profile.name.lastName}` : 'Apple User',
                                    email: email || `${profile.id}@apple.com`,
                                    appleId: profile.id,
                                });
                            }
                        }

                        return done(null, user);
                    } catch (error) {
                        return done(error as Error);
                    }
                }
            )
        );
    } catch {
        console.error('Apple OAuth key file not found or invalid. Skipping Apple strategy.');
    }
}

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
