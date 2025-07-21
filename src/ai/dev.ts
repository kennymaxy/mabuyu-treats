import { config } from 'dotenv';
config();

import '@/ai/flows/answer-spice-query.ts';
import '@/ai/flows/generate-product-description.ts';
import '@/ai/flows/send-review-email.ts';
