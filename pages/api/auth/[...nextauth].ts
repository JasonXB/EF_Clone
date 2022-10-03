import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import LinkedInProvider from 'next-auth/providers/linkedin';
import type { NextAuthOptions } from 'next-auth';

// Our config options need to be exportable in order to use unstable_getServerSession
// This is Next Auth's suggested method for checking login status inside API routes or getServerSideProps
export const nextAuthConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      //! Experimenting to see what user data can be extracted post-login, but am getting blocked by Typescript
      // profile(profile) {
      //   return {
      //     // Return all the profile information you need.
      //     // The only truly required field is `id`
      //     // to be able identify the account when added to a database
      //   }
      // },
    }),
    //! Facebook and LinkedIn provider code (does not work yet)
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID as string,
    //   clientSecret: process.env.FACEBOOK_SECRET as string,
    // }),
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_ID as string,
    //   clientSecret: process.env.LINKEDIN_SECRET as string,
    // }),
  ],

  // Notes:
  // * You must install an appropriate node_module for your database
  // database: process.env.DATABASE_URL, //! Will be used later on when MongoDB is integrated

  // A long randomly generated string used to sign cookies and encrypt JSON Web tokens
  // Created by entering the following into the terminal: openssl rand -base64 32
  secret: process.env.SECRET, // stored in .env.local as NEXTAUTH_SECRET

  session: {
    strategy: 'jwt', // Use JSON Web Tokens for session instead of database sessions
    // how long until an idle session expires and is no longer valid
    maxAge: 30 * 24 * 60 * 60, // 30 days expressed in seconds
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // secret string placed in .env.local
    // encryption: true, // Set to true to use encryption (default: false)
  },

  // These custom pages will be used instead of the plain-looking defaults NextAuth Provides
  pages: {
    signIn: '/signin', // Displays signin buttons
    // newUser: '/welcome', // new users will be directed here on first sign in
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
  },

  // Callbacks are asynchronous functions you can use to control what happens when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  //! Will be used later on when MongoDB is integrated
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    // async session({ session, token, user }) { return session },
    // async jwt({ token, user, account, profile, isNewUser }) { return token }
  },

  // Events are useful for logging: https://next-auth.js.org/configuration/events
  events: {},
  debug: false, // Enable/disable debug messages in the console if you are having problems
};
export default NextAuth(nextAuthConfig);
