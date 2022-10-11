import React, { Children } from 'react';
import Head from 'next/head';
// import Header from ''
// import Footer from ''
import Navbar from './Navbar';


type LayoutProps = {
  headTitle?: string;
  children: any;
};
const ProfileLayout = ({ ...props }: LayoutProps) => {
  const title = props.headTitle
    ? `${props.headTitle} | Empowered Futures`
    : 'Empowered Futures';
  return (
    <>
    <Navbar />
    <div className="container font-[mainFont]">
      <Head>
        <title>{title}</title>
        <meta name="description" content="text" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="profile-content">
        {/* Add the Header component here */}
        {/* <Header/> */}
        <main className="mt-10 ">{props.children}</main>
        {/* Add the Footer component here */}
        {/* <Footer/> */}
        <h1>Footer</h1>
      </div>
    </div>
    </>
  );
};

export default ProfileLayout;