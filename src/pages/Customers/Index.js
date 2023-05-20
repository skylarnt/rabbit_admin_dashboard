
// ----------------------------------------------------------------------
import { useState } from 'react';
import { Tab, TabContext, TabList, TabPanel } from '../../components/muiComponents';
import CustomerDetails from './Components/cDetails';

export default function CustomerPage() {
    const [value, setValue] = useState('1');


    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            {/* <Helmet>
         <title> Dashboard: Products | Minimal UI </title>
        </Helmet> */}
            <div className='wrapper mt-3'>
                <div className="header d-block d-md-none mb-4">
                    <h4 className={`mb-0 pb-0`}>Customers</h4>

                    <p style={{ fontSize: '14px' }} className={`mb-0 pb-0`}>
                        Manage and monitor all customers
                    </p>

                </div>
                <div >
                    <TabContext value={value}>
                        <TabList onChange={handleTabChange} className='border-bottom'>
                            <Tab sx={{
                                color: value === '1' ? '#00AF52 !important' : '#667085 !important',
                                borderBottomColor: value === '2' ? '#00AF52 !important' : 'inherit'
                            }} label="Customer Details" value="1" />
                            <Tab sx={{
                                color: value === '2' ? '#00AF52 !important' : 'inherit',
                                borderBottomColor: value === '2' ? '#00AF52 !important' : '#667085 !important'
                            }} label="Customers Reviews" value="2" />
                        </TabList>
                        <TabPanel value="1" className='px-0'>
                            <CustomerDetails />
                        </TabPanel>
                        <TabPanel value="2">Tab 2 content</TabPanel>
                    </TabContext>
                </div>

            </div>

        </>
    );
}
