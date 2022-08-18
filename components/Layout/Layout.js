import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="main-color w-full">
        <div className="max-w-screen-2xl mx-auto ">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
