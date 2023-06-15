import GlobalModal from "../../Modals/GlobalModal";
import { Helmet } from 'react-helmet-async';
import {
  useState,
  useEffect
} from "react";
import bus from 'src/bus';
import TextField from '@mui/material/TextField';
import styles from './VehiclesPage.module.css'
import React from 'react';
import Buses from './components/Buses';
import Bikes from './components/Bikes';

// import { useLayoutEffect } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import TextField from '@mui/material/TextField';
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { 
// useParams, 
// useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------




// ----------------------------------------------------------------------


export default function CustomerPage() {

  const [value, setValue] = React.useState('1');
  const [addDriverModalOpen, setAddDriverModalOpen] = useState(false);
  const [addBikeModalOpen, setAddBikeModalOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCloseAddDriver = () => {
    setAddDriverModalOpen(!addDriverModalOpen);
  };

  const handleCloseAddBike = () => {
    setAddBikeModalOpen(!addBikeModalOpen);
  };

  useEffect(() => {
    bus.on('open-modal', () => {
      setAddDriverModalOpen(true)
    })
  }, [])

  useEffect(() => {
    bus.on('open-modal2', () => {
      setAddBikeModalOpen(true)
    })
  }, [])

  return (
    <>
      <Helmet>
        <title> Vehicles </title>
      </Helmet>

      {/* <StyledRoot  className='header_container style_cs'>
      <StyledToolbar  className='px-0 style_c'>
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
        <div   className={` header d-none d-md-block`}>
          <h4 className={`mb-1 pb-0`}>Customers</h4>
          <p style={{fontSize: '14px'}} className={`mb-0 pb-0`}>
            {'Complete customer record and feedback log'}
          </p>
        </div>
      </StyledToolbar>
    </StyledRoot> */}

      <div className="wrapper">
        <div className="header d-block d-md-none mb-4 mt-2 pt-3 ">
          <div className={`${styles.product_actions} d-md-flex justify-content-between`}>
            <div className=" ">
              <h4 className={`mb-0 pb-0`}>Vehicles</h4>
              <p style={{ fontSize: '14px' }} className={`mb-0 mt-2 pb-0`}>
                Add buses/Bikes to your list
              </p>

            </div>
          </div>
        </div>
        <Box style={{ padding: '0' }} className='aa' sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs" onChange={handleChange}>
                <Tab label="Buses" value="1" />
                <Tab label="Bikes" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ paddingLeft: '0' }}>
              <Buses />
            </TabPanel>
            <TabPanel value="2" style={{ paddingLeft: '0' }}>
              <Bikes />
            </TabPanel>
          </TabContext>
        </Box>
      </div>

      
      <GlobalModal
        open={addBikeModalOpen}
        onClose={handleCloseAddBike}
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        width='540px !important'
        overflow='hidden'
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

            }}>Add Bike</h5>

            <span onClick={handleCloseAddBike} style={{ cursor: 'pointer' }}>
              <img src="/assets/icons/x.svg" alt="" />

            </span>

          </div>
          <p className="text-muted mt-0 mb-4" style={{ fontSize: '13px' }}>Add a Bike to your owned vehicles</p>

          <form action="" className="mt-0">
            <div style={{
              width: 'fit-content',
              textAlign: 'center'
            }}>
              <p className="text-dark" style={{ fontWeight: '500' }}>Bike Number</p>
              <p className="text-muted">004</p>
            </div>

            <div className="row mt-4">
              <div className="col-12 mb-1">
                <div className="mb-3">
                  <label htmlFor="drivers">Bike Name</label>
                  <Select
                    labelId="s"
                    id="s"
                    fullWidth
                    size="small"
                    required
                    name="verified"
                    defaultValue='select'
                  >

                    <MenuItem value='select'>Select Name</MenuItem>
                    <MenuItem value='14'>McCoy</MenuItem>
                    <MenuItem value='18'>McCoy</MenuItem>
                    <MenuItem value='22'>McCoy</MenuItem>
                  </Select>
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
            <div className="mt-4">
              <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                Save
              </button>
            </div>
          </form>
        </div>
      </GlobalModal>


      <GlobalModal
        open={addDriverModalOpen}
        onClose={handleCloseAddDriver}
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        width='540px !important'
        overflow='hidden'
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

            }}>Add Bus</h5>

            <span onClick={handleCloseAddDriver} style={{ cursor: 'pointer' }}>
              <img src="/assets/icons/x.svg" alt="" />

            </span>

          </div>
          <p className="text-muted mt-0 mb-4" style={{ fontSize: '13px' }}>Add a Bus to your owned vehicles</p>

          <form action="" className="mt-0">
            <div style={{
              width: 'fit-content',
              textAlign: 'center'
            }}>
              <p className="text-dark" style={{ fontWeight: '500' }}>Bus Number</p>
              <p className="text-muted">004</p>
            </div>

            <div className="row mt-4">
              <div className="col-12 mb-1">
                <div className="mb-3">
                  <label htmlFor="drivers">Bus Name</label>
                  <Select
                    labelId="s"
                    id="s"
                    fullWidth
                    size="small"
                    required
                    name="verified"
                    defaultValue='select'
                  >

                    <MenuItem value='select'>Select Name</MenuItem>
                    <MenuItem value='14'>McCoy</MenuItem>
                    <MenuItem value='18'>McCoy</MenuItem>
                    <MenuItem value='22'>McCoy</MenuItem>
                  </Select>
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
            <div className="mt-4">
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
