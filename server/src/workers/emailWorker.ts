import { Worker, Job } from 'bullmq';
import { redisConnection } from '../config/redis.js';
import { sendOtpEmail } from '../utils/mail.js';

const emailWorker = new Worker(
  'email-queue',
  async (job: Job) => {
    const { to, otp, subject } = job.data;
    console.log(`Processing email job type: ${job.name} for ${to}...`);
    
    try {
      if (job.name === 'send-otp') {
        await sendOtpEmail(to, otp);
      } else {
        // Fallback for generic emails (like from addEmailToQueue)
        console.log(`Sending generic email to ${to}: ${subject}`);
        // We could implement a generic sendEmail here if needed
      }
      console.log(`Email job ${job.name} for ${to} completed successfully.`);
    } catch (error) {
      console.error(`Failed to process email job ${job.name} for ${to}:`, error);
      throw error;
    }
  },
  { connection: redisConnection }
);

emailWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully`);
});

emailWorker.on('failed', (job, err) => {
  console.error(`Job ${job?.id} failed:`, err);
});

export default emailWorker;
