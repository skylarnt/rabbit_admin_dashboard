import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';

import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';
// Module styles
import Styles from './CSSModules/EmailVerification.module.css'

// sections
// import { LoginForm } from '../sections/auth/login';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '100%', 
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    // overflowX: 'hidden'
    alignItems: 'center',
  },
}));

const StyledSection = styled('div')(({ theme, imageUrl }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  boxShadow: theme.customShadows.card,
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '50em',
  overflowX: 'hidden',
}));

const StyledContent = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  overflowX: 'hidden',
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  minHeight: '50em',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3, 0),
}));

// ----------------------------------------------------------------------

export default function VerifyEmail() {
  const mdUp = useResponsive('up', 'md');
  const imageUrl = '/assets/img/signup-img.jpeg';

  return (
    <>
      <Helmet>
        <title> Verify Email | Minimal UI </title>
      </Helmet>

      <StyledRoot /* style={{ border: '2px solid blue' }} */>


        {mdUp && (
          <StyledSection className={`${Styles.wrapper_before}`} imageUrl={imageUrl}>
            <div className={`${Styles.text_wrap}`}>
              <div>
                <img src='/assets/icons/Stars.svg' alt='Stars' />
              </div>
              <Typography variant="h1">
                Track and monitor your customers on a single dashboard
              </Typography>
              <p>Make informed sales decisions by monitoring consumer behaviours, brand acceptance and market performance.</p>
              <div className={`${Styles.join_sect}`}>
                <div>
                <img src="/assets/icons/Avatar-group.svg" alt='' />
                </div>
                <div>
                  <p>
                    Join 40,000+ users
                  </p>
                </div>
              </div>
            </div>

          </StyledSection>
        )}

        <Container style={{ width: '100%'}}>
          <StyledContent>
            <div className={`${Styles.logo_wrap}`}>
              <Logo />
            </div>

            <div className={`${Styles.signin_form_wrap}`}>
              <Typography variant='h3'>
                Email Verification
              </Typography>
              <p className={`${Styles.forgot} font-weight-bold text-muted mb-2 text-left`} >Enter the OTP sent to <span>joe@shoprite.com</span></p>
              <div className={`${Styles.input_box_wrap}`}>
                <div className={`${Styles.input_box}`}>
                  <Box>
                    <TextField type="number" />
                  </Box>
                </div>
                <div className={`${Styles.input_box}`}>
                  <Box>
                    <TextField type="number" />
                  </Box>
                </div>
                <div className={`${Styles.input_box}`}>
                  <Box>
                    <TextField type="number" />
                  </Box>
                </div>
                <div className={`${Styles.input_box}`}>
                  <Box>
                    <TextField type="number" />
                  </Box>
                </div>
              </div>
              
              <div className={`${Styles.forgot} mt-4`}>
                <small className='text-muted font-weight-normal' style={{fontSize: '1px !important'}}><span className='font-weight-bold' style={{textDecoration: 'none'}}>Note: </span>Check your email promotions or spam if you don’t find OTP in your inbox</small>
              </div>
              <div className={`${Styles.forgot}`}>
                <Link href='' className='text-center'>Resend OTP</Link>
              </div>
              <div>
                <Stack spacing={2} direction="row">
                  <Button className={`${Styles.signin_btn}`}>Verify</Button>
                </Stack>
              </div>
              <div className={`${Styles.signup_switch}`}>Don't have an account? <Link href='/signup'>Sign up</Link></div>
              <div></div>
            </div>
          <div className={`${Styles.signup_footer}`}>
            <p>© Retail Xpress 2023</p>
            <p><Link href='mailto:support@retailxpress.com'>support@retailxpress.com</Link></p>
          </div>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
