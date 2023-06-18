
import GlobalModal from "../../Modals/GlobalModal";
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { Helmet } from 'react-helmet-async';
// import { useState } from "react";
import styles from './VehiclesPage.module.css'
import React from 'react';

// import { styled } from '@mui/material/styles';
// import {
//     // Box, 
//     // Stack, 
//     // Avatar,
//     AppBar,
//     Toolbar,
//     IconButton
// } from '@mui/material';
import { useEffect, useState } from "react";
import bus from 'src/bus';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Card,
    //   Avatar,
} from '@mui/material';
import Scrollbar from '../../components/scrollbar';

// import Iconify from '../../../src/components/iconify';

// // ----------------------------------------------------------------------
// import { bgBlur } from '../../../src/utils/cssStyles';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    overflow: 'hidden',
    bgcolor: '#F5F5F5',
    border: '1px solid #F5F5F5',
    borderRadius: '5px',
    boxShadow: 24,
    p: 3,
};

// const NAV_WIDTH = 280;

// const HEADER_MOBILE = 64;

// const HEADER_DESKTOP = 50;

// const StyledRoot = styled(AppBar)(({ theme }) => ({
//     ...bgBlur({ color: theme.palette.background.default }),
//     boxShadow: 'none',
//     [theme.breakpoints.up('lg')]: {
//         width: `calc(100% - ${NAV_WIDTH + 1}px)`,
//     },
// }));

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//     minHeight: HEADER_MOBILE,
//     [theme.breakpoints.up('lg')]: {
//         minHeight: HEADER_DESKTOP,
//         padding: theme.spacing(0, 5),
//     },
// }));
// ----------------------------------------------------------------------


export default function VehiclesPage() {
    // const [modalOpen, setModalOpen] = useState(false);
    const [assignDriver, setassignDriver] = useState(false);
    const [filterModalOpen, setFilterModalOpen] = useState(false);
    const [addDriverModalOpen, setAddDriverModalOpen] = useState(false);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleCloseViewFilter = () => {
        setFilterModalOpen(false);
    };

    const handleCloseAddDriver = () => {
        setAddDriverModalOpen(!addDriverModalOpen);
    };

    const handleCloseAssignDriver = () => {
        setassignDriver(false);
    };

    useEffect(() => {
      bus.on('open-modal', ()=> {
        setAddDriverModalOpen(true)
      })
    },[])

    // const [value, setValue] = React.useState('1');

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    return (
        <>
            <Helmet>
                <title> Drivers </title>
            </Helmet>

            {/* <StyledRoot className='header_container style_cs'>
                <StyledToolbar className='px-0 style_c'>
                    <IconButton
                        //   onClick={onOpenNav}
                        sx={{
                            mr: 1,
                            color: 'text.primary',
                            display: { lg: 'none' },
                        }}
                    >
                        <Iconify icon="eva:menu-2-fill" />
                    </IconButton>
                    <div className={` header d-none d-md-block`}>
                        <h4 className={`mb-1 pb-0`}>Vehicles</h4>
                        <p style={{ fontSize: '14px' }} className={`mb-0 pb-0`}>
                            {'Share vehicle information and operational capacity'}
                        </p>
                    </div>

                    <Box sx={{ flexGrow: 1 }} />

                    <div className="d-flex text-right">

                        <button className={`${styles.export_btn} pt-2 btn m-0 mx-3`}
                            onClick={() => setAddDriverModalOpen(true)}
                            style={{
                                verticalAlign: 'middle',
                            }}>
                            <span style={{ verticalAlign: 'middle', }}>
                                <img src="/assets/icons/plus.svg" className='mr-1' alt="" />
                                Add Vehicle
                            </span>
                        </button>
                        <button
                            className="btn border"
                            style={{
                                backgroundColor: '#fff',
                                border: '1px solid #D0D5DD',
                                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                borderRadius: '4px',
                                whiteSpace: 'nowrap'
                            }}>
                            <small className="d-md-inline-block">
                                Import CSV File
                            </small>
                        </button>
                    </div>
                </StyledToolbar>
            </StyledRoot> */}

            <div className="wrapper">
                <div className="header d-block d-md-none mb-4 mt-2 pt-3">
                    <div className={`${styles.product_actions} d-md-flex justify-content-between`}>
                        <div className=" ">
                            <h4 className={`mb-0 pb-0`}>Vehicles</h4>
                            <p style={{ fontSize: '14px' }} className={`mb-0 mt-2 pb-0`}>
                                Share vehicle information and operational capacity
                            </p>

                        </div>
                    </div>
                </div>


                <div className=" px-2">

                    <div className={`${styles.filters} mt-4`}>
                        <div className="row">
                            <div className={`${styles.hold_input} col-6   `}>
                                <img src="/assets/icons/search.svg" alt="" />
                                <input type="text" name="search" placeholder="Search" style={{ textIndent: '25px', width: '240px' }} className=" form-control" />

                            </div>
                            <div className="col-6  text-right">
                                <button
                                    onClick={() => setFilterModalOpen(true)}
                                    className="btn  border"
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
                    <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>
                        <div className='p-4 border-bottom'>

                            <div className="d-md-flex justify-content-between" >
                                <div className="pb-3 pb-md-0">
                                    <h5 className="table_desc_header">
                                        Vehicle Information
                                    </h5>
                                    <small style={{ fontWeight: '200', fontSize: '14px' }}>
                                        Details of buses and assigned drivers
                                    </small>

                                </div>
                                <div className="pt-md-2">
                                    <div className="dropleft ">
                                        <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} pt-0 btn m-0`}>
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
                            <div className={`${styles.overflow_table} table-responsive  pt-3 pb-3 pl-0 pr-0`}  >

                                <table className={`${styles.table} table-hover table-striped`}>
                                    <thead className={`${styles.thead}`}>


                                        <tr>
                                            <th className="text-muted">
                                                Bus ID
                                                <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                                            </th>
                                            <th className="text-muted">
                                                Phone Number
                                            </th>
                                            <th className="text-muted" style={{ width: "16%" }}>
                                                Assigned Driver
                                                <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                                            </th>
                                            <th className="text-muted">
                                                No of Seat
                                            </th>
                                            <th className="text-muted">
                                                Date
                                            </th>
                                            <th className="text-muted">
                                                Completed Trips
                                            </th>
                                            <th className="text-muted">
                                                Action
                                            </th>
                                            {/* <th className="text-muted">
                                                Email Address
                                            </th>
                                            <th className="text-muted">
                                                Driver Address
                                            </th> */}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <p className="m-0 font-weight-bold">Bus 001</p>
                                                <p className="m-0"><small className="font-weight-normal text-muted">Toyota Hiace</small></p>
                                                {/* <p className="m-0"><small className="font-weight-normal " style={{color: '#00AF52'}}>IKD-123AB</small></p> */}
                                            </td>
                                            <td>
                                                <span>
                                                    (603) 555-0123
                                                </span>
                                            </td>
                                            <td>
                                                <p className="mb-0 text-danger" style={{ fontSize: '14px', textDecoration: 'underline' }}>
                                                    <span className=" text-danger" href="#" onClick={() => setassignDriver(true)} style={{ cursor: 'pointer' }}>
                                                        No Assigned Driver
                                                    </span>
                                                </p>

                                            </td>
                                            <td className="text-center">
                                                <span>
                                                    14
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    12/10/23
                                                </span>
                                            </td>
                                            <td>
                                                <span>20</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button} px-3 py-2`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                        <button type="button" className="rss dropdown-item btn border-0">Re-assign</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <p className="m-0 font-weight-bold">Bus 005</p>
                                                <p className="m-0"><small className="font-weight-normal text-muted">Toyota Hiace</small></p>
                                                {/* <p className="m-0"><small className="font-weight-normal " style={{color: '#00AF52'}}>IKD-123AB</small></p> */}
                                            </td>
                                            <td>
                                                <span>
                                                    (603) 555-0123
                                                </span>
                                            </td>
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
                                                        <span style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                            <td className="text-center">
                                                <span>
                                                    14
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    12/10/23
                                                </span>
                                            </td>
                                            <td>
                                                <span>20</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button} px-3 py-2`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                        <button type="button" className="rss dropdown-item btn border-0">Re-assign</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <p className="m-0 font-weight-bold">Bus 001</p>
                                                <p className="m-0"><small className="font-weight-normal text-muted">Toyota Hiace</small></p>
                                                {/* <p className="m-0"><small className="font-weight-normal " style={{color: '#00AF52'}}>IKD-123AB</small></p> */}
                                            </td>
                                            <td>
                                                <span>
                                                    (603) 555-0123
                                                </span>
                                            </td>
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
                                                        <span style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                            <td className="text-center">
                                                <span>
                                                    14
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    12/10/23
                                                </span>
                                            </td>
                                            <td>
                                                <span>20</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button} px-3 py-2`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                        <button type="button" className="rss dropdown-item btn border-0">Re-assign</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <p className="m-0 font-weight-bold">Bus 0012</p>
                                                <p className="m-0"><small className="font-weight-normal text-muted">Toyota Hiace</small></p>
                                                {/* <p className="m-0"><small className="font-weight-normal " style={{color: '#00AF52'}}>IKD-123AB</small></p> */}
                                            </td>
                                            <td>
                                                <span>
                                                    (603) 555-0123
                                                </span>
                                            </td>
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
                                                        <span style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                            <td className="text-center">
                                                <span>
                                                    14
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    12/10/23
                                                </span>
                                            </td>
                                            <td>
                                                <span>20</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button} px-3 py-2`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                        <button type="button" className="rss dropdown-item btn border-0">Re-assign</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <p className="m-0 font-weight-bold">Bus 006</p>
                                                <p className="m-0"><small className="font-weight-normal text-muted">Toyota Hiace</small></p>
                                                {/* <p className="m-0"><small className="font-weight-normal " style={{color: '#00AF52'}}>IKD-123AB</small></p> */}
                                            </td>
                                            <td>
                                                <span>
                                                    (603) 555-0123
                                                </span>
                                            </td>
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
                                                        <span style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                            <td className="text-center">
                                                <span>
                                                    14
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    12/10/23
                                                </span>
                                            </td>
                                            <td>
                                                <span>20</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button} px-3 py-2`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                        <button type="button" className="rss dropdown-item btn border-0">Re-assign</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <p className="m-0 font-weight-bold">Bus 003</p>
                                                <p className="m-0"><small className="font-weight-normal text-muted">Toyota Hiace</small></p>
                                                {/* <p className="m-0"><small className="font-weight-normal " style={{color: '#00AF52'}}>IKD-123AB</small></p> */}
                                            </td>
                                            <td>
                                                <span>
                                                    (603) 555-0123
                                                </span>
                                            </td>
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
                                                        <span style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                            <td className="text-center">
                                                <span>
                                                    14
                                                </span>
                                            </td>
                                            <td>
                                                <span>
                                                    12/10/23
                                                </span>
                                            </td>
                                            <td>
                                                <span>20</span>
                                            </td>
                                            <td>
                                                <div className="dropleft ">
                                                    <span
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                                                        className={`${styles.action_button} px-3 py-2`} style={{
                                                            cursor: 'pointer',

                                                        }}>
                                                        <img src="/assets/icons/action.svg" alt="" />

                                                    </span>

                                                    <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                                        <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                                                        <button type="button" className="rss dropdown-item btn border-0">Re-assign</button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </Scrollbar>
                        <div className="card border-0 p-0 m-0">
                            <div className="card-body pt-0 mt-0">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-item-center">
                                        Page 1 of <b className="pl-1"> 10</b>
                                    </div>
                                    <div className={`${styles.pagination_button_container}`}>
                                        <button className="btn border rounded" >Previous</button>
                                        &nbsp;
                                        &nbsp;
                                        <button className="btn border rounded" >Next</button>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </Card>
                </div>


                {/* <Box style={{ padding: '0' }} className='aa' sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs" onChange={handleChange}>
                <Tab label="Customer Details" value="1" />
                <Tab label="Reviews" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ paddingLeft: '0' }}>
              <Details />
            </TabPanel>
            <TabPanel value="2" style={{ paddingLeft: '0' }}>
              <Reviews />
            </TabPanel>
          </TabContext>
        </Box> */}
            </div>

            <GlobalModal
                open={addDriverModalOpen}
                onClose={handleCloseAddDriver}
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                width='540px !important'
                overflowY='scroll'
                bgcolor='#FFFF'
                border='1px solid #F5F5F5'
                borderRadius='5px'
                boxShadow='24'
                p='25px'
            >
                <div className={`${styles.modal_content}`}>
                    <div className={`${styles.modal_header} mb-0`}>
                        <h5 style={{
                            fontSize: '19px',
                            fontWeight: '700',

                        }}>Add Vehicle</h5>

                        <span onClick={handleCloseAddDriver} style={{ cursor: 'pointer' }}>
                            <img src="/assets/icons/x.svg" alt="" />

                        </span>

                    </div>
                    <span className="text-muted mb-4" style={{ fontSize: '13px' }}>Details of Vehicle</span>

                    <form action="" className="mt-0">
                        <div className="row mt-4">
                            <div className="col-12 mb-1">
                                <div className="mb-3">
                                    <label htmlFor="loc">Vehicle Model</label>
                                    <TextField
                                        type='text'
                                        id="loc"
                                        size="small"
                                        readonly
                                        fullWidth
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="loc">Number of Seats</label>
                                    <TextField
                                        type='text'
                                        readonly
                                        id="loc"
                                        size="small"
                                        fullWidth
                                    />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="loc">Plate Number</label>
                                    <TextField
                                        readonly
                                        type='text'
                                        id="loc"
                                        size="small"
                                        fullWidth
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </GlobalModal>


            {/* Fiter Modal */}
            <GlobalModal
                open={filterModalOpen}
                onClose={handleCloseViewFilter}
                position='absolute'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                width='740px !important'
                overflowY='scroll'
                bgcolor='#FFFFFF'
                border='1px solid #F5F5F5'
                borderRadius='5px'
                boxShadow='24'
                p='25px'
            >
                <div className={`${styles.modal_content}`}>
                    <div className={`${styles.modal_header} mb-0`}>
                        <h5 style={{
                            fontSize: '19px',
                            fontWeight: '700',

                        }}>Filter</h5>
                        <span onClick={handleCloseViewFilter} style={{ cursor: 'pointer' }}>
                            <img src="/assets/icons/x.svg" alt="" />

                        </span>

                    </div>


                    <form action="" className="mt-3">
                        <div className="row">
                            <div className="col-md-6 mb-1">
                                <div className="mb-3">
                                    <label htmlFor="name">No of seat</label>
                                    <Select
                                        labelId="s"
                                        id="s"
                                        fullWidth
                                        size="small"
                                        required
                                        name="verified"
                                        defaultValue='select'
                                    >

                                        <MenuItem value='select'>Select number of seat</MenuItem>
                                        <MenuItem value='14'>14</MenuItem>
                                        <MenuItem value='18'>18</MenuItem>
                                        <MenuItem value='22'>22</MenuItem>
                                    </Select>
                                </div>
                                {/* <div className="mb-3">
                                    <label htmlFor="name">Location</label>
                                    <div>
                                        <TextField
                                            name="min_products"
                                            required
                                            type='number'
                                            id="ounit"
                                            placeholder="Enter Location"
                                            size="small"
                                            style={{ width: '100%' }}

                                        />
                                    </div>
                                </div> */}


                            </div>
                            <div className="col-md-6 mb-1">

                                <label htmlFor="ounit">Completed Trips</label>
                                <div className=" d-flex">
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="mb-3">
                                            <TextField
                                                name="min_products"
                                                required
                                                type='number'
                                                id="ounit"
                                                placeholder="Min"
                                                size="small"

                                            />


                                        </div>

                                    </div>
                                    <div className="px-1 d-flex   align-items-center " style={{ height: '40px' }}>
                                        <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                                    </div>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="mb-3">
                                            <TextField
                                                required
                                                name="max_products"
                                                type='number'
                                                placeholder="Max "
                                                size="small"

                                            />


                                        </div>

                                    </div>

                                </div>
                                <label htmlFor="ounit">Date</label>

                                <div className=" d-flex">
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="mb-3">
                                            <DatePicker
                                                showIcon
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                dateFormat="dd/MM/yyyy"
                                                className="form-control"
                                                placeholderText="Start"
                                                required
                                            />


                                        </div>

                                    </div>
                                    <div className="px-1 d-flex   align-items-center " style={{ height: '40px' }}>
                                        <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                                    </div>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="mb-3">
                                            <DatePicker
                                                showIcon
                                                selected={endDate}
                                                onChange={(date) => setEndDate(date)}
                                                dateFormat="dd/MM/yyyy"
                                                className="form-control"
                                                placeholderText="End"
                                                required
                                            />


                                        </div>

                                    </div>

                                </div>

                                {/* <div className=" d-flex">
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="mb-3">
                                            <TextField
                                                required
                                                name="min_balance"
                                                type='number'
                                                id="ounit"
                                                placeholder="Min"
                                                size="small"

                                            />


                                        </div>

                                    </div>
                                    <div className="px-1 d-flex   align-items-center " style={{ height: '40px' }}>
                                        <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                                    </div>
                                    <div className="" style={{ width: '100%' }}>
                                        <div className="mb-3">
                                            <TextField
                                                required
                                                type='number'
                                                name="max_balance"
                                                placeholder="Max "
                                                size="small"

                                            />


                                        </div>

                                    </div>

                                </div> */}

                            </div>
                        </div>
                        <div className="mb-4">
                            <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                                Proceed
                            </button>
                        </div>
                    </form>
                </div>
            </GlobalModal>


            {/* Assign Driver Modal */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={assignDriver}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                disableEnforceFocus
            >
                <Fade in={assignDriver}>
                    <Box sx={style} className={`mobile_modal_size`}>
                        <div className={`modal_content`}
                        // style={{overflowY: 'scroll', height: '450px'}} 
                        >
                            <div className={`modal_header mb-0`}>
                                <h5 style={{
                                    fontWeight: 'bold',
                                    fontSize: '22px'
                                }}>
                                    Assign Driver
                                </h5>
                                <span onClick={handleCloseAssignDriver} style={{ cursor: 'pointer' }}>
                                    <img src="/assets/icons/x.svg" alt="" />

                                </span>

                            </div>
                            <p className=' mt-0' style={{
                                fontSize: '14px'
                            }}>
                                <small className="m-0 d-block">Bus 001</small>
                                <small className="m-0 d-block text-muted font-weight-normal">Toyota Hiace</small>
                            </p>

                            <div className="mt-3 mb-2">
                                <label htmlFor="drivers">Available Drivers</label>
                                <Select
                                    labelId="s"
                                    id="s"
                                    fullWidth
                                    size="small"
                                    required
                                    name="verified"
                                    defaultValue='select'
                                >

                                    <MenuItem value='select'>Select Driver</MenuItem>
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
                                                    <div className="initials">
                                                        {/* AM */}
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Ariene McCoy
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>
                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        {/* AM */}
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Ariene McCoy
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        {/* AM */}
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Ariene McCoy
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        {/* AM */}
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Ariene McCoy
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        {/* AM */}
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Ariene McCoy
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>
                                        <tr className={`${styles.tr} `}>
                                            <td>
                                                <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <div className="initials">
                                                        {/* AM */}
                                                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                    </div>
                                                    &nbsp;
                                                    <div className=" ">
                                                        <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Ariene McCoy
                                                            </strong>
                                                        </p>
                                                        <span className="text-muted" style={{ fontSize: '13px' }}>
                                                            243666
                                                        </span>

                                                    </div>

                                                </div>

                                            </td>
                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                            <div className="d-block w-100 mt-3"><button className="d-block w-100 btn py-2 text-white" onClick={handleCloseAssignDriver} style={{ background: '#00AF52' }}>Assign</button></div>

                        </div>

                    </Box>
                </Fade>
            </Modal>

        </>
    );
}
