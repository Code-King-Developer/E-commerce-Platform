import { Queue } from 'bullmq';
import { redisConnection } from '../config/redis.js';

export const emailQueue = new Queue('email-queue', {
  connection: redisConnection,
});

export const addEmailToQueue = async (data: { to: string, subject: string, body: string }) => {
  await emailQueue.add('send-email', data);
};
