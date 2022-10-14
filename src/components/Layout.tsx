import React, { Children } from 'react';
import Head from 'next/head';
import Navbar from './header/Navbar';
import LayoutStyle from '../../styles/Layout.module.css';
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
    <div className={`${LayoutStyle.container} font-[mainFont] `}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="text" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={LayoutStyle.content}>
        <main>{props.children}</main>
      </div>
      {/* Add the Footer component here */}
      {/* <Footer/> */}
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
