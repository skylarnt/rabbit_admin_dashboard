import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from "react";
import bus from 'src/bus';
import styles from './Drivers_RidersPage.module.css'
import React from 'react';
import DriverDetails from './components/DriverDetails';
import RiderDetails from './components/RiderDetails';
import TextField from '@mui/material/TextField';

// import { useLayoutEffect } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import Modal from '@mui/material/Modal';
// import Backdrop from '@mui/material/Backdrop';
// import Fade from '@mui/material/Fade';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import GlobalModal from 'src/Modals/GlobalModal';
// import TextField from '@mui/material/TextField';
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { 
// useParams, 
// useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 1000,
//   minHeight: 650,
//   overflow: 'hidden',
//   bgcolor: '#F5F5F5',
//   border: '1px solid #F5F5F5',
//   borderRadius: '5px',
//   boxShadow: 24,
//   p: 3,
// };

// const style2 = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   height: 410,
//   overflow: 'hidden',
//   bgcolor: '#F5F5F5',
//   border: '1px solid #F5F5F5',
//   borderRadius: '5px',
//   boxShadow: 24,
//   p: 3,
// };



// ----------------------------------------------------------------------


export default function DriversRidersPage() {

  const [value, setValue] = React.useState('1');
  const [addDriverModalOpen, setAddDriverModalOpen] = useState(false);
  // const [assignDriver, setAssignDriver] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCloseAddDriver = () => {
    setAddDriverModalOpen(!addDriverModalOpen);
  };

  useEffect(() => {
    bus.on('open-modal', () => {
      setAddDriverModalOpen(true)
    })
  }, [])
  return (
    <>
      <Helmet>
        <title> Drivers/Riders </title>
      </Helmet>

      <div className="wrapper">
        <div className="header d-block d-md-none mb-4 mt-2 pt-3">
          <div className={`${styles.product_actions} d-md-flex justify-content-between`}>
            <div className=" ">
              <h4 className={`mb-0 pb-0`}>Drivers/Riders</h4>
              <p style={{ fontSize: '14px' }} className={`mb-0 mt-2 pb-0`}>
                Manage and assign your Drivers/Riders here.
              </p>

            </div>
          </div>
        </div>
        <Box style={{ padding: '0' }} className='aa' sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs" onChange={handleChange}>
                <Tab label="Driver Details" value="1" />
                <Tab label="Rider Details" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ paddingLeft: '0' }}>
              <DriverDetails />
            </TabPanel>
            <TabPanel value="2" style={{ paddingLeft: '0' }}>
              <RiderDetails />
            </TabPanel>
          </TabContext>
        </Box>
      </div>

      {/* Driver Info Modal */}
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

            }}>Driver Info</h5>

            <span onClick={handleCloseAddDriver} style={{ cursor: 'pointer' }}>
              <img src="/assets/icons/x.svg" alt="" />

            </span>
          </div>

          <p className="text-muted mb-4 mt-0" style={{ fontSize: '13px' }}>Details of Driver</p>

          {/* className={`${styles.retailer_modal_product_img}`} style={{
                  // backgroundImage: `url('${url}')`,
                  width:"15%",
                  height:"100px"
              }} */}
          <form action="" className="mt-0">
            <label htmlFor="loc" className="mt-0">Driver's Photo* </label>

            <input type="file" hidden name="" />
            <div className={`${styles.retailer_modal_product_img} border rounded`} style={{
              // backgroundImage: `url('${url}')`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // flexDirection: 'column',
              width: "100px",
              height: "100px",
              border: '1px solid #ddd',
            }} >
              <div style={{ cursor: 'pointer', display: 'inline-block', backgroundColor: 'white' }}
              // onClick={() => handleButtonClick()}
              >
                <img
                  className={`${styles.retailer_product_image} ${styles.rounded_border}`}
                  src="/assets/illustrations/illustration_avatar.png"
                  alt=""
                />
                {/* <p className="mb-0 text-center text-info" style={{ fontSize: '10px' }} >Click to upload</p> */}

              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 mb-1">
                <div className="mb-3">
                  <label htmlFor="loc">Driver's Name</label>
                  <TextField
                    type='text'
                    id="loc"
                    size="small"
                    readonly
                    fullWidth

                  />


                </div>
                <div className="mb-3">
                  <label htmlFor="loc">Email Address</label>
                  <TextField
                    type='email'
                    readonly

                    id="loc"
                    size="small"
                    fullWidth

                  />


                </div>

                <div className="mb-3">
                  <label htmlFor="loc">Phone Number</label>
                  <TextField
                    readonly
                    type='tel'
                    id="loc"
                    size="small"
                    fullWidth

                  />


                </div>

                <div className="mb-3">
                  <label htmlFor="loc">Address</label>
                  <TextField
                    readonly
                    type='tel'
                    id="loc"
                    size="small"
                    fullWidth

                  />


                </div>

              </div>
            </div>
            <div className="mb-4">
              <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                Save
              </button>


            </div>

          </form>


        </div>
      </GlobalModal>
      
    </>
  );
}
