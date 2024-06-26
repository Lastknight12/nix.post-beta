/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: [
      "cdn.discordapp.com",
      "lh3.googleusercontent.com",
      "nix-post.vercel.app",
      "iuqipxloifipusrsorab.supabase.co",
    ],
  },
};

export default config;
