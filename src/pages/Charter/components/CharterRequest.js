

// ----------------------------------------------------------------------
import styles from "../CharterComponents.module.css"
import {
    // useEffect, 
    useState
} from "react"
import "react-datepicker/dist/react-datepicker.css";

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import {
    Card,
    //   Avatar,
} from '@mui/material';
import Scrollbar from '../../../components/scrollbar';
// ----------------------------------------------------------------------
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 570,
    overflow: 'hidden',
    bgcolor: '#F5F5F5',
    border: '1px solid #F5F5F5',
    borderRadius: '5px',
    boxShadow: 24,
    p: 3,
};

export default function CharterRequest() {
    const [assignVehicle, setassignVehicle] = useState(false);

    const handleCloseAssignVehicle = () => {
        setassignVehicle(false);
    };


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
                                    Charter Request
                                </h5>
                                <small style={{ fontWeight: 'normal', fontSize: '14px' }}>
                                    View all history of charters
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
                            <table className={`${styles.table} table-hover table-striped`} style={{ minWidth: '95em' }}>
                                <thead className={`${styles.thead}`}>
                                    <tr>
                                        <th className="text-muted" style={{ width: "16%" }}>
                                            Customer Name
                                            <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                                        </th>
                                        <th className="text-muted">
                                            Vehicle Type
                                        </th>
                                        <th className="text-muted">
                                            Route
                                        </th>
                                        <th className="text-muted">
                                            Region
                                        </th>
                                        <th className="text-muted">
                                            Charter Type
                                        </th>
                                        <th className="text-muted">
                                            Amount
                                        </th>
                                        <th className="text-muted">
                                            Date of Departure
                                        </th>
                                        <th className="text-muted">
                                            Time of Departure
                                        </th>
                                        <th className="text-muted">
                                            Date of Return
                                        </th>
                                        <th className="text-muted">
                                            Time of Return
                                        </th>
                                        <th className="text-muted">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Ariene McCoy
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>

                                        </td>
                                        <td>
                                            <span>
                                                Salon Car
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Sabo-Yaba
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        VI (Eko Hotel)
                                                    </span>

                                                </div>
                                                &nbsp;
                                                &nbsp;
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/icons/to-fro.png" alt="" />
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            <span>IntraState</span>
                                        </td>
                                        <td>
                                            <span>One-off</span>
                                        </td>
                                        <td>
                                            <span>N5.63M</span>
                                        </td>
                                        <td>
                                            <span>
                                                12/10/23
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                10:22am
                                            </span>
                                        </td>
                                        <td>
                                            <span>

                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>

                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-success mx-1" onClick={() => setassignVehicle(true)}>Accept</button>
                                            <button className="btn btn-danger mx-1">Reject</button>
                                            {/* <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button} px-3 py-2`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0">View</button>
                                                </div>
                                            </div> */}
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Michael Gillard
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>

                                        </td>
                                        <td>
                                            <span>
                                                14 Seater
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Lagos
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        Ogun
                                                    </span>

                                                </div>
                                                &nbsp;
                                                &nbsp;
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/icons/to-fro.png" alt="" />
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            <span>InterState</span>
                                        </td>
                                        <td>
                                            <span>Round Trip</span>
                                        </td>
                                        <td>
                                            <span>N37.86K</span>
                                        </td>
                                        <td>
                                            <span>
                                                12/10/23
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                12:30am
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                12/10/23
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                12:30am
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-success mx-1" onClick={() => setassignVehicle(true)}>Accept</button>
                                            <button className="btn btn-danger mx-1">Reject</button>
                                            {/* <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button} px-3 py-2`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0">View</button>
                                                </div>
                                            </div> */}
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Michael Gillard
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>

                                        </td>
                                        <td>
                                            <span>
                                                14 Seater
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Lagos
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        Ogun
                                                    </span>

                                                </div>
                                                &nbsp;
                                                &nbsp;
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/icons/to-fro.png" alt="" />
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            <span>InterState</span>
                                        </td>
                                        <td>
                                            <span>Round Trip</span>
                                        </td>
                                        <td>
                                            <span>N37.86K</span>
                                        </td>
                                        <td>
                                            <span>
                                                12/10/23
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                12:30am
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                12/10/23
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                12:30am
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-success mx-1" onClick={() => setassignVehicle(true)}>Accept</button>
                                            <button className="btn btn-danger mx-1">Reject</button>
                                            {/* <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button} px-3 py-2`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0">View</button>
                                                </div>
                                            </div> */}
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Michael Gillard
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>

                                        </td>
                                        <td>
                                            <span>
                                                14 Seater
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className=" ">
                                                    <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                                                        Lagos
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        Ogun
                                                    </span>

                                                </div>
                                                &nbsp;
                                                &nbsp;
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/icons/to-fro.png" alt="" />
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            <span>InterState</span>
                                        </td>
                                        <td>
                                            <span>Round Trip</span>
                                        </td>
                                        <td>
                                            <span>N37.86K</span>
                                        </td>
                                        <td>
                                            <span>
                                                12/10/23
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                12:30am
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                12/10/23
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <span>
                                                12:30am
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-success mx-1" onClick={() => setassignVehicle(true)}>Accept</button>
                                            <button className="btn btn-danger mx-1">Reject</button>
                                            {/* <div className="dropleft ">
                                                <span
                                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                    className={`${styles.action_button} px-3 py-2`} style={{
                                                        cursor: 'pointer',

                                                    }}>
                                                    <img src="/assets/icons/action.svg" alt="" />

                                                </span>

                                                <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                    <button type="button" className="rss dropdown-item btn border-0">View</button>
                                                </div>
                                            </div> */}
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


            {/* Assign Vehicle Modal */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={assignVehicle}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                disableEnforceFocus
            >
                <Fade in={assignVehicle}>
                    <Box sx={style} className={`mobile_modal_size`}>
                        <div className={`modal_content`}
                        // style={{overflowY: 'scroll', height: '450px'}} 
                        >
                            <div className={`modal_header mb-0`}>
                                <h5 style={{
                                    fontWeight: 'bold',
                                    fontSize: '22px'
                                }}>
                                    Assign Vehicle
                                </h5>
                                <span onClick={handleCloseAssignVehicle} style={{ cursor: 'pointer' }}>
                                    <img src="/assets/icons/x.svg" alt="" />

                                </span>

                            </div>

                            <div className="mt-3 mb-2">
                                <label htmlFor="vehicles">Available Vehicles</label>
                                <Select
                                    labelId="s"
                                    id="s"
                                    fullWidth
                                    size="small"
                                    required
                                    name="verified"
                                    defaultValue='select'
                                >

                                    <MenuItem value='select'>Select Vehicles</MenuItem>
                                    <MenuItem value='14'>McCoy</MenuItem>
                                    <MenuItem value='18'>McCoy</MenuItem>
                                    <MenuItem value='22'>McCoy</MenuItem>
                                </Select>
                            </div>
                            <div className='hold_input4' style={{ width: '100%' }}>
                                <img src="/assets/icons/search.svg" alt="" />
                                <input type="text" placeholder="Search" style={{ textIndent: '25px', width: '100%' }} className=" form-control" />

                            </div>

                            <div className={`table-responsive mt-3 pb-3 pl-0 pr-0`}
                                style={{ overflowY: 'scroll', height: '280px' }}
                            >

                                <table className={`${styles.table} table-hover table-striped`}>
                                    <tbody>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Bus 001
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            Toyota Hiace
                                                        </span>

                                                    </div>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Bus 001
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            Toyota Hiace
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Bus 001
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            Toyota Hiace
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Bus 001
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            Toyota Hiace
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Bus 001
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            Toyota Hiace
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Bus 001
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            Toyota Hiace
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                            <div className="d-block w-100 mt-3"><button className="d-block w-100 btn py-2 text-white" onClick={handleCloseAssignVehicle} style={{ background: '#00AF52' }}>Assign</button></div>

                        </div>

                    </Box>
                </Fade>
            </Modal>

        </>
    );
}
