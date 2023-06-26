/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Helmet } from 'react-helmet-async';
// import * as Router from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

import {
  Card,
  CardContent,
  Link,
  // Stack, 
  // IconButton, 
  // InputAdornment, 
  // TextField, 
  // Checkbox, 
  // Container, 
  Typography, 
  // Button 
} from '@mui/material';

//Carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from "react";
import GlobalModal from "../../Modals/GlobalModal";
import styles from './Page.module.css'
import Filter1 from '../Filter/Filter1';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };
  const [chartOptions] = useState({
    chart: {
      type: 'bar'
    },
    colors: ['rgba(0, 175, 82, 1)', 'rgba(0, 175, 82, .7)', 'rgba(0, 175, 82, 1.4)'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end'
      },
    },
    xaxis: {
      categories: ['Nigeria', 'Ghana', 'South Africa', 'Egypt', 'Benin', 'Liberia', 'Togo', 'Sierrelone', 'Senegal'],
    },

    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter(val) {
          return `$ ${val}`
        }
      }
    },
    dataLabels: {
      enabled: false,
    }
  })
  const [chartSeries] = useState(
    [{
      name: 'Order',
      data: [900, 550, 800, 810, 810, 600, 400, 400]
    },
    {
      name: 'Depletion',
      data: [800, 700, 600, 500, 800, 700, 650, 600]
    },
    {
      name: 'In-stock',
      data: [650, 700, 750, 890, 800, 400, 350, 480]
    }]
  );

  // for carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    fade: true,
    scrollBar:false
  };


  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>
      <div className='wrapper mt-md-3'>
        <div className={`${styles.header} d-block d-md-none mb-4 mt-3 pt-2`}>
          <h4 className={`mb-0 pb-0`}>Dashboard</h4>
          <p style={{ fontSize: '14px' }} className={`mb-0 pb-0`}>
            An overview of your business performance
          </p>

        </div>

        
        {/* Banner */}
        <div style={{ overflow: 'hidden' }}>
          <Slider {...settings}>
            <div>
              <Typography variant="h3" className={`${styles.banner} border`}>
                  <div>
                      <h2 className='text-white font-weight-bold'>Welcome to Rabbit</h2>
                      <h5 className='text-white font-weight-bold pl-md-4 mb-0'>Stress free . Commute . Delivery</h5>
                  </div>
                  <div className={`${styles.banner_img}`}>
                    <img src='/assets/dashboard_img.png' alt='' />
                  </div>
                  {/* <img src="/assets/icons/bannerImageOne.png" className={`${styles.banner_img1}`} alt="" /> */}
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className={`${styles.banner_sec} border bg-primary`}>
                  <div className='px-5'>
                    <img src='/assets/rabbit_white.png' className='img-fluid img-responsive' alt='' />
                      {/* <h2 className='text-white font-weight-bold'>Welcome to Logistics</h2>
                      <h5 className='text-white font-weight-bold pl-md-4 mb-0'>Stress free . Commute . Delivery</h5> */}
                  </div>
                  {/* <div className={`${styles.banner_img}`}>
                    <img src='/assets/dashboard_img.png' alt='' />
                  </div> */}
                  {/* <img src="/assets/icons/bannerImageOne.png" className={`${styles.banner_img1}`} alt="" /> */}
              </Typography>
            </div>
            {/* <div>
              <Typography variant="h3" className={`${styles.banner}`}>
                <img src="/assets/icons/bannerImageTwo.png" alt="logo" className={`${styles.banner_img1}`}/>
              </Typography>
            </div> */}
          </Slider>
        </div>

        {/* <div className={styles.landing} /> */}
        <div className="row mt-4">
          <div className="col-md-7 mb-2">
            <Filter1 width='100%' />

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className={`${styles.card}`}>
                  <div className={`card-body`}>
                    <div className="d-flex justify-content-between">
                      <small>Customers</small>
                    </div>
                    <div className={`${styles.numbers}`}>
                      <div>
                        <span className='primary_color'>1,206</span><small> from 1,021</small>
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
                      <small>Drivers</small>
                    </div>
                    <div className={`${styles.numbers}`}>
                      <div>
                        <span className='primary_color'>1,206</span><small> from 1,021</small>
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
                      <small>Routes</small>
                    </div>
                    <div className={`${styles.numbers}`}>
                      <div>
                        <span className='primary_color'>1,206</span><small> from 1,021</small>
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
                      <small>Bookings</small>
                    </div>
                    <div className={`${styles.numbers}`}>
                      <div>
                        <span className='primary_color'>1,206</span><small> from 1,021</small>
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
            </div>

          </div>
          <div className="col-md-5 mb-2">
            {/* <div className="card">
              <div className="card-body">
                <div className={`${styles.card2} card primary_color_bg    `} style={{ padding: '' }}>
                  
                  <div className={`${styles.wallet}`}  >
                    <div className={`${styles.content}`}>
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
                        <p className={`${styles.sub_text}`}>
                          Account Details
                        </p>

                        <div className={`${styles.bank_info}`}>
                          <div >
                            <p className={`${styles.name}`}>
                              NESTLE INTENALTIONAL PLC

                            </p>
                            <p className={`${styles.account_number}`}>
                              0231609769
                            </p>

                          </div>
                          <img className="mt-2" src="/assets/Logomark.svg" alt="" />

                        </div>

                      </div>


                    </div>

                    <div className={`${styles.footer} ${styles.footer2}`}>
                      <div className="">
                        <p className="mb-0 pb-0 text-right pr-3">
                          <Router.NavLink className='' to="/app/wallets" style={{ fontSize: '12px', color: 'white' }}>
                            Manage Wallet
                            <img src="/assets/icons/arrow-right.svg" alt="" />
                            &nbsp;

                          </Router.NavLink>


                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div> */}
            <div  >
              <div className={`${styles.card2} card pt-2 h-100`} style={{ borderRadius: '6px' }}>
                {/* <div>

                </div> */}
                <div className={`${styles.wallet} h-100`}  >
                  <div className='mx-auto' style={{position: 'relative', width: '24em', maxWidth: '100%'}}>
                    <img className={`${styles.img} ${styles.img1}`} style={{position: 'absolute', inset: '0', top: '0', left: '0', right: '0', bottom: '0'}} src="/assets/crc.png" alt="" />
                    <div className={`${styles.content}`}>
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

                        <div className={`${styles.bank_info} `}>
                          <div >
                            <p className={`${styles.name} m-0`}>
                              NESTLE INTERNATIONAL PLC.

                            </p>
                            <p className={`${styles.account_number} m-0`}>
                              0231609769
                            </p>

                          </div>
                          <img className="" src="/assets/logo.svg" alt="" />
                          {/* <span style={{
                              fontSize:'14px', 
                              fontWeight:'700', 
                              color:'#FFFFFF'
                            }}>
                              {dashboardData?.wallet_info?.brand_id?.bank_name}
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.footer} ${styles.footer2}`}>
                    <div className="">
                      <p className="mb-0 pb-0">
                        <Link 
                          // href="/app/wallets"
                          href="/admin"
                        >
                          Manage Wallet
                          <iconify-icon icon="ph:arrow-right" style={{ fontSize: '1.5em', lineHeight: '0', marginLeft: '5px', verticalAlign: 'middle' }}></iconify-icon>
                          {/* <img src="/assets/icons/arrow-right.svg" alt="" /> */}
                          &nbsp;

                        </Link>


                      </p>

                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
        <Card style={{ marginTop: '50px', marginBottom: '20px', borderRadius: '10px' }} className='p-0'>
          <CardContent>
            <div className={`${styles.insight_header} pl-md-5`}>
              <h5 className='mb-2'>
                Customers, Bookings and Income stats

              </h5>
              <div className="d-md-flex justify-content-between">
                <p>
                  Compare insights from activities ranging from <br /> customers bookings to income statements.
                  {/* Compare your orders against the depletion rate and <br /> what is left in stock in your Stores. */}
                </p>
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
                    </div>
                  </div>
                </div>

              </div>
              <div className="row mt-md-0 mt-4">
                <div className="col-md-8 mb-2" 
                  // style={{border: '2px solid blue'}}
                >
                  <div className="row">
                    <div className="col-md-12 mb-2">
                      <div className="d-lg-flex d-block" style={{gap: '20px'}}>
                        <div className="d-block">
                          <div className="card p-0" style={{minWidth: '17em', height: '40px'}}  >
                            <div className="card-body d-flex justify-content-around  py-1" style={{whiteSpace: 'nowrap'}}>
                              <label htmlFor="ov1">
                                <input className="mt-2 mr-1" type="radio" name="insight_depletion" id="ov1" /> Overall
                              </label>
                              <label htmlFor="year1">
                                <input className="mt-2 mr-1" type="radio" name="insight_depletion" id="year1" /> Yearly
                              </label>
                              <label htmlFor="month1">
                                <input className="mt-2 mr-1" type="radio" name="insight_depletion" id="month1" /> Monthly
                              </label>
                            </div>

                          </div>

                        </div>
                        <div className="d-block">
                          <div className="m-0">
                            <div className="mt-2">
                              <div className="p-0 mx-auto mt-3 mt-lg-0" style={{width: 'fit-content'}}>
                                <span>
                                  <span className={`${styles.arrowSpan}`}>
                                    <img width={'20px'} src="/assets/icons/left_arrow.svg" alt="arrow" className={`${styles.newStyle} mr-2`} />
                                  </span>
                                  <span className={`${styles.year_styles}`}>2023</span>
                                  <span className={`${styles.arrowSpan}`}>
                                    <img width={'20px'} src="/assets/icons/right_arrow.svg" alt="arrow" className={`${styles.newStyle} ml-2`} />
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3  text-md-right" style={{whiteSpace: 'nowrap'}}>
                  <span>
                    <img src="/assets/icons/ordercolor.svg" alt="" />
                    &nbsp;
                    Users
                  </span>
                  &nbsp;
                  <span>
                    <img src="/assets/icons/depletionColor.svg" alt="" />
                    &nbsp;
                    Bookings
                  </span>
                  &nbsp;
                  <span>
                    <img src="/assets/icons/instockColor.svg" alt="" />
                    &nbsp;
                    Income
                  </span>


                </div>
              </div>
            </div>

            <ReactApexChart type="bar" series={chartSeries} options={chartOptions} height={500} />

          </CardContent>

        </Card>

        <GlobalModal
          open={modalOpen}
          onClose={handleClose}
          position='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          width='800px !important'
          // height='970px'
          // maxHeight='50vh !important'
          // overflowY='scroll'
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
            <div className={`${styles.modal_content} row`}>
              <div className="col-md-6">
                <div className="allprod_wrapper">
                  <div className="modal-header" style={{ border: 'none' }}>
                    <h5 className="modal-title" id="exampleModalLabel">Products</h5>
                  </div>
                  <div className={`${styles.modal_body}`}>
                    <div className="row my-0 py-0">
                      <div className="col-7 py-0 my-0">
                        <label htmlFor="allprod">
                          <input type="checkbox" name="allprod" id="allprod" />
                          &nbsp;&nbsp;All Products
                        </label>
                      </div>
                      <div className="col-5 py-0 my-0">
                        <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample01" aria-expanded="false" aria-controls="collapseExample">
                          <label>
                            <input type="checkbox" name="" />
                            <span>
                              <i className="bi bi-chevron-down"></i>
                            </span>
                          </label>
                        </span>
                      </div>
                    </div>

                    <div className="collapse" id="collapseExample01">
                      <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                        <p>
                          <label htmlFor="milo1">
                            <input type="checkbox" name="milo1" id="milo1" />
                            &nbsp;&nbsp;<span>Nestle Milo</span>
                          </label>
                        </p>
                        <p>
                          <label htmlFor="water1">
                            <input type="checkbox" name="water1" id="water1" />
                            &nbsp;&nbsp;<span>Pure life table water</span>
                          </label>
                        </p>
                        <p>
                          <label htmlFor="nescafe1">
                            <input type="checkbox" name="nescafe1" id="nescafe1" />
                            &nbsp;&nbsp;<span>Nescafe</span>
                          </label>
                        </p>
                        <p>
                          <label htmlFor="kitkat1">
                            <input type="checkbox" name="kitkat1" id="kitkat1" />
                            &nbsp;&nbsp;<span>Kitkat</span>
                          </label>
                        </p>
                        <p>
                          <label htmlFor="maggi1">
                            <input type="checkbox" name="maggi1" id="maggi1" />
                            &nbsp;&nbsp;<span>Maggi</span>
                          </label>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.bordered_sect} col-md-6`} style={{
                borderLeft: '2px solid #ddd'
              }}>
                <div className="allprod_wrapper">
                  <div className="modal-header" style={{ border: 'none' }}>
                    <h5 className="modal-title" id="exampleModalLabel">Location/Store</h5>
                  </div>
                  <div className={`${styles.modal_body}`}>
                    <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                    <div className="row my-0 py-0">
                      <div className="col-5 py-0 my-0">
                        <label htmlFor="country">
                          <input type="checkbox" name="country" id="country" />
                          &nbsp;&nbsp;Nigeria
                        </label>
                      </div>
                      <div className="col-5 py-0 my-0">
                        <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample02" aria-expanded="false" aria-controls="collapseExample">
                          <label>
                            <input type="checkbox" name="" />
                            <span>
                              <i className="bi bi-chevron-down"></i>
                            </span>
                          </label>
                        </span>
                      </div>
                    </div>

                    <div className="collapse pl-1" id="collapseExample02">
                      <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                        <div className="row mt-3">
                          <div className="col-5 py-0 my-0">
                            <label htmlFor="state">
                              <input type="checkbox" name="state" id="state" />
                              &nbsp;&nbsp;Lagos
                            </label>
                          </div>
                          <div className="col-5 py-0 my-0">
                            <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample03" aria-expanded="false" aria-controls="collapseExample">
                              <label>
                                <input type="checkbox" name="" />
                                <span>
                                  <i className="bi bi-chevron-down"></i>
                                </span>
                              </label>
                            </span>
                          </div>
                        </div>

                        <div className="collapse pl-1" id="collapseExample03">
                          <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                            <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                            <p>
                              <label htmlFor="milo2">
                                <input type="checkbox" name="milo2" id="milo2" />
                                &nbsp;&nbsp;<span>Mama tee superstore</span>
                              </label>
                            </p>
                            <p>
                              <label htmlFor="water2">
                                <input type="checkbox" name="water2" id="water2" />
                                &nbsp;&nbsp;<span>Shoprite</span>
                              </label>
                            </p>
                            <p>
                              <label htmlFor="nescafe2">
                                <input type="checkbox" name="nescafe2" id="nescafe2" />
                                &nbsp;&nbsp;<span>Justrite</span>
                              </label>
                            </p>
                            <p>
                              <label htmlFor="kitkat2">
                                <input type="checkbox" name="kitkat2" id="kitkat2" />
                                &nbsp;&nbsp;<span>Mallmart</span>
                              </label>
                            </p>
                            <p>
                              <label htmlFor="maggi2">
                                <input type="checkbox" name="maggi2" id="maggi2" />
                                &nbsp;&nbsp;<span>Jendol</span>
                              </label>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button className="btn btn-primary w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
            </div>

          </div>


        </GlobalModal>

      </div>

    </>
  );
}
