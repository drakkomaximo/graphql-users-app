import * as z from "zod";
import { genderEnums, statusEnums } from ".";

export const userValidationSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email({ message: "Invalid email address" }),
  gender: z.enum([...genderEnums]),
  status: z.enum([...statusEnums]),
});
