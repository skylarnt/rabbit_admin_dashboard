

// ----------------------------------------------------------------------
import styles from "../CharterComponents.module.css"
// import {
//     // useEffect, 
//     useState
// } from "react"
import {
    Card,
    //   Avatar,
} from '@mui/material';
import Scrollbar from '../../../components/scrollbar';

// ----------------------------------------------------------------------


export default function AvailableBuses() {

    return (
        <>
            <div className="px-0 px-md-2">

                <div className={`${styles.filters} mt-4`}>
                    <div className="row">
                        <div className={`${styles.hold_input} col-6   `}>
                            <img src="/assets/icons/search.svg" alt="" />
                            <input type="text" name="search" placeholder="Search" style={{ textIndent: '25px', width: '240px' }} className=" form-control" />

                        </div>

                    </div>
                </div>
                <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>
                    <div className='p-4 border-bottom'>

                        <div className="d-md-flex justify-content-between" >
                            <div className="pb-3 pb-md-0">
                                <h5 className="table_desc_header mb-2">
                                    Available Buses
                                </h5>
                                <small style={{ fontWeight: 'normal', fontSize: '14px' }}>
                                    View Buses and create pricing for your orders
                                </small>

                            </div>
                            <div className="pt-md-2">
                                <div className="dropleft ">
                                    <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} pt-2 btn m-0`}>
                                        <span style={{
                                            paddingTop: '8px',
                                        }}>
                                            <img src="/assets/icons/download.svg" alt="" /> &nbsp;
                                            Export
                                        </span>
                                        {/* &nbsp;
                    &nbsp;
                    <span style={{
                        borderLeft: '1px solid white',
                        display: 'inline-block',
                        height: 'inherit',
                        paddingTop: '8px',
                        paddingLeft: '8px',
                        textAlign: 'center',

                    }}>
                        <img src="/assets/icons/arrowDown.svg" alt="" />

                    </span> */}


                                    </button>

                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                        <button type="button" className="rss dropdown-item btn border-0">CSV</button>
                                        <button type="button" className="rss dropdown-item btn border-0">Excel </button>
                                        <button type="button" className="rss dropdown-item btn border-0">PDF </button>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <Scrollbar>
                        <div className={`${styles.overflow_table} table-responsive pb-3 pl-0 pr-0`}  >
                            <table className={`${styles.table} table-hover table-striped`}>
                                <thead className={`${styles.thead}`}>
                                    <tr>
                                        <th className="text-muted" style={{ width: "16%" }}>
                                            Bus ID
                                        </th>
                                        <th className="text-muted text-center">
                                            Plate Number
                                        </th>
                                        <th className="text-muted">
                                            No of Seat
                                        </th>
                                        <th className="text-muted">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Bus 001
                                                    </p>
                                                    <span style={{ fontSize: '13px' }}>
                                                        Toyota Hiace
                                                    </span>

                                                </div>
                                            </div>

                                        </td>

                                        <td className="text-center">
                                            <span className="">
                                                (704) 555-0127
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                14
                                            </span>

                                        </td>
                                        <td>
                                            <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button}`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Bus 001
                                                    </p>
                                                    <span style={{ fontSize: '13px' }}>
                                                        Toyota Hiace
                                                    </span>

                                                </div>
                                            </div>

                                        </td>

                                        <td className="text-center">
                                            <span className="">
                                                (704) 555-0127
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                14
                                            </span>

                                        </td>
                                        <td>
                                            <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button}`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Bus 001
                                                    </p>
                                                    <span style={{ fontSize: '13px' }}>
                                                        Toyota Hiace
                                                    </span>

                                                </div>
                                            </div>

                                        </td>

                                        <td className="text-center">
                                            <span className="">
                                                (704) 555-0127
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                14
                                            </span>

                                        </td>
                                        <td>
                                            <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button}`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Bus 001
                                                    </p>
                                                    <span style={{ fontSize: '13px' }}>
                                                        Toyota Hiace
                                                    </span>

                                                </div>
                                            </div>

                                        </td>

                                        <td className="text-center">
                                            <span className="">
                                                (704) 555-0127
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                14
                                            </span>

                                        </td>
                                        <td>
                                            <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button}`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Bus 001
                                                    </p>
                                                    <span style={{ fontSize: '13px' }}>
                                                        Toyota Hiace
                                                    </span>

                                                </div>
                                            </div>

                                        </td>

                                        <td className="text-center">
                                            <span className="">
                                                (704) 555-0127
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                14
                                            </span>

                                        </td>
                                        <td>
                                            <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button}`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>
                                </tbody>

                            </table>

                        </div>
                        {/* <div className="d-flex justify-content-center">

            </div> */}

                        {/* <div className="alert alert-primary text-center">
                <h4>No record found</h4>
              </div> */}

                    </Scrollbar>
                    <div className="card border-0 p-0 m-0">
                        <div className="card-body pt-0 mt-0">
                            <div className="d-flex justify-content-between">
                                <div className=" pt-2">
                                    Page 1 of <b className="pl-1"> 10</b>
                                </div>
                                <div className={`${styles.pagination_button_container}`}>
                                    <button className="btn border" >
                                        <span className="d-none d-sm-block">
                                            Previous
                                        </span>
                                        <span>
                                            <i className="bi bi-chevron-left d-block d-sm-none"></i>
                                        </span>
                                    </button>
                                    &nbsp;
                                    &nbsp;
                                    <button className="btn border" >
                                        <span className="d-none d-sm-block">
                                            Next
                                        </span>
                                        <span>
                                            <i className="bi bi-chevron-right d-block d-sm-none"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>

                </Card>
            </div>

        </>
    );
}
