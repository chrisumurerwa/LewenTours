import React, { Fragment } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import WhatsappMe from '../Components/WhatsappMe';


const HeaderAndFooter = () => {
  return (
    <Fragment>
        <Header />
        <Outlet />
        <Footer />
        <WhatsappMe />
    </Fragment>
  )
}

export default HeaderAndFooter