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
import Styles from './CSSModules/AgreementPage.module.css'
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/logo';
// import { LoginForm } from '../sections/auth/login';
import * as React from 'react';
import Box from '@mui/material/Box';

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

export default function AgreementPage() {
    // const navigate = useNavigate();
    const mdUp = useResponsive('up', 'md');
    const imageUrl = '/assets/img/signup-img.jpeg';

    return (
        <>
            <Helmet>
                <title> Agreement | Minimal UI </title>
            </Helmet>

            <StyledRoot /* style={{ border: '2px solid blue' }} */>


                {mdUp && (
                    <StyledSection className={`${Styles.wrapper_before}`} imageUrl={imageUrl}>
                        <div className={`${Styles.text_wrap}`}>
                            <Typography variant="h1">
                                Welcome, Let's get to know more about your business
                            </Typography>
                            <p className='d-flex' style={{ alignItems: 'center' }}><img className='mr-3' src='/assets/icons/check-circle.png' alt='' /><span>Your business becomes public to wholesalers and retailers</span></p>
                            <p className='d-flex' style={{ alignItems: 'center' }}><img className='mr-3' src='/assets/icons/check-circle.png' alt='' /><span>Businesses with completed profiles are 3x more likely to be seen by customers</span></p>
                            <p className='d-flex' style={{ alignItems: 'center' }}><img className='mr-3' src='/assets/icons/check-circle.png' alt='' /><span>Robust dashboard including real time data for making sales decisions</span></p>
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
                                <Typography variant='h3' className=''>
                                    KYC & MOU AGREEMENT 
                                </Typography>
                                <p className=''>By entering the following Information information below you have signed they know your customer (KYC) and Memorandum of understanding (MOU) agreement and henceforth required to comply.</p>
                                

                                <p className=''>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non 
                                deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua 
                                dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation Amet minim mollit non 
                                deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua 
                                dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                                nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                                consequat duis enim velit mollit. Exercitation Amet minim mollit non deserunt ullamco est sit aliqua 
                                dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                                nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non 
                                deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                                Exercitation Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non 
                                deserunt ullamco est sit aliqua dolor do m velit mollit. Exercitation Amet minim mollit non deserunt 
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation 
                                veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat dui 
                                Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua 
                                dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                                nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
                                consequat dui </p>

                                <div className='d-md-flex'>
                                    <div className={`${Styles.input_box} w-100`}>
                                        <label>Title</label>
                                        <div className="form-group" style={{boxSizing: 'border-box'}}>
                                            <select id="inputCountry" className="form-control border border-secondary" style={{boxShadow: 'none'}}>
                                                <option selected>Mr</option>
                                                <option>Mrs</option>
                                                <option>Miss</option>
                                                <option>Custom</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${Styles.input_box}`}>
                                    <label>Full Name</label>
                                    <Box
                                        sx={{
                                            maxWidth: '100%',
                                        }}>
                                        <TextField fullWidth placeholder='Enter your full name' id="fullWidth" />
                                    </Box>
                                    <p className=''><small className='font-weight-normal text-muted'>By entering your full name you agree to our kyc policy</small></p>
                                </div>

                                <div className='d-md-flex'>
                                    <div className={`${Styles.input_box} w-100`}>
                                        <label>Valid Identity Card</label>
                                        <div className="form-group" style={{boxSizing: 'border-box'}}>
                                            <select id="inputCountry" className="form-control border border-secondary" style={{boxShadow: 'none'}}>
                                                <option selected>Select Type Of Identification Card</option>
                                                <option>Verve</option>
                                                <option>MasterCard</option>
                                                <option>Visa</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    <span>25/10/2022</span>
                                </p>

                                <div>
                                    <Stack spacing={2} direction="row" className='mt-4'>
                                        <Button className={`${Styles.signin_btn}`}>I Agree</Button>
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
