/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Helmet } from 'react-helmet-async';
// import * as Router from 'react-router-dom';
import Scrollbar from '../../components/scrollbar';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';

import {
    Card,
} from '@mui/material';
import { useEffect, useState } from "react";
import bus from "src/bus"; import GlobalModal from "../../Modals/GlobalModal";
import styles from './Wallet.module.css'
import Filter1 from '../Filter/Filter1';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [topupModalOpen, setTopupModalOpen] = useState(false);
    const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleCloseTopup = () => {
        setTopupModalOpen(false);
    };

    const handleCloseWithdraw = () => {
        setWithdrawModalOpen(false);
    };


    useEffect(() => {
        bus.on("open-topup-modal", () => {
            setTopupModalOpen(true);
        });
        bus.on("open-withdraw-modal", () => {
            setWithdrawModalOpen(true);
        });
    }, []);

    return (
        <>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>
            <div className='wrapper mt-md-3 mt-4'>
                <div className={`${styles.header} d-block d-md-none mb-4 mt-2`}>
                    <h4 className={`mb-0 pb-0`}>Dashboard</h4>
                    <p style={{ fontSize: '14px' }} className={`mb-0 pb-0`}>
                        An overview of your business performance
                    </p>

                </div>
                {/* <div className={styles.landing} /> */}
                <div className="row mt-4">
                    <div className="col-md-8 mb-2">
                        <Filter1 width='100%' />

                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className={`${styles.card}`}>
                                    <div className={`card-body`}>
                                        <div className="d-flex justify-content-between">
                                            <small>Total Income</small>
                                        </div>
                                        <div className={`${styles.numbers}`}>
                                            <div>
                                                <span className='primary_color'>N3.26M</span>
                                            </div>
                                            <div>
                                                <div style={{
                                                    width: '67px',
                                                    height: '25px',
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: ' space-around'
                                                }} className={styles.percent}>
                                                    <img src="/assets/icons/up.svg" alt="" /> <small>12%</small>

                                                </div>
                                            </div>



                                        </div>

                                    </div>


                                </div>

                            </div>
                            <div className="col-md-6 mb-4">
                                <div className={`${styles.card}`}>
                                    <div className={`card-body`}>
                                        <div className="d-flex justify-content-between">
                                            <small>Total Deposit</small>
                                        </div>
                                        <div className={`${styles.numbers}`}>
                                            <div>
                                                <span className='primary_color'>N3.26M</span>
                                            </div>
                                            <div>
                                                <div style={{
                                                    width: '67px',
                                                    height: '25px',
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: ' space-around'
                                                }} className={styles.percent}>
                                                    <img src="/assets/icons/up.svg" alt="" /> <small>12%</small>

                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div className="col-12 mb-4">
                                <div className={`${styles.card}`}>
                                    <div className={`card-body`}>
                                        <div className="d-flex justify-content-between">
                                            <small>Total Withdrawal</small>
                                        </div>
                                        <div className={`${styles.numbers}`}>
                                            <div>
                                                <span className='primary_color'>N3.26M</span>
                                            </div>
                                            <div>
                                                <div style={{
                                                    width: '67px',
                                                    height: '25px',
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    justifyContent: ' space-around',
                                                    backgroundColor: '',
                                                }} className={styles.percent2}>
                                                    <img src="/assets/icons/upred.svg" alt="" /> <small>12%</small>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-2">
                        <div className={`${styles.card2} card py-4 `} style={{ borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className={`${styles.wallet}`} >
                                <img className={`${styles.img} ${styles.img1}`} src="/assets/crc.png" alt="" />
                                <div className={`${styles.content}`} >
                                    <div className={`${styles.content_header}`}>
                                        <div>
                                            ₦‎ 26,500,853
                                        </div>
                                        <div>
                                            <img src="/assets/icons/Vector.svg" alt="" />
                                        </div>
                                    </div>
                                    <p className={`${styles.sub_text}`}>
                                        Your Balance
                                    </p>
                                    <div className={`${styles.content_body} ${styles.content_body2}`}>
                                        <p className={`${styles.sub_text} m-0 mb-1`}>
                                            Account Details
                                        </p>
                                        <div className={`${styles.bank_info}`}>
                                            <div >
                                                <p className={`${styles.name} m-0`}>
                                                    NESTLE INTERNATIONAL PLC.

                                                </p>
                                                <p className={`${styles.account_number} m-0`}>
                                                    0231609769
                                                </p>

                                            </div>
                                            <img className="" src="/assets/logo.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className={`${styles.footer} ${styles.footer2}`}>
                                        <div className="">
                                            <p className="mb-0 pb-0">
                                                <Link
                                                    // href="/app/wallets"
                                                    href="/admin"
                                                >
                                                    Manage Wallet
                                                    <iconify-icon icon="ph:arrow-right" style={{ fontSize: '1.5em', lineHeight: '0', marginLeft: '5px', verticalAlign: 'middle' }}></iconify-icon>
                                                    &nbsp;

                                                </Link>


                                            </p>

                                        </div>

                                    </div> */}

                            </div>

                        </div>

                    </div>
                </div>


                <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>
                    <div className='p-4 border-bottom'>

                        <div className="d-md-flex justify-content-between" >
                            <div className="pb-3 pb-md-0">
                                <h5 className="table_desc_header mb-2">
                                    All Transactions
                                </h5>
                                <small style={{ fontWeight: 'normal', fontSize: '14px' }}>
                                    Your transaction history
                                </small>

                            </div>

                            <div className="d-flex">
                                <div className="dropleft ">
                                    <button type='button' className="btn  border" onClick={() => setModalOpen(true)}
                                        style={{
                                            backgroundColor: '#fff',
                                            border: '1px solid #D0D5DD',
                                            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                                            borderRadius: '4px'
                                        }}>
                                        <img className="" style={{ display: 'inline', width: '20px' }} src="/assets/icons/filterlines.svg" alt="" />
                                        &nbsp;
                                        <small className="d-none d-md-inline-block">
                                            Filters
                                        </small>
                                    </button>

                                </div>
                                &nbsp;
                                &nbsp;
                                <div className="dropleft ">
                                    <button type='button' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} btn m-0 py-0`}>
                                        <span style={{
                                            paddingTop: '8px',


                                        }}>
                                            <img style={{ display: 'inline', width: '18%' }} src="/assets/icons/download.svg" alt="" /> &nbsp;
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
                        <div className={`${styles.overflow_table} table-responsive  pt-3 pb-3 pl-0 pr-0`}  >
                            <table className={`${styles.table} table-hover table-striped`} >
                                <thead className={`${styles.thead}`}>
                                    <tr>
                                        <th className="text-muted" style={{ width: "12%" }}>
                                            Transaction Id
                                        </th>
                                        <th className="text-muted text-center">
                                            Type
                                        </th>
                                        <th className="text-muted">
                                            Date Ordered
                                        </th>
                                        <th className="text-muted">
                                            Amount
                                        </th>
                                        <th className="text-muted">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '14px', fontWeight: '600' }}>
                                                12345678
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <span className='status_badge_awaiting'>
                                                Withdrawal
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                25/02/22
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                ₦270,630
                                            </span>
                                        </td>
                                        <td>
                                            <span className='status_badge_pending'>
                                                Pending
                                            </span>
                                        </td>

                                    </tr>
                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '14px', fontWeight: '600' }}>
                                                12345678
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <span className='status_badge_awaiting'>
                                                Top Up
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                25/02/22
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                ₦270,630
                                            </span>
                                        </td>
                                        <td>
                                            <span className='status_badge_success'>
                                                Success
                                            </span>
                                        </td>

                                    </tr>
                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '14px', fontWeight: '600' }}>
                                                12345678
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <span className='status_badge_awaiting'>
                                                Withdrawal
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                25/02/22
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                ₦270,630
                                            </span>
                                        </td>
                                        <td>
                                            <span className='status_badge_failed'>
                                                Failed
                                            </span>
                                        </td>

                                    </tr>
                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '14px', fontWeight: '600' }}>
                                                12345678
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <span className='status_badge_awaiting'>
                                                Top Up
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                25/02/22
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                ₦270,630
                                            </span>
                                        </td>
                                        <td>
                                            <span className='status_badge_success'>
                                                Success
                                            </span>
                                        </td>

                                    </tr>
                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '14px', fontWeight: '600' }}>
                                                12345678
                                            </span>
                                        </td>
                                        <td className='text-center'>
                                            <span className='status_badge_awaiting'>
                                                Withdrawal
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                25/02/22
                                            </span>
                                        </td>
                                        <td>
                                            <span>
                                                ₦270,630
                                            </span>
                                        </td>
                                        <td>
                                            <span className='status_badge_failed'>
                                                Failed
                                            </span>
                                        </td>

                                    </tr>
                                </tbody>

                            </table>

                        </div>

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

                {/* Filter Modal */}
                <GlobalModal
                    open={modalOpen}
                    onClose={handleClose}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='740px !important'
                    height='auto !important'
                    overflow='hidden'
                    bgcolor='#fff'
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
                            <span onClick={handleClose} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>

                        <form action="" className="mt-3">
                            <div className="row">
                                <div className="col-md-6 mb-1">

                                    <div className="mb-3">
                                        <label htmlFor="name">Transaction Id</label>
                                        <Select
                                            labelId="s"
                                            id="s"
                                            fullWidth
                                            size="small"
                                            required
                                            name="verified"
                                            defaultValue='select'
                                        >

                                            <MenuItem value='select'>Enter Transaction Id</MenuItem>
                                            <MenuItem value=''>164321</MenuItem>
                                            <MenuItem value=''>144321</MenuItem>
                                            <MenuItem value=''>224321</MenuItem>
                                            <MenuItem value=''>244321</MenuItem>
                                        </Select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="name">Status</label>
                                        <Select
                                            labelId="s"
                                            id="s"
                                            fullWidth
                                            size="small"
                                            required
                                            name="verified"
                                            defaultValue='select'
                                        >

                                            <MenuItem value='select'>Select Status</MenuItem>
                                            <MenuItem value='18'>Pending</MenuItem>
                                            <MenuItem value='14'>Completed</MenuItem>
                                        </Select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="name">Type</label>
                                        <Select
                                            labelId="s"
                                            id="s"
                                            fullWidth
                                            size="small"
                                            required
                                            name="verified"
                                            defaultValue='select'
                                        >

                                            <MenuItem value='select'>Select Type</MenuItem>
                                            <MenuItem value=''>Select Type</MenuItem>
                                            <MenuItem value=''>Select Type</MenuItem>
                                            <MenuItem value=''>Select Type</MenuItem>
                                        </Select>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-1">

                                    <label htmlFor="ounit">Amount</label>
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

                                </div>
                            </div>
                            <div className="my-3">
                                <button className="btn btn-success w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                            </div>
                            {/* <div className="mb-4">
                                <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                                    Proceed
                                </button>
                            </div> */}
                        </form>
                    </div>
                </GlobalModal>


                {/* Top up Modal */}
                <GlobalModal
                    open={topupModalOpen}
                    onClose={handleCloseTopup}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='500px !important'
                    height='auto !important'
                    overflowY='scroll'
                    bgcolor='#fff'
                    border='1px solid #F5F5F5'
                    borderRadius='5px'
                    boxShadow='24'
                    p='25px'
                >
                    <div className={`${styles.modal_content}`}>
                        <div className={`${styles.modal_header} mb-0`}>
                            <h5 className='mb-0' style={{
                                fontSize: '19px',
                                fontWeight: '700',

                            }}>Top Up</h5>
                            <span onClick={handleCloseTopup} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <p className='text-muted mt-1' style={{ fontSize: '14px' }}>Fund your Wallet</p>

                        <form action="" className="mt-3">
                            <div className="row">
                                <div className="col-12 mb-1">

                                    <label htmlFor="ounit">Amount</label>
                                    <div className="">
                                        <div className="" style={{ width: '100%' }}>
                                            <div className="mb-3">
                                                <TextField
                                                    name="min_products"
                                                    required
                                                    type='number'
                                                    id="ounit"
                                                    placeholder="₦ 1,000.00"
                                                    size="small"
                                                    fullWidth

                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-">
                                <button className="btn btn-success w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                            </div>
                            {/* <div className="mb-4">
                <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                    Proceed
                </button>
            </div> */}
                        </form>
                    </div>
                </GlobalModal>


                {/* Withdraw Modal */}
                <GlobalModal
                    open={withdrawModalOpen}
                    onClose={handleCloseWithdraw}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='500px !important'
                    height='auto !important'
                    overflowY='scroll'
                    bgcolor='#fff'
                    border='1px solid #F5F5F5'
                    borderRadius='5px'
                    boxShadow='24'
                    p='25px'
                >
                    <div className={`${styles.modal_content}`}>
                        <div className={`${styles.modal_header} mb-0`}>
                            <h5 className='mb-0' style={{
                                fontSize: '19px',
                                fontWeight: '700',

                            }}>Withdraw</h5>
                            <span onClick={handleCloseWithdraw} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <p className='text-muted mt-1' style={{ fontSize: '14px' }}>Withdraw from your wallet</p>

                        <form action="" className="mt-3">
                            <div className="row">
                                <div className="col-12 mb-1">

                                    <label htmlFor="ounit">Amount</label>
                                    <div className="">
                                        <div className="" style={{ width: '100%' }}>
                                            <div className="mb-3">
                                                <TextField
                                                    name="min_products"
                                                    required
                                                    type='number'
                                                    id="ounit"
                                                    placeholder="₦ 1,000.00"
                                                    size="small"
                                                    fullWidth

                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <label htmlFor="ounit">Select Bank</label>
                                    <div className="">
                                        <div className="" style={{ width: '100%' }}>
                                            <div className="mb-3">
                                                <Select
                                                    labelId="s"
                                                    id="s"
                                                    fullWidth
                                                    size="small"
                                                    required
                                                    name="verified"
                                                    defaultValue='select'
                                                >

                                                    <MenuItem value='select'>GTBank</MenuItem>
                                                    <MenuItem value=''>Jaiz Bank</MenuItem>
                                                    <MenuItem value=''>Access Bank</MenuItem>
                                                    <MenuItem value=''>Fidelity Bank</MenuItem>
                                                    <MenuItem value=''>Zenith Bank</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>

                                    <label htmlFor="ounit">Enter Account Number</label>
                                    <div className="">
                                        <div className="mb-3" style={{ width: '100%' }}>
                                            <div className="mb-1">
                                                <TextField
                                                    name="min_products"
                                                    required
                                                    type='number'
                                                    id="ounit"
                                                    placeholder="0123456789"
                                                    size="small"
                                                    fullWidth

                                                />
                                            </div>
                                            <p className='text-muted' style={{ fontSize: '14px' }}>Saidi Adegoke Olayemi</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="">
                                <button className="btn btn-success w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                            </div>
                            {/* <div className="mb-4">
<button type="button" className={`${styles.modal_btn} btn btn-block`}>
    Proceed
</button>
</div> */}
                        </form>
                    </div>
                </GlobalModal>

            </div>

        </>
    );
}
