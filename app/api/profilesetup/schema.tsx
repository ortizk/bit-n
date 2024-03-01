import { z } from "zod";

const schema = z.object({
  user_id: z.number(),
  name: z.string().min(1),
  about_me: z.string(),
  height: z.string(),
  gender: z.string(),
  pronouns: z.string(),
  ethnicity: z.string(),
  relationship_status: z.string(),
  looking_for: z.string(),
  hiv_status: z.string(),
  last_tested: z.string(),
});

export default schema;
