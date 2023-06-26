
// ----------------------------------------------------------------------
import { useState } from 'react';
import styles from "../page.module.css"
import {
    Card,
} from '@mui/material';
import Scrollbar from '../../../components/scrollbar';
import { BallTriangle } from 'react-loader-spinner'

const TABLE_HEAD = [
    { id: 'customerName', label: 'Customer name', alignRight: false },
    { id: 'phone', label: 'Phone Number', alignRight: false },
    { id: 'emailAddress', label: 'Email Address', alignRight: false },
    { id: 'completedTrip', label: 'Completed Trips', alignRight: false },
    { id: 'amount', label: 'Amount', alignRight: false },
    { id: 'action', label: 'Action', alignRight: false },
];
export default function CustomerDetails() {

    const [searchvalue, setSearchvalue] = useState([]);
    const [pending] = useState(false)


    const searchFilter = (e) => {
        setSearchvalue(e.target.value)
    }

    const handleViewClick = (d) => {
        // navigate('/app/sales_details')
    };

    return (
        <>
            <div className={`${styles.filters} mt-4 px-0`}>
                <div className="row">
                    <div className={`${styles.hold_input} col-md-3 col-6   `}>
                        <img src="/assets/icons/search.svg" alt="" />
                        <input type="text" value={searchvalue} onChange={searchFilter} placeholder="Search" style={{ textIndent: '25px', width: '100%' }} className=" form-control" />

                    </div>
                    <div className="col-md-9 col-6  text-right">
                        <button className="btn  border"
                            style={{
                                backgroundColor: '#fff',
                                border: '1px solid #D0D5DD',
                                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                borderRadius: '4px'
                            }}>
                            <img className="" style={{ display: 'inline', width: '28%' }} src="/assets/icons/filterlines.svg" alt="" />
                            &nbsp;
                            <small className="d-none d-md-inline-block">
                                Filters
                            </small>
                        </button>

                    </div>
                </div>


            </div>
            <div>
                <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>
                    <div className='p-3 '>
                        <div className="d-md-flex justify-content-between" >
                            <div className="pb-3 pb-md-0">
                                <h5 className="table_desc_header">
                                    All Users

                                </h5>
                                <small style={{ fontWeight: '200', fontSize: '12px' }}>
                                    These are the total users of your service
                                </small>

                            </div>
                            <div className="pt-md-2">
                                <div className="dropleft ">
                                    <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} btn m-0`}>
                                        <span style={{
                                            paddingTop: '8px',


                                        }}>
                                            <img src="/assets/icons/download.svg" alt="" /> &nbsp;
                                            Export
                                        </span>
                                        &nbsp;
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

                                        </span>


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
                        <div className={`table-responsive-sm pt-3 pb-3 pl-0 pr-0`}>
                            <table className={`${styles.table} table-hover table-striped`}>
                                <thead className={`${styles.thead}`}>


                                    <tr>
                                        {TABLE_HEAD.map((el, i) => {
                                            let sIndex = i < 1 ? 1 : false;

                                            return (
                                                <th key={i} className="text-muted">{el.label} {sIndex && (
                                                    <span style={{ cursor: 'pointer' }}>
                                                        <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                                                    </span>
                                                )}</th>



                                            )
                                        })}

                                    </tr>

                                </thead>
                                <tbody>


                                    <tr style={{ cursor: 'pointer' }} className={`${styles.tr}`}>
                                        <td onClick={() => handleViewClick(1)}>
                                            <div className=" ">
                                                <img
                                                    className="float-md-left  mr-2"
                                                    src={'/assets/image1.svg'}
                                                    alt=""
                                                    style={{
                                                    }}
                                                />
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                           Ariena McCoy
                                                        </strong>


                                                    </p>
                                                    <span style={{ fontSize: '10px' }}>
                                                        22244


                                                    </span>
                                                </div>

                                            </div>

                                        </td>
                                        <td onClick={() => handleViewClick(1)}>
                                           (704) 555-0127
                                        </td>
                                        <td  onClick={() => handleViewClick(1)}>
                                            example@gmail.com
                                        </td>
                                        <td onClick={() => handleViewClick(1)}>
                                           20
                                        </td>
                                        <td onClick={() => handleViewClick(1)}>
                                            <p>
                                                ₦5.63M

                                            </p>
                                        </td>
                                        
                                        <td>
                                            <div className="dropleft ">

                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button}`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" onClick={() => handleViewClick(1)} className="rss dropdown-item btn border-0">View</button>


                                                </div>
                                            </div>

                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>
                        <div className="d-flex justify-content-center">
                            {pending &&
                                <BallTriangle

                                    height={50}
                                    width={55}
                                    radius={5}
                                    color="#2563EB"
                                    ariaLabel="ball-triangle-loading"
                                    wrapperClass={{}}
                                    wrapperStyle=""
                                    visible={true}
                                />

                            }
                        </div>
                        {/* {
                            (!data.length && !pending) &&

                            <div className="alert alert-primary text-center">
                                <h4>No record found</h4>
                            </div>
                        } */}
                    </Scrollbar>

                    <div className="card border-0 p-0 m-0">
                        <div className="card-body pt-0 mt-0">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-item-center pt-2">
                                    Page 1 of <b className="pl-1"> 5</b>
                                </div>
                                <div className={`${styles.pagination_button_container}`}>
                                    <button className="btn">Previous</button>
                                    &nbsp;
                                    <button className="btn">Next</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </Card>
            </div>


        </>
    );
}
