import { z } from "zod";

export const createSessionSchema = z.object({
  body: z.object({
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

export const refreshSessionSchema = z.object({
  body: z.object({
    refresh_token: z.string({
      required_error: "refresh_token is required",
    }),
  }),
});
