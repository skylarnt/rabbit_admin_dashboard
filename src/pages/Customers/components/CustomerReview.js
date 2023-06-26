

// ----------------------------------------------------------------------
import styles from "../CustomerComponent.module.css"
// import TextField from '@mui/material/TextField';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ----------------------------------------------------------------------

export default function CustomersReview() {

    return (
        <>
            <div className="px-0 px-md-2">
            <div className={`${styles.filters} mt-4`}>
          <div className="d-flex justify-content-between" style={{gap: '10px'}}>
            <div className={`${styles.hold_input}  `}>
              <img src="/assets/icons/search.svg" alt="" />
              <input type="text" name="search" placeholder="Search" style={{ textIndent: '25px', width: '240px',  }} className=" form-control" />

            </div>

          </div>
        </div>


                <div className="pt-4">

                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion className="px-2 px-md-3">
                            <AccordionSummary
                                className={`${styles.acc_summary} p-0`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                                    <div className={`${styles.review_img_wrap} border`}>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '100%', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-1">
                                        <h6 className="mb-0 mb-md-2"><p className="d-block d-sm-inline mb-0 pb-2 pb-sm-0">Jane Cooper</p>
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h6>
                                        <p className="mb-0 mt-0 mt-md-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-md-5'>
                                    <div className="pl-md-4">
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion className="px-2 px-md-3">
                            <AccordionSummary
                                className={`${styles.acc_summary} p-0`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                                    <div className={`${styles.review_img_wrap} border`}>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '100%', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-1">
                                        <h6 className="mb-0 mb-md-2"><p className="d-block d-sm-inline mb-0 pb-2 pb-sm-0">Jane Cooper</p>
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h6>
                                        <p className="mb-0 mt-0 mt-md-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-md-5'>
                                    <div className="pl-md-4">
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion className="px-2 px-md-3">
                            <AccordionSummary
                                className={`${styles.acc_summary} p-0`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                                    <div className={`${styles.review_img_wrap} border`}>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '100%', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-1">
                                        <h6 className="mb-0 mb-md-2"><p className="d-block d-sm-inline mb-0 pb-2 pb-sm-0">Jane Cooper</p>
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h6>
                                        <p className="mb-0 mt-0 mt-md-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-md-5'>
                                    <div className="pl-md-4">
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion className="px-2 px-md-3">
                            <AccordionSummary
                                className={`${styles.acc_summary} p-0`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                                    <div className={`${styles.review_img_wrap} border`}>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '100%', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-1">
                                        <h6 className="mb-0 mb-md-2"><p className="d-block d-sm-inline mb-0 pb-2 pb-sm-0">Jane Cooper</p>
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h6>
                                        <p className="mb-0 mt-0 mt-md-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-md-5'>
                                    <div className="pl-md-4">
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion className="px-2 px-md-3">
                            <AccordionSummary
                                className={`${styles.acc_summary} p-0`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                                    <div className={`${styles.review_img_wrap} border`}>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '100%', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-1">
                                        <h6 className="mb-0 mb-md-2"><p className="d-block d-sm-inline mb-0 pb-2 pb-sm-0">Jane Cooper</p>
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h6>
                                        <p className="mb-0 mt-0 mt-md-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-md-5'>
                                    <div className="pl-md-4">
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{ fontSize: '14px' }} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className="card border-0 p-0 m-0" style={{ background: 'transparent' }}>
                        <div className="card-body pt-0 mt-0 px-0">
                            <div className="d-flex justify-content-between">
                                <div className=" pt-2">
                                    Page 1 of <b className="pl-1"> 10</b>
                                </div>
                                <div className={`${styles.pagination_button_container}`}>
                                    <button className="btn" >
                                        <span className="d-none d-sm-block">
                                            Previous
                                        </span>
                                        <span>
                                            <i className="bi bi-chevron-left d-block d-sm-none"></i>
                                        </span>
                                    </button>
                                    &nbsp;
                                    &nbsp;
                                    <button className="btn" >
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
                </div>
            </div>


            {/* <GlobalModal
        open={modalOpen}
        onClose={handleClose}
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        width='740px !important'
        overflowY='scroll'
        bgcolor='#F5F5F5'
        border='1px solid #F5F5F5'
        borderRadius='5px'
        boxShadow='24'
        p='25px'
      >
        <div className={`${styles.modal_content}`}>
          <div className={`${styles.modal_header} mb-0`}>
            <h6 style={{
              fontSize: '19px',
              fontWeight: '700',

            }}>Filter</h6>
            <span onClick={handleClose} style={{ cursor: 'pointer' }}>
              <img src="/assets/icons/x.svg" alt="" />

            </span>

          </div>


          <form action="" className="mt-0">
            <div className="row">
              <div className="col-md-6 mb-1">
                <div className="mb-3">
                  <label htmlFor="loc">Location</label>
                  <TextField
                    required
                    type='text'
                    id="loc"
                    placeholder="Enter Location"
                    size="small"
                    fullWidth

                  />


                </div>
                <label htmlFor="name">Date </label>

                <div className=" d-flex">
                  <div className="" style={{ width: '70%' }}>
                    <div className="mb-3">
                      <TextField
                        required
                        type='date'
                        id="name"
                        placeholder="Start"
                        size="small"

                      />


                    </div>

                  </div>
                  <div className="px-1 d-sflex   align-items-center " style={{ heigsht: '40px' }}>
                    <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                  </div>
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <TextField
                        required
                        type='date'
                        placeholder="End "
                        size="small"

                      />


                    </div>

                  </div>

                </div>

              </div>
              <div className="col-md-6 mb-1">
                <label htmlFor="price">Price </label>

                <div className=" d-flex">
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <TextField
                        required
                        type='number'
                        id="price"
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
                        placeholder="Max "
                        size="small"

                      />


                    </div>

                  </div>

                </div>
                <label htmlFor="ounit">Order Unit </label>
                <div className=" d-flex">
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <TextField
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
                        type='number'
                        placeholder="Max "
                        size="small"

                      />


                    </div>

                  </div>

                </div>

              </div>
            </div>
            <div className="mb-4">
              <button type="button" onClick={handleClose} className={`${styles.modal_btn} btn btn-block`}>
                Proceed

              </button>


            </div>

          </form>


        </div>


      </GlobalModal> */}



        </>
    );
}
