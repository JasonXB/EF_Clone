import React, { Children } from 'react';
import Head from 'next/head';
import Navbar from './header/Navbar';
import LayoutStyle from '../../styles/Layout.module.css';
import Footer from './footer/Footer';

enum BackgroundTypes {
  primary = 'primary',
  secondary = 'secondary',
  none = 'none',
}

type LayoutProps = {
  headTitle?: string;
  children: any;
  contentCustomClass?: string;
  background?: `${BackgroundTypes}`;
  isConfirmedMeetingPg?: boolean;
  noBottomPadding?: boolean;
};
//setting background default to be Primary, if someone doesn't add it to layout, it will still include it by default.
const Layout = ({
  background = BackgroundTypes.primary,
  ...props
}: LayoutProps) => {
  const title = props.headTitle
    ? `${props.headTitle} | Empowered Futures`
    : 'Empowered Futures';
  const whichBackground = (type: string) => {
    if (type === 'primary') {
      return LayoutStyle.primaryBG;
    } else if (type === 'secondary') {
      return LayoutStyle.secondaryBG;
    } else {
      return LayoutStyle.noneBG;
    }
  };
  return (
    <>
      <div className={`${whichBackground(background)} `}>
        <div className={`${LayoutStyle.container} font-[mainFont]`}>
          <Head>
            <title>{title}</title>
            <meta name="description" content="text" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <div
            className={
              //we need to fix this for a more clear solution
              props.contentCustomClass
                ? props.contentCustomClass
                : props.isConfirmedMeetingPg
                ? ''
                : props.noBottomPadding
                ? LayoutStyle.contentV2
                : LayoutStyle.content
            }
          >
            <main>{props.children}</main>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
