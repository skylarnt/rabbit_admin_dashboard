import { Helmet } from 'react-helmet-async';
import styles from './RoutesPage.module.css'
import React from 'react';
import InterState from './components/InterState';
import Trips from './components/Trips';
import { useEffect, useState } from "react";
import bus from 'src/bus';
// ----------------------------------------------------------------------

// import { useLayoutEffect } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import GlobalModal from 'src/Modals/GlobalModal';
// import TextField from '@mui/material/TextField';
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { 
// useParams, 
// useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  minHeight: 650,
  overflow: 'hidden',
  bgcolor: '#F5F5F5',
  border: '1px solid #F5F5F5',
  borderRadius: '5px',
  boxShadow: 24,
  p: 3,
};

export default function RoutesPage() {

  const [value, setValue] = React.useState('1');
  const [createRoute, setcreateRoute] = useState(false);
  const [assignDriver, setAssignDriver] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCloseCreateRoute = () => {
    setcreateRoute(false);
  };

  const handleCloseAssignDriver = () => {
    setAssignDriver(false);
  };

  useEffect(() => {
    bus.on('open-createroute-modal', () => {
      setcreateRoute(true)
    })
  }, [])

  return (
    <>

      <Helmet>
        <title> Routes </title>
      </Helmet>

      <div className="wrapper">
        <div className="header d-block d-md-none mb-4 mt-2 pt-3">
          <div className={`${styles.product_actions} d-md-flex justify-content-between`}>
            <div className=" ">
              <h4 className={`mb-0 pb-0`}>Routes</h4>
              <p style={{ fontSize: '14px' }} className={`mb-0 mt-2 pb-0`}>
                Manage and monitor your Stores and stocks here.
              </p>

            </div>
          </div>
        </div>
        <Box style={{ padding: '0' }} className='aa' sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs" onChange={handleChange}>
                <Tab label="Trips" value="1" />
                <Tab label="Inter State" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ paddingLeft: '0' }}>
              <Trips />
            </TabPanel>
            <TabPanel value="2" style={{ paddingLeft: '0' }}>
              <InterState />
            </TabPanel>
          </TabContext>
        </Box>
      </div>

      {/* Create Route Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={createRoute}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEnforceFocus
      >
        <Fade in={createRoute}>
          <Box sx={style} className={`mobile_modal_size bg-white`}>
            <div className={`modal_content bg-transparent`}
            style={{overflowY: 'scroll', height: '38.5em'}} 
            >
              <div className={`modal_header mb-0`}>
                <h5 style={{
                  fontWeight: 'bold',
                  fontSize: '22px'
                }}>
                  Create Route
                </h5>
                <span onClick={handleCloseCreateRoute} style={{ cursor: 'pointer' }}>
                  <img src="/assets/icons/x.svg" alt="" />

                </span>

              </div>
              <p className=' mt-0' style={{
                fontSize: '14px'
              }}>
                <span className="m-0 d-block text-muted font-weight-normal">Enter details of new route</span>
                {/* <small className="m-0 d-block">Bus 001</small> */}
              </p>

              <div className="mt-4 mb-2">
                <label htmlFor="drivers">Starting Point</label>
                <input type="text" placeholder="" style={{ width: '100%' }} className=" form-control" />
                <p className='px-4 mt-2'><span>Imo State</span></p>
              </div>

              <div className="mt-3 mb-2">
                <label htmlFor="drivers">Destination</label>
                <input type="text" placeholder="" style={{ width: '100%' }} className=" form-control" />
              </div>

              <div className="mt-3 mb-2">
                <label htmlFor="drivers">Charges</label>
                <div className={`${styles.charges_input}`}> 
                  <span>$</span>
                  <input type="text" placeholder="" style={{ width: '100%', textIndent: '25px' }} className=" form-control" />
                  <div className={`${styles.select_wrap}`}>
                    <Select
                        labelId="s"
                        id="s"
                        size="small"
                        required
                        name="verified"
                        defaultValue='select'
                        style={{width: 'fit-content' }}
                    >

                        <MenuItem value='select'>USD</MenuItem>
                        <MenuItem value='14'>NGN</MenuItem>
                        <MenuItem value='18'>NGN</MenuItem>
                        <MenuItem value='22'>NGN</MenuItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className='mt-3'>
                <div className='row'>
                  <div className='col-md-4'>
                    <label htmlFor="drivers" style={{fontSize: '16px'}}>Assigned Drivers</label>

                    <div style={{color: '#00AF52'}}>
                      <p >
                        Assign Drivers
                        <span className='ml-5 py-0 px-3 btn' onClick={() => setAssignDriver(true)}>
                          <iconify-icon icon="octicon:chevron-down-24" width="30" style={{lineHeight: '0', verticalAlign: 'middle'}}></iconify-icon>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <label htmlFor="drivers" style={{fontSize: '16px'}}>Time Slots</label>

                      <div>
                        <p ><span style={{color: '#00AF52'}} className='btn px-2 py-0'>Add time</span></p>
                        <div style={{width: '200px'}}>
                          <div className='slot_time_select d-flex justify-content-center' style={{gap: '5px', alignItems: 'center', width: '100%'}}>
                            <span className='btn py-3 px-3 rounded' style={{background: '#ccc'}}></span>
                            <span className=''>:</span>
                            <span className='btn py-3 px-3 rounded' style={{background: '#ccc'}}></span>
                            <span className='btn py-3 px-3 rounded' style={{background: '#ccc'}}></span>
                          </div>
                          <p className='mt-2'><button className='btn mx-auto d-block text-white py-1 px-5' style={{background: '#00AF52'}}>Add</button></p>
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className='d-block w-100 mt-4 pt-3'><button className='d-block w-100 btn py-2 text-white' onClick={handleCloseCreateRoute} style={{background: '#00AF52'}}>Close</button></div>

            </div>
          </Box>
        </Fade>
      </Modal>

      {/* View Assign Driver Modal */}

      <GlobalModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={assignDriver}
        onClose={handleCloseAssignDriver}
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        width='400px !important'
        overflowY='scroll'
        bgcolor='#FFFF'
        border='1px solid #F5F5F5'
        borderRadius='5px'
        boxShadow='24'
        p='25px'
      >
        {/* <Fade in={assignDriver}>
          <Box sx={style2} className={`mobile_modal_size bg-white`}> */}
            <div className={`modal_content`}
            // style={{overflowY: 'scroll', height: '450px'}} 
            >
              <div className={`modal_header mb-0`}>
                
                <div className={`${styles.hold_input} `}>
                  <img src="/assets/icons/search.svg" alt="" />
                  <input type="text" name="search" placeholder="Search" style={{ textIndent: '25px', width: '100%' }} className=" form-control" />

                </div>

              </div>

              <div className="mt-4 modal_content" style={{maxHeight: '310px', overflowY: 'scroll'}}>
                <div className="mb-3">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                      <div className="initials">
                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                      </div>
                      &nbsp;
                      <div className=" ">
                        <span className="text-muted" style={{ fontSize: '13px' }}>
                          Bus 001(Toyota Hiace)
                        </span>
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
                </div>

                <div className="mb-3">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                      <div className="initials">
                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                      </div>
                      &nbsp;
                      <div className=" ">
                        <span className="text-muted" style={{ fontSize: '13px' }}>
                          Bus 001(Toyota Hiace)
                        </span>
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
                </div>

                <div className="mb-3">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                      <div className="initials">
                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                      </div>
                      &nbsp;
                      <div className=" ">
                        <span className="text-muted" style={{ fontSize: '13px' }}>
                          Bus 001(Toyota Hiace)
                        </span>
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
                </div>

                <div className="mb-3">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                      <div className="initials">
                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                      </div>
                      &nbsp;
                      <div className=" ">
                        <span className="text-muted" style={{ fontSize: '13px' }}>
                          Bus 001(Toyota Hiace)
                        </span>
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
                </div>

                <div className="mb-3">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                      <div className="initials">
                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                      </div>
                      &nbsp;
                      <div className=" ">
                        <span className="text-muted" style={{ fontSize: '13px' }}>
                          Bus 001(Toyota Hiace)
                        </span>
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
                </div>

                <div className="mb-3">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                      <div className="initials">
                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                      </div>
                      &nbsp;
                      <div className=" ">
                        <span className="text-muted" style={{ fontSize: '13px' }}>
                          Bus 001(Toyota Hiace)
                        </span>
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
                </div>

                <div className="mb-3">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                      <div className="initials">
                        <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                      </div>
                      &nbsp;
                      <div className=" ">
                        <span className="text-muted" style={{ fontSize: '13px' }}>
                          Bus 001(Toyota Hiace)
                        </span>
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
                </div>
              </div>
            </div>
          {/* </Box>
        </Fade> */}
      </GlobalModal>

    </>
  );
}
