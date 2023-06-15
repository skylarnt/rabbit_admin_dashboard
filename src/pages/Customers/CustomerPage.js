/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import * as Router from 'react-router-dom';

// import {
  //   Card, 
  //   CardContent, 
//   Link, 
//   // Stack, 
//   // IconButton, 
//   // InputAdornment, 
//   // TextField, 
//   // Checkbox, 
//   // Container, 
//   // Typography, 
//   // Button 
// } from '@mui/material';
// import GlobalModal from "../../Modals/GlobalModal";
// import Filter1 from '../Filter/Filter1';
// import { Box, Tab, TabList, TabPanel, TabContext } from '@mui/material';
// import ''

// import PropTypes from 'prop-types';
// @mui

import { Helmet } from 'react-helmet-async';
// import { useState } from "react";
import styles from './CustomerPage.module.css'
import React from 'react';
import Details from './components/CustomerDetail';
import Reviews from './components/CustomerReview';


// import { useLayoutEffect } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import TextField from '@mui/material/TextField';
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import { 
  // useParams, 
  // useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------




// ----------------------------------------------------------------------


export default function CustomerPage() {

  const [value, setValue] = React.useState('1');

 const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title> Customers </title>
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
        <div   className="header d-block d-md-none mb-4 mt-5 pt-3 ">
          <div className={`${styles.product_actions} d-md-flex justify-content-between`}>
            <div className=" ">
              <h4 className={`mb-0 pb-0`}>Customers</h4>
              <p style={{fontSize: '14px'}} className={`mb-0 mt-2 pb-0`}>
                Manage and monitor your Stores and stocks here.
              </p>

            </div>
          </div>
        </div>
        <Box style={{ padding: '0' }} className='aa' sx={{ width: '100%', typography: 'body1' }}>
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
        </Box>
     </div>

    </>
  );
}
