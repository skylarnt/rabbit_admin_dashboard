import { Helmet } from 'react-helmet-async';
// import { useEffect, useState } from "react";
// import bus from 'src/bus';
import styles from './Operations.module.css'
import React from 'react';
import TripsOpr from './components/Trips';
import InterstateOpr from './components/Interstate';
import CharterOpr from './components/Charter';
// import TextField from '@mui/material/TextField';

// import { useLayoutEffect } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// ----------------------------------------------------------------------


export default function OperationsPage() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Helmet>
        <title> Operations </title>
      </Helmet>

      <div className="wrapper">
        <div className="header d-block d-md-none mb-4 mt-2 pt-3">
          <div className={`${styles.product_actions} d-md-flex justify-content-between`}>
            <div className=" ">
              <h4 className={`mb-0 pb-0`}>Operations</h4>
              <p style={{ fontSize: '14px' }} className={`mb-0 mt-2 pb-0`}>
                View all operational activities
              </p>

            </div>
          </div>
        </div>
        <Box style={{ padding: '0' }} className='aa' sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="lab API tabs" onChange={handleChange} style={{position: 'relative', display: 'inline-block'}}>
                <Tab label="Trips" value="1" />
                <Tab label="Interstate" value="2" />
                <Tab label="Charter" value="3" />
                <span className={`${styles.badge}  text-dark rounded`}>2</span>
                <span className={`${styles.badge}  text-dark rounded`}>2</span>
              </TabList>
            </Box>
            <TabPanel value="1" style={{ paddingLeft: '0' }}>
              <TripsOpr />
            </TabPanel>
            <TabPanel value="2" style={{ paddingLeft: '0' }}>
              <InterstateOpr />
            </TabPanel>
            <TabPanel value="3" style={{ paddingLeft: '0' }}>
              <CharterOpr />
            </TabPanel>
          </TabContext>
        </Box>
      </div>

    </>
  );
}
