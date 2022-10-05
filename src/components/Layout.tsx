import React, { Children } from 'react';
import Head from 'next/head';
// import Header from ''
// import Footer from ''

type LayoutProps = {
  headTitle?: string;
  children: any;
};
const Layout = ({ ...props }: LayoutProps) => {
  const title = props.headTitle
    ? `${props.headTitle} | Empowered Futures`
    : 'Empowered Futures';
  return (
    <div className="container font-[mainFont] ">
      <Head>
        <title>{title}</title>
        <meta name="description" content="text" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="content">
        {/* Add the Header component here */}
        {/* <Header/> */}
        <h1>Hedaer</h1>
        <main>{props.children}</main>
        {/* Add the Footer component here */}
        {/* <Footer/> */}
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Layout;