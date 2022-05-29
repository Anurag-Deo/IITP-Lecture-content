import React from 'react'
import { useLocation,Link } from 'react-router-dom'

const Navbar2 = () => {
    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container-fluid">

                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <a className="navbar-brand mt-2 mt-lg-0" href="/">
                        {/* <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            height="15"
                            alt="MDB Logo"
                            loading="lazy"
                        /> */}
                        IITP
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/'?"active":""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/MA102'?"active":""}`} to="/MA102">MA102</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/ME102'?"active":""}`} to="/ME102">ME102</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/EE102'?"active":""}`} to="/EE102">EE102</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/CH103'?"active":""}`} to="/CH103">CH103</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className={`nav-link ${location.pathname==='/CH110'?"active":""}`} href="/CH110">CH110</a>
                        </li> */}
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/PH103'?"active":""}`} to="/PH103">PH103</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/PH110'?"active":""}`} to="/PH110">PH110</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/CS102'?"active":""}`} to="/CS102">CS102</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/CS112'?"active":""}`} to="/CS112">CS112</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/CE102'?"active":""}`} to="/CE102">CE102</Link>
                        </li>
                    </ul>

                </div>

                <div className="d-flex align-items-center">
                    
                    <div className="dropdown">
                        <a
                            className="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell fa-xl"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">The content till 11th May is updated on the website</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">The content till 9th May is updated on the website</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">The content till 8th May is updated on the website</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <a
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png"
                                // src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-circle"
                                height="40"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"
                        >
                            <li>
                                <a className="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar2