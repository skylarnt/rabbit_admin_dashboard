

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
            <div className="px-2">
                <div className={`${styles.filters} mt-4`}>
                    <div className="row">
                        <div className={`${styles.hold_input} col-6   `}>
                            <img src="/assets/icons/search.svg" alt="" />
                            <input type="text" placeholder="Search" style={{ textIndent: '25px', width: '60%' }} className=" form-control" />

                        </div>
                        <div className="col-6  text-right">


                        </div>

                    </div>


                </div>


                <div className="pt-5">

                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion >
                            <AccordionSummary
                                className={`${styles.acc_summary}`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex'>
                                    <div>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '50px', height: '50px', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="mb-2">Jane Cooper
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h5>
                                        <p className="mb-0 mt-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-5'>
                                    <div className="pl-4">
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                   </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    
                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion >
                            <AccordionSummary
                                className={`${styles.acc_summary}`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex'>
                                    <div>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '50px', height: '50px', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="mb-2">Jane Cooper
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h5>
                                        <p className="mb-0 mt-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-5'>
                                    <div className="pl-4">
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                   </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    
                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion >
                            <AccordionSummary
                                className={`${styles.acc_summary}`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex'>
                                    <div>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '50px', height: '50px', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="mb-2">Jane Cooper
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h5>
                                        <p className="mb-0 mt-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-5'>
                                    <div className="pl-4">
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                   </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    
                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion >
                            <AccordionSummary
                                className={`${styles.acc_summary}`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex'>
                                    <div>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '50px', height: '50px', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="mb-2">Jane Cooper
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h5>
                                        <p className="mb-0 mt-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-5'>
                                    <div className="pl-4">
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                   </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    
                    <div className={`${styles.accordion_wrap} mb-3`} >
                        <Accordion >
                            <AccordionSummary
                                className={`${styles.acc_summary}`}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className='d-flex'>
                                    <div>
                                        <img src="/assets/illustrations/illustration_avatar.png" style={{ width: '50px', height: '50px', borderRadius: '15px' }} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="mb-2">Jane Cooper
                                            <sup className="text-muted ml-2" style={{ fontSize: '13px' }}>01:56 PM 09/03/2023</sup>
                                            <sup className="text-muted ml-2" style={{ fontSize: '10px', verticalAlign: 'middle' }}>
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/rateStar.png" alt="" />
                                                <img src="/assets/icons/norateStar.png" alt="" />
                                            </sup>
                                            <sup className="text-warning ml-2" style={{ fontSize: '13px' }}>4.0</sup>
                                        </h5>
                                        <p className="mb-0 mt-2 pt-1"><span className="px-2 py-1 border rounded">Fast Logistics</span></p>
                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='px-2 pb-2 pl-5'>
                                    <div className="pl-4">
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold">
                                            Route: <span>Sabo Yaba - Victoria Island</span>
                                        </p>
                                        <p style={{fontSize: '14px'}} className="m-0 font-weight-bold mt-2">
                                            Driver ID: <span>3344t6</span>
                                        </p>
                                   </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>

                    <div className="card border-0 p-0 m-0" style={{background: 'transparent'}}>
                        <div className="card-body pt-0 mt-0">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-item-center pt-2">
                                    Page 1 of <b className="pl-1"> 10</b>
                                </div>
                                <div className={`${styles.pagination_button_container}`}>
                                    <button className="btn bg-light" >Previous</button>
                                    &nbsp;
                                    &nbsp;
                                    <button className="btn bg-light" >Next</button>
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
            <h5 style={{
              fontSize: '19px',
              fontWeight: '700',

            }}>Filter</h5>
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
