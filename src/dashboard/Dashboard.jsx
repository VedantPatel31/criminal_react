import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { PowerBI } from '../powerBI/PowerBI'
import CrimeDataAnalysis from '../introducation/CrimeDataAnalysis'
import { PowerQuery } from '../powerQuery/PowerQuery'
import ExcelViewer from '../dataset/ExcelViewer'
import { SQLAnalysis } from '../sql/SQLAnalysis'
import { DashboardDescription } from './DashboardDescription'
import PropertyTheftInIndia from '../statistics/PropertyTheftInIndia'

export const Dashboard = () => {
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const handleToggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // };
    return (
        <>

            <div className="container-fluid position-relative d-flex p-0">
                {/* Spinner Start */}
                {/* <div
                    id="spinner"
                    className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
                >
                    <div
                        className="spinner-border text-primary"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> */}
                {/* Spinner End */}
                {/* Sidebar Start */}
                <div className="sidebar pe-4 pb-3">
                    <nav className="navbar bg-secondary navbar-dark">
                        <a href="index.html" className="navbar-brand mx-4 mb-3">
                            <h3 className="text-primary">
                                <i className="fa fa-user-edit me-2" />
                                Data Analysis
                            </h3>
                        </a>
                        <div className="d-flex align-items-center ms-4 mb-4">
                            <div className="position-relative">
                                <img
                                    className="rounded-circle"
                                    // src="img/user.jpg"
                                    src="img/crime-img.jpg"
                                    alt=""
                                    style={{ width: 40, height: 40 }}
                                />
                                {/* <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" /> */}
                            </div>
                            <div className="ms-3">
                                <h6 className="mb-0">Crimes in India</h6>
                                <span>2001-2013</span>
                            </div>
                        </div>
                        <div className="navbar-nav w-100">
                            {/* <a href="widget.html" className="nav-item nav-link">
                            <i class="fa-solid fa-book"></i>
                                Introducation
                            </a> */}
                            <Link to="/introduction" className="nav-item nav-link">
                                <i className="fa-solid fa-book"></i>
                                Introduction
                            </Link>
                            <Link to="/dashboard" className="nav-item nav-link">
                                <i className="fa fa-tachometer-alt me-2" />
                                Dashboard
                            </Link>
                            <Link to="/powerQuery" className="nav-item nav-link">
                                <i className="fa fa-th me-2" />
                                Power Query
                            </Link>

                            <Link to="/sql" className="nav-item nav-link">
                                <i className="fa fa-th me-2" />
                                SQL
                            </Link>

                            <Link to="/statistic" className="nav-item nav-link">
                                <i className="fa fa-th me-2" />
                                Statistics
                            </Link>

                            <Link to="/dataset" className="nav-item nav-link">
                                <i className="fa fa-th me-2" />
                                Datasets
                            </Link>

                        </div>
                    </nav>
                </div>
                {/* Sidebar End */}
                {/* Content Start */}
                <div className="content">
                    {/* Navbar Start */}
                    <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                            <h2 className="text-primary mb-0">
                                <i className="fa fa-user-edit" />
                            </h2>
                        </a>
                        <a href="#" className="sidebar-toggler flex-shrink-0">
                            <i className="fa fa-bars" />
                        </a>

                        <form className="d-none d-md-flex ms-4">
                            <input
                                className="form-control bg-dark border-0"
                                type="search"
                                placeholder="Search"
                            />
                        </form>
                        <div className="navbar-nav align-items-center ms-auto">

                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    <img
                                        className="rounded-circle me-lg-2"
                                        src="img/crime-img.jpg"
                                        alt=""
                                        style={{ width: 40, height: 40 }}
                                    />
                                    <span className="d-none d-lg-inline-flex">Profile</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                                    <a href="#" className="dropdown-item">
                                        My Profile
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Settings
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        Log Out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path='/dashboard' element={<PowerBI />}></Route>
                        <Route path='/introduction' element={<CrimeDataAnalysis />}></Route>
                        <Route path='/powerQuery' element={<PowerQuery />}></Route>
                        <Route path='/dataset' element={<ExcelViewer />}></Route>
                        <Route path='/sql' element={<SQLAnalysis />}></Route>
                        <Route path='/statistic' element={<PropertyTheftInIndia />}></Route>

                    </Routes>
                    {/* Navbar End */}
                    {/* Sale & Revenue Start */}

                    {/* Sale & Revenue End */}
                    {/* Sales Chart Start */}

                    {/* Sales Chart End */}
                    {/* Recent Sales Start */}

                    {/* Recent Sales End */}
                    {/* Widgets Start */}

                    {/* Widgets End */}
                    {/* Footer Start */}

                    {/* Footer End */}
                </div>
                {/* Content End */}
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                    <i className="bi bi-arrow-up" />
                </a>
            </div>

            {/* JavaScript Libraries */}
            {/* Template Javascript */}
        </>

    )
}
