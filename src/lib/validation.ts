import * as z from "zod"

export const loginSchema = z.object({
  phoneNumber: z.string()
    .min(10, "Iltimos telefon raqamni to`g`ri kiriting")
    .max(13,"Iltimos telefon raqamni to`g`ri kiriting"),
  password: z.string()
    .min(4, "Iltimos uzunroq parol kiriting"),
});