// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview This file defines a Genkit flow for answering customer inquiries about spice products.
 *
 * - answerSpiceQuery - A function that takes a customer's question and returns an answer.
 * - AnswerSpiceQueryInput - The input type for the answerSpiceQuery function.
 * - AnswerSpiceQueryOutput - The return type for the answerSpiceQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerSpiceQueryInputSchema = z.object({
  query: z.string().describe('The customer\u2019s question about the spice products.'),
});
export type AnswerSpiceQueryInput = z.infer<typeof AnswerSpiceQueryInputSchema>;

const AnswerSpiceQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the customer\u2019s question.'),
});
export type AnswerSpiceQueryOutput = z.infer<typeof AnswerSpiceQueryOutputSchema>;

export async function answerSpiceQuery(input: AnswerSpiceQueryInput): Promise<AnswerSpiceQueryOutput> {
  return answerSpiceQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerSpiceQueryPrompt',
  input: {schema: AnswerSpiceQueryInputSchema},
  output: {schema: AnswerSpiceQueryOutputSchema},
  prompt: `You are a helpful AI chatbot for a spice company called Spice Coast.

  Answer the following question about the ingredients, spice levels, and usage suggestions for different products:

  {{query}}
  `,
});

const answerSpiceQueryFlow = ai.defineFlow(
  {
    name: 'answerSpiceQueryFlow',
    inputSchema: AnswerSpiceQueryInputSchema,
    outputSchema: AnswerSpiceQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
