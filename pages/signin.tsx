import React from 'react';
import SocialMediaButtons from '../src/components/SocialMediaButtons';
import { nextAuthConfig } from './api/auth/[...nextauth]';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    nextAuthConfig
  );
  // If the user is online, redirect them to homepage
  if (session) {
    return {
      redirect: {
        destination: '/AuthTests/ConditionalJSX', // redirect to this path
        permanent: false,
      },
    };
  }
  // If the user is offline, feed the session object as a prop to the React component
  return { props: { session } };
};

export default function signin() {
  return (
    <>
      <SocialMediaButtons />
    </>
  );
}
