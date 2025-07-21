
'use server';

/**
 * @fileOverview A Genkit flow for emailing new customer reviews.
 *
 * - sendReviewEmail - A function that takes review details and sends an email notification.
 * - SendReviewEmailInput - The input type for the sendReviewEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const SendReviewEmailInputSchema = z.object({
  name: z.string().describe("The name of the person who left the review."),
  rating: z.number().describe("The rating given (1-5 stars)."),
  comment: z.string().describe("The content of the review comment."),
  productName: z.string().optional().describe("The name of the product being reviewed, if applicable."),
});
export type SendReviewEmailInput = z.infer<typeof SendReviewEmailInputSchema>;

// This output schema is not used by the flow but is good practice to define.
const SendReviewEmailOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type SendReviewEmailOutput = z.infer<typeof SendReviewEmailOutputSchema>;

export async function sendReviewEmail(input: SendReviewEmailInput): Promise<SendReviewEmailOutput> {
  return sendReviewEmailFlow(input);
}

const sendReviewEmailFlow = ai.defineFlow(
  {
    name: 'sendReviewEmailFlow',
    inputSchema: SendReviewEmailInputSchema,
    outputSchema: SendReviewEmailOutputSchema,
  },
  async (review) => {
    const recipientEmail = process.env.REVIEW_NOTIFICATION_EMAIL;

    if (!recipientEmail) {
      console.error('REVIEW_NOTIFICATION_EMAIL environment variable not set.');
      return { success: false, message: 'Recipient email not configured.' };
    }

    const subject = review.productName
      ? `New Review for ${review.productName}!`
      : 'New Site Feedback!';

    const body = `
      You've received a new review!

      Product: ${review.productName || 'Overall Experience'}
      From: ${review.name}
      Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
      Comment:
      "${review.comment}"
    `;

    // In a real application, you would use an email service like SendGrid, Resend, or Nodemailer.
    // For this prototype, we will log the email to the console as a simulation.
    console.log('--- SIMULATING EMAIL ---');
    console.log(`To: ${recipientEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    console.log('------------------------');

    // To implement actual email sending, you would replace the simulation with a call to your email provider's API.
    // For example, using a service function:
    // await emailService.send({ to: recipientEmail, subject, body });

    return { success: true, message: 'Email notification sent successfully (simulated).' };
  }
);
