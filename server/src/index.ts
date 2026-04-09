import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import connectDB from './config/db.js';
import './workers/emailWorker.js'; // Start the email worker
import { addEmailToQueue } from './queues/emailQueue.js';
import authRoutes from './routes/authRoutes.js';
import oauthRoutes from './routes/oauthRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import wishlistRoutes from './routes/wishlistRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', oauthRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the E-commerce API' });
});

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

app.post('/test-email', async (req: Request, res: Response) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        await addEmailToQueue({
            to: email,
            subject: 'Test Email',
            body: 'This is a test email from BullMQ',
        });
        res.json({ message: `Test email job added to queue for ${email}` });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add job to queue', error });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
