import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Container, Typography, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../components/iconify';
// Module styles
import Styles from './CSSModules/ForgotPassword.module.css'
import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/logo';

// sections
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
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  boxShadow: theme.customShadows.card,
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '48em',
  overflowX: 'hidden',
}));

const StyledContent = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  overflowX: 'hidden',
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  minHeight: '48em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3, 0),
}));

// ----------------------------------------------------------------------

export default function ForgotPassword() {
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'md');
  const imageUrl = '/assets/img/signup-img.jpeg';

  return (
    <>
      <Helmet>
        <title> Forgot Password | Minimal UI </title>
      </Helmet>

      <StyledRoot /* style={{ border: '2px solid blue' }} */>


        {mdUp && (
          <StyledSection className={`${Styles.wrapper_before}`} imageUrl={imageUrl}>
            <div className={`${Styles.text_wrap}`}>
              <div>
                <img src='/assets/icons/Stars.svg' />
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

            {/* <img src="/assets/illustrations/illustration_login.png" alt="login" /> */}
          </StyledSection>
        )}

        <Container style={{ width: '100%', }}>
          <StyledContent className={`${Styles.StyledContent}`}>
            <div className={`${Styles.logo_wrap}`}>
              <Logo />
            </div>

            <div className={`${Styles.signin_form_wrap}`}>
              <Typography variant='h3'>
                Forgot Password
              </Typography>
              <div className={`${Styles.input_box}`}>
                <label>Email*</label>
                <Box
                  sx={{
                    maxWidth: '100%',
                  }}
                >
                  <TextField fullWidth placeholder='Enter your Email' id="fullWidth" />
                </Box>
              </div>
              <div>
                <Stack spacing={2} direction="row">
                  <Button className={`${Styles.signin_btn}`}>Send</Button>
                </Stack>
              </div>
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
