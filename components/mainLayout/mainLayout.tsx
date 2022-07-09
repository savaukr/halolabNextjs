import React from "react";

import Head from "next/head";
import Header from "../header/header";
import Footer from "../footer/footer";

type Props = {
  children: React.ReactNode;
  keywords?: string;
};

const MainLayout = ({ children, keywords }: Props) => {
  return (
    <>
      <Head>
        <meta
          key="keywords"
          name="keywords"
          content={`nature needs you, Web development, App development ${keywords}`}
        />

        <title>Nature needs you</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
