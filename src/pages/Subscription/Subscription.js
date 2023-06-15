

// ----------------------------------------------------------------------
import styles from "./Subscription.module.css"
// import {
//     useEffect, 
//     useState
// } from "react"
import * as React from 'react';
import { Link } from '@mui/material';

// ----------------------------------------------------------------------


export default function AdministrationPage() {

    return (
        <>

            <div className=" px-2 mt-5 pt-3">
                <div className='mt-2 text-center' >
                    <h4 className="text-success">Pricing</h4>
                    <h1>Simple, transparent pricing</h1>
                    <p style={{fontSize: '19px'}} className="text-muted">We believe Rabbit should be accessible to all companies, no matter the size.</p>
                </div>
                
                <div className='mt-4 text-center mx-auto rounded bg-light py-2' style={{width: 'fit-content'}} >
                    <button className="btn mx-2 border rounded bg-light">Monthly Billing</button>
                    <button className="btn mx-2 border rounded bg-light">Annual Billing</button>
                </div>

                <div className="mt-5">
                    <div className="d-flex flex-wrap mx-auto" style={{gap: '15px'}}>
                        <div className="card mx-auto p-0" style={{minWidth: '260px', maxWidth: '260px', borderRadius: '15px'}}>
                            <div className=" p-3 border-bottom">
                                <p className="text-muted">Basic</p>
                                <h3>Free</h3>
                                <Link className="d-block w-100 btn btn-success my-3" href='/dashboard/payment'>Get Started</Link>
                            </div>
                            <div className="p-3">
                                <p className="font-weight-bold">FEATURES</p>
                                <ul className={`${styles.subscUl}`}>
                                    <li>
                                        <span>Only 1 admin login</span>
                                    </li>
                                    <li>
                                        <span>Users can create only 5 routes (to & fro counts as 2)</span>
                                    </li>
                                    <li>
                                        <span>Users can add only 1 Bus</span>
                                    </li>
                                    <li>
                                        <span>Users can add only 1 driver</span>
                                    </li>
                                    <li>
                                        <span>No access to submit quote for charter</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="card mx-auto p-0" style={{minWidth: '260px', maxWidth: '260px', borderRadius: '15px'}}>
                            <div className=" p-3 border-bottom">
                                <p className="text-muted">Pro</p>
                                <h3>₦20,000 <small className="text-muted font-weight-normal" style={{fontSize: '14px', verticalAlign: 'middle'}}>per month</small></h3>
                                <Link className="d-block w-100 btn btn-success my-3" href='/dashboard/payment'>Get Started</Link>
                            </div>
                            <div className="p-3">
                                <p className="font-weight-bold">FEATURES</p>
                                <ul className={`${styles.subscUl}`}>
                                    <li>
                                        <span>Only 3 admin login</span>
                                    </li>
                                    <li>
                                        <span>Users can create only 11 routes (to & fro counts as 2)</span>
                                    </li>
                                    <li>
                                        <span>Users can add only 3 buses</span>
                                    </li>
                                    <li>
                                        <span>Users can add only 3 drivers</span>
                                    </li>
                                    <li>
                                        <span>Access to submit bid for charter (within city)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="card mx-auto p-0" style={{minWidth: '260px', maxWidth: '260px', borderRadius: '15px'}}>
                            <div className=" p-3 border-bottom">
                                <p className="text-muted">Elite</p>
                                <h3>₦50,000 <small className="text-muted font-weight-normal" style={{fontSize: '14px', verticalAlign: 'middle'}}>per month</small></h3>
                                <Link className="d-block w-100 btn btn-success my-3" href='/dashboard/payment'>Get Started</Link>
                            </div>
                            <div className="p-3">
                                <p className="font-weight-bold">FEATURES</p>
                                <ul className={`${styles.subscUl}`}>
                                    <li>
                                        <span>Only 5 admin login</span>
                                    </li>
                                    <li>
                                        <span>Users can create only 21 routes (to & fro counts as 2)</span>
                                    </li>
                                    <li>
                                        <span>Users can add only 5 buses</span>
                                    </li>
                                    <li>
                                        <span>Users can add only 5 drivers</span>
                                    </li>
                                    <li>
                                        <span>Access to submit bid for charter (within city & Interstate)</span>
                                    </li>
                                    <li>
                                        <span>Access to view incremental insights</span>
                                    </li>
                                    <li>
                                        <span>Top results when searched on mobile</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="card mx-auto p-0" style={{minWidth: '300px', maxWidth: '260px', borderRadius: '15px'}}>
                            <div className=" p-3 border-bottom">
                                <p className="text-muted">Enterprise</p>
                                <h3>₦70,000 <small className="text-muted font-weight-normal" style={{fontSize: '14px', verticalAlign: 'middle'}}>per month</small></h3>
                                <Link className="d-block w-100 btn btn-success my-3" href='/dashboard/payment'>Get Started</Link>
                            </div>
                            <div className="p-3">
                                <p className="font-weight-bold">FEATURES</p>
                                <ul className={`${styles.subscUl}`}>
                                    <li>
                                        <span>Unlimited admin logins</span>
                                    </li>
                                    <li>
                                        <span>Users can create unlimited routes (to & fro counts as 2)</span>
                                    </li>
                                    <li>
                                        <span>Users can add unlimited buses</span>
                                    </li>
                                    <li>
                                        <span>Users can add unlimited drivers</span>
                                    </li>
                                    <li>
                                        <span>Access to submit bid for charter (within city & Interstate)</span>
                                    </li>
                                    <li>
                                        <span>Access to view incremental insights</span>
                                    </li>
                                    <li>
                                        <span>Top results when searched on mobile</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
