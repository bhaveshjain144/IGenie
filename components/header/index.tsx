import Link from "next/link";
import { Navbar } from "react-bootstrap";

const HeaderComponent = (props: any) => {
    return (
        <header className="main-header d-flex justify-content-between align-items-center">
            <div className='freshbee-logo justify-content-center d-flex align-items-center'>
                    <img src="images/freshbee.png" alt='Freshbee logo' />
                    <div aria-hidden="true"><span className='font-600'>Fresh</span><span className='font-700'>BEE</span></div>
            </div>
            <ul>
                <li className="nav-link">
                    <Link href="/" >
                        <div className="logout-btn" role='link' tabIndex={0}>
                            <i className='bx bx-log-out' ></i>
                            <span className="mx-2">Sign out</span>
                        </div>
                    </Link>
                </li>
            </ul>   
            {/* <span className="page-title">{props.title}</span> */}
        </header>
    )
}
export default HeaderComponent;