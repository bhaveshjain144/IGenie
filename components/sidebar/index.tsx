import Link from "next/link";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useState } from 'react';
import { useRouter } from 'next/router'

const SidebarComponent = (props: any) => {
    const router = useRouter();
    console.log('path-->', router.pathname);
    const [toggleNav, setToggleNav] = useState<boolean>(true);
    const pushToggleNav = () => {
        setToggleNav (!toggleNav);
    }

    return (
        <Navbar expand="lg" className={`nav-slider p-0 ${toggleNav ? 'nav-show' : ''}`}>
        <aside className="w-100">
            <div className="d-none d-lg-flex sidebar-header justify-content-between">
                <Navbar.Brand className='freshbee-logo justify-content-center d-flex align-items-center'>
                    <img src="images/freshbee.png" alt='Freshbee logo' />
                    <div aria-hidden="true"><span className='font-600'>Fresh</span><span className='font-700'>BEE</span></div>
                </Navbar.Brand>
                <div className='logo-sm'>
                    <img src="images/freshbee.png" alt='Freshbee logo' />
                </div>
                <button className="d-none d-lg-block bx bx-menu push-sidebar-menu" onClick={pushToggleNav} aria-label="collapse side navigation"></button>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="bx bx-menu" />
            <Navbar.Collapse id="basic-navbar-nav" className="sidebar-collapse">
                <ul className="sidebar-navlist" id="navbarSupportedContent">
                    <li className={`${router.pathname === '/dashboard' ? 'active': ''}`}>
                        <Link href="/dashboard">
                            <div role="link" tabIndex={0}>
                                <i className='bx bx-bar-chart-alt-2' ></i>
                                <span className="sidebar-navlist-title">Dashboard</span>
                            </div>    
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/trainees' ? 'active': ''}`}>
                        <Link href="/trainees">
                            <div role="link" tabIndex={0}>
                                <i className='bx bx-group' ></i>
                                <span className="sidebar-navlist-title">Trainees</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/batches' ? 'active': ''}`}>
                        <Link href="/batches">
                            <div role="link" tabIndex={0}>
                                <i className='bx bx-copy-alt'></i>
                                <span className="sidebar-navlist-title">Batches</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/bench' ? 'active': ''}`}>
                        <Link href="/bench">
                            <div role="link" tabIndex={0}>
                                <i className='bx bx-sitemap'></i>
                                <span className="sidebar-navlist-title">Bench</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/projects' ? 'active': ''}`}>
                        <Link href="/projects">
                            <div role="link" tabIndex={0}>
                                <i className='bx bx-code-block'></i>
                                <span className="sidebar-navlist-title">Projects</span>
                            </div>
                        </Link>
                    </li>
                    <li className={`${router.pathname === '/users' ? 'active': ''}`}>
                        <Link href="/users">
                            <div role="link" tabIndex={0}>
                                <i className='bx bx-user'></i>
                                <span className="sidebar-navlist-title">Users</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </Navbar.Collapse>   
        </aside>
        </Navbar>
    )
}
export default SidebarComponent;