import { Inngest } from "inngest";

export const inngest = new Inngest({
   // Unique app ID
  name: "Welth",
  id: "welth",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});