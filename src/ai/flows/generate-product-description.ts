'use server';

/**
 * @fileOverview AI-powered product description generator for spices.
 *
 * - generateProductDescription - A function that generates a detailed product description for a spice.
 * - GenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - GenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product (spice).'),
  spiceLevel: z.string().describe('The spice level of the product (e.g., mild, medium, hot).'),
  origin: z.string().describe('The origin of the spice.'),
  ingredients: z.string().describe('A comma-separated list of ingredients in the spice blend.'),
  flavorProfile: z.string().describe('Description of the flavor profile (e.g., smoky, sweet, savory).'),
  usageSuggestions: z.string().describe('Suggestions for how to use the spice in cooking.'),
});
export type GenerateProductDescriptionInput = z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  description: z.string().describe('A detailed and engaging product description.'),
});
export type GenerateProductDescriptionOutput = z.infer<typeof GenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(input: GenerateProductDescriptionInput): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are a skilled copywriter specializing in crafting enticing product descriptions for spices.

  Create a detailed and engaging product description based on the following information:

  Product Name: {{{productName}}}
  Spice Level: {{{spiceLevel}}}
  Origin: {{{origin}}}
  Ingredients: {{{ingredients}}}
  Flavor Profile: {{{flavorProfile}}}
  Usage Suggestions: {{{usageSuggestions}}}

  The description should highlight the unique aspects of the spice and encourage customers to make a purchase. Be creative and engaging.
`,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
