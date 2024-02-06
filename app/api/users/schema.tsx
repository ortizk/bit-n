import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  dob: z.string(),
});

export default schema;
