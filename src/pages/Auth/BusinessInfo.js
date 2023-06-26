// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// @mui
import { 
    Link, 
    Stack, 
    TextField, 
    Container, 
    Typography, 
    Button } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// Module styles
import Styles from './CSSModules/BusinessInfo.module.css'
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/logo';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
// import { LoginForm } from '../sections/auth/login';
import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        // overflowX: 'hidden'
        // alignItems: 'center',
    },
}));

const StyledSection = styled('div')(({ theme, imageUrl }) => ({
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    boxShadow: theme.customShadows.card,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    overflowX: 'hidden',
}));

const StyledContent = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    margin: '0',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3, 0),
    background: '#fff',
}));

// ----------------------------------------------------------------------

export default function BusinessInfo() {
    // const navigate = useNavigate();
    const mdUp = useResponsive('up', 'md');
    const imageUrl = '/assets/img/signup-img.jpeg';

    return (
        <>
            <Helmet>
                <title> Business Information | Minimal UI </title>
            </Helmet>

            <StyledRoot /* style={{ border: '2px solid blue' }} */>


                {mdUp && (
                    <StyledSection className={`${Styles.wrapper_before}`} imageUrl={imageUrl}>
                        <div className={`${Styles.text_wrap}`}>
                            <Typography variant="h1">
                                {/* Welcome, Let's get to know more about your business */}
                                Welcome! By entering your business information;
                            </Typography>
                            <p className='d-flex' style={{ alignItems: 'center' }}><img className='mr-3' src='/assets/icons/check-circle.png' alt='' /><span>Businesses with completed profiles are 3x more likely to be seen by customers</span></p>
                            <p className='d-flex' style={{ alignItems: 'center' }}><img className='mr-3' src='/assets/icons/check-circle.png' alt='' /><span>Access tools & resources to manage a successful digital business </span></p>
                            <p className='d-flex' style={{ alignItems: 'center' }}><img className='mr-3' src='/assets/icons/check-circle.png' alt='' /><span>Robust dashboard including real time data for making operational decisions</span></p>
                            <p className='d-flex' style={{ alignItems: 'center' }}><img className='mr-3' src='/assets/icons/check-circle.png' alt='' /><span>Unlimited access to all the features on your dashboard</span></p>
                        </div>

                        {/* <img src="/assets/illustrations/illustration_login.png" alt="login" /> */}
                    </StyledSection>
                )}

                <Container style={{ width: '100%', backgroundColor: '#fff', paddingRight: '0px' }}>
                    <StyledContent className={`${Styles.StyledContent}`} style={{ paddingTop: '6em', paddingBottom: '0' }}>
                        <div className={`${Styles.logo_wrap}`}>
                            <Logo />
                        </div>
                        <div className={`${Styles.StyledContent_wrap}`}>

                            <div className={`${Styles.signin_form_wrap}`}>
                                <div style={{ width: 'fit-content', margin: 'auto', paddingTop: '10px' }}>
                                    <img src='/assets/icons/Featured-icon.png'  alt=''/>
                                    <img src='/assets/icons/Featured-icon.png' alt='' />
                                </div>
                                <Typography variant='h3' className='text-center mb-0'>
                                    Business Information
                                </Typography>
                                <p className='text-center'>Please enter the relevant details.</p>
                                <div className={`${Styles.biz_logo_wrap} mt-4`}>
                                    <p className='font-weight-bold'>Upload Business Logo*</p>
                                    <div className={`${Styles.biz_logo}`}>
                                        <Avatar>
                                            <FolderIcon />
                                            <span className='bi bi-camera-fill'></span>
                                        </Avatar>
                                    </div>
                                </div>

                                <div className={`${Styles.input_box} mt-3`}>
                                    <label>Business Name*</label>
                                    <Box
                                        sx={{
                                            maxWidth: '100%',
                                        }}>
                                        <TextField fullWidth placeholder='Enter business name' id="fullWidth" />
                                    </Box>
                                </div>

                                <div className={`${Styles.input_box}`}>
                                    <label>Business Address*</label>
                                    <Box
                                        sx={{
                                            maxWidth: '100%',
                                        }}>
                                        <TextField fullWidth placeholder='Line 1' id="fullWidth" />
                                    </Box>
                                </div>

                                <div className='d-md-flex'>
                                    <div className={`${Styles.input_box} pr-md-4 w-100`}>
                                        <label>Country*</label>
                                        {/* <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}>
                                            <TextField fullWidth placeholder='Enter business name' id="fullWidth" />
                                        </Box> */}
                                        <div className="form-group" style={{boxSizing: 'border-box'}}>
                                            <select id="inputCountry" className="form-control border border-secondary" style={{boxShadow: 'none'}}>
                                                <option selected>Nigeria</option>
                                                <option>U.S.A</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${Styles.input_box} pl-md-4 w-100`}>
                                        <label>State*</label>
                                        {/* <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}>
                                            <TextField fullWidth placeholder='Enter business name' id="fullWidth" />
                                        </Box> */}
                                        <div className="form-group" style={{boxSizing: 'border-box'}}>
                                            <select id="inputState" className="form-control border border-secondary" style={{boxShadow: 'none'}}>
                                                <option selected>Lagos</option>
                                                <option>Kaduna</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${Styles.input_box}`}>
                                    <label>Business Phone Number*</label>
                                    <Box
                                        sx={{
                                            maxWidth: '100%',
                                        }}>
                                        <TextField fullWidth placeholder='+2348185654614' id="fullWidth" />
                                    </Box>
                                </div>

                                <p className='font-weight-bold text-dark mt-4'>Business Account Details*</p>

                                <div className='d-md-flex w-100'>
                                    <div className={`${Styles.input_box} pr-md-4`}>
                                        <label for='' className='font-weight-normal'>Bank Name*</label>
                                        <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}>
                                            <TextField fullWidth placeholder='Access Bank' id="fullWidth" />
                                        </Box>
                                    </div>
                                    <div className={`${Styles.input_box} pl-md-4`}>
                                        <label for='' className='font-weight-normal'>Account Number*</label>
                                        <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}>
                                            <TextField fullWidth placeholder='1234567890' id="fullWidth" />
                                        </Box>
                                        <p className='text-right'><small className='font-weight-normal text-muted'>Michael Joseph</small></p>
                                    </div>
                                </div>

                                <div className={`${Styles.input_box}`}>
                                    <label>Business Email*</label>
                                    <Box
                                        sx={{
                                            maxWidth: '100%',
                                        }}>
                                        <TextField fullWidth placeholder='joe@shoprite.com' id="fullWidth" />
                                    </Box>
                                </div>

                                <div className={`${Styles.input_box}`}>
                                    <label>Services Rendered*</label>
                                    {/* <Box
                                        sx={{
                                            maxWidth: '100%',
                                        }}>
                                        <TextField fullWidth placeholder='Select items' id="fullWidth" />
                                    </Box> */}
                                    <div className={`${Styles.accordion_wrap}`} >
                                        <Accordion >
                                            <AccordionSummary
                                                className={`${Styles.acc_summary}`}
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography variant='p' style={{fontSize: '13px'}}>Select Items</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <div className='px-2 pb-2'>
                                                    <div className='d-flex'>
                                                        <span className={`${Styles.first_acc_opt} px-2 py-1 mr-1`} >Trips <span className={`${Styles.first_acc_opt_span}`} >&times;</span></span>
                                                        <span className={`${Styles.first_acc_opt} px-2 py-1 mx-1`} >Charter <span className={`${Styles.first_acc_opt_span}`} >&times;</span></span>
                                                        <span className={`${Styles.first_acc_opt} px-2 py-1 mx-1`} >Interstate <span className={`${Styles.first_acc_opt_span}`} >&times;</span></span>
                                                    </div>
                                                    <div className='d-flex mt-3 w-100' style={{justifyContent:'space-between'}}>
                                                        <div className='pr-2'>
                                                            <Typography variant='p' className={`${Styles.acc_details_header}`} >Transport</Typography>
                                                            <span className={`${Styles.acc_details_span} py-1 px-2 my-2`} >
                                                                <input id='trip' type='checkbox' className={`${Styles.acc_details_box}`} />
                                                                <label for='trip' className='font-weight-normal m-0' style={{fontSize: '12px'}}>Trips</label>
                                                            </span>
                                                            <span className={`${Styles.acc_details_span} py-1 px-2 mb-2`} >
                                                                <input id='char' type='checkbox' className={`${Styles.acc_details_box}`} />
                                                                <label for='char' className='font-weight-normal m-0' style={{fontSize: '12px'}}>Charter</label>
                                                            </span>
                                                            <span className={`${Styles.acc_details_span} py-1 px-2`} >
                                                                <input id='inter' type='checkbox' className={`${Styles.acc_details_box}`} />
                                                                <label for='inter' className='font-weight-normal m-0' style={{fontSize: '12px'}}>Interstate</label>
                                                            </span>
                                                        </div>
                                                        <div className='pr-2'>
                                                            <Typography variant='p' className={`${Styles.acc_details_header}`} >Logistics</Typography>
                                                            <span className={`${Styles.acc_details_span} py-1 px-2 my-2`} >
                                                                <input id='bus_log' type='checkbox' className={`${Styles.acc_details_box}`} />
                                                                <label for='bus_log' className='font-weight-normal m-0' style={{fontSize: '12px'}}>Bus Logistics</label>
                                                            </span>
                                                            <span className={`${Styles.acc_details_span} py-1 px-2 mb-2`} >
                                                                <input id='bike_log' type='checkbox' className={`${Styles.acc_details_box}`} />
                                                                <label for='bike_log' className='font-weight-normal m-0' style={{fontSize: '12px'}}>Bike Logistics</label>
                                                            </span>
                                                            <span className={`${Styles.acc_details_span} py-1 px-2`} >
                                                                <input id='int_log' type='checkbox' className={`${Styles.acc_details_box}`} />
                                                                <label for='int_log' className='font-weight-normal m-0' style={{fontSize: '12px'}}>Interstate Logistics</label>
                                                            </span>
                                                        </div>
                                                        <div className='d-sm-flex w-50' style={{justifyContent: 'flex-start', gap: '20px'}}>  
                                                            <div className='pr-2'>
                                                                <Typography variant='p' className={`${Styles.acc_details_header}`} >Food</Typography>
                                                                <span className={`${Styles.acc_details_span} py-1 px-2 my-2`} >
                                                                    <input id='food' type='checkbox' className={`${Styles.acc_details_box}`} />
                                                                    <label for='food' className='font-weight-normal m-0' style={{fontSize: '12px'}}>Food</label>
                                                                </span>
                                                            </div>
                                                            <div className=''>
                                                                <Typography variant='p' className={`${Styles.acc_details_header}`} >Buy Now Pay Later</Typography>
                                                                <span className={`${Styles.acc_details_span} py-1 px-2 my-2`} >
                                                                    <input id='BNPL' type='checkbox' className={`${Styles.acc_details_box}`} />
                                                                    <label for='BNPL' className='font-weight-normal m-0' style={{fontSize: '12px'}}>BNPL</label>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionDetails>
                                        </Accordion>
                                        
                                    </div>
                                </div>

                                <div className={`${Styles.input_box}`}>
                                    <label>Business Website*</label>
                                    <Box
                                        sx={{
                                            maxWidth: '100%',
                                        }}>
                                        <TextField fullWidth placeholder='Enter your company URL' id="fullWidth" />
                                    </Box>
                                </div>

                                <div className={`${Styles.input_box}`}>
                                    <label>LinkedIn Url*</label>
                                    <Box
                                        sx={{
                                            maxWidth: '100%',
                                        }}>
                                        <TextField fullWidth placeholder='url' id="fullWidth" />
                                    </Box>
                                </div>
                                <div>
                                    <Stack spacing={2} direction="row">
                                        <Button className={`${Styles.signin_btn}`}>Continue</Button>
                                    </Stack>
                                </div>
                            </div>
                            <div className={`${Styles.signup_footer} mt-5`}>
                                <p>© Retail Xpress 2023</p>
                                <p><Link href='mailto:support@retailxpress.com'>support@retailxpress.com</Link></p>
                            </div>
                        </div>
                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}
