import SidebarComponent from './sidebar'
import FooterComponent from './footer'
import { Col, Container, Row } from 'react-bootstrap';
import HeaderComponent from './header';
import Head from "next/head";
import { useState } from 'react';

const Layout = (props: any) => {
    return (
        <>
            <Head>
                <title>FresBEE</title>
                <meta name="description" content="Fresher Training Tracker" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='container-fluid d-flex outer-container'>
                <SidebarComponent />
                <div className='right-container'>
                    <HeaderComponent title={props.pageTitle} ></HeaderComponent>
                    <main className='main-container'>{props.children}</main>
                    <FooterComponent />
                </div>
            </div>
        </>
    )
}
export default Layout;