import React, { Children } from 'react';
import Head from 'next/head';
import Navbar from './header/Navbar';
import LayoutStyle from '../../styles/Layout.module.css';
import Footer from './footer/Footer';
import Profilesettings from '../../pages/profileSettings/profile-settings'
type LayoutProps = {
  headTitle?: string;
  isConfirmedMeetingPg?: boolean;
  children: any;
};
const Layout = ({ ...props }: LayoutProps) => {
  const title = props.headTitle
    ? `${props.headTitle} | Empowered Futures`
    : 'Empowered Futures';
  return (
    <div className={`${LayoutStyle.container} font-[mainFont]`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="text" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div
        className={`${props.isConfirmedMeetingPg ? '' : LayoutStyle.content}`}
      >
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
