import { z } from "zod";

export const createUserWithTokenSchema = z.object({
  body: z.object({
    invite_token: z.string({
      required_error: "invite token is required",
    }),
    email: z
      .string({
        required_error: "username is required",
      })
      .email(),
    firstName: z.string({
      required_error: "firstName is required",
    }),
    lastName: z.string({
      required_error: "lastName is required",
    }),
    username: z.string({
      required_error: "username is required",
    }),
    password: z
      .string({
        required_error: "password is required",
      })
      .min(6, "Password too short - should be 6 chars minimum"),
  }),
});
