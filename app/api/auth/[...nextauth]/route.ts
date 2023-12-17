import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubAuth from "next-auth/providers/github";

export const authOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID || "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    // }),
    GithubAuth({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
