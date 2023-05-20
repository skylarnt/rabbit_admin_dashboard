import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';

import { Link, Container, Typography, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Logo from '../../../components/logo';
// Module styles
import Styles from '../CSSModules/LoginPage.module.css'

// sections
// import { LoginForm } from '../sections/auth/login';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

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
  minHeight: '55em',
  overflowX: 'hidden',
}));

const StyledContent = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  overflowX: 'hidden',
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  minHeight: '55em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  const imageUrl = '/assets/img/signup-img.jpeg';

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot /* style={{ border: '2px solid blue' }} */>


        {mdUp && (
          <StyledSection className={`${Styles.wrapper_before}`} imageUrl={imageUrl}>
            <div className={`${Styles.text_wrap}`}>
              <div>
                <img src='/assets/icons/Stars.svg' alt='' />
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
                Sign in
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
              <div className={`${Styles.input_box}`}>
                <label>Password*</label>
                
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <OutlinedInput
                  placeholder='Enter password'
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className={`${Styles.forgot}`}>
                <Link href=''>Forgot Password?</Link>
              </div>
              <div>
                <Stack spacing={2} direction="row">
                  <Button className={`${Styles.signin_btn}`}>Sign in</Button>
                </Stack>
              </div>
              <div>
                <Stack spacing={2} direction="row">
                  <Button className={`${Styles.google_btn}`}><img src='/assets/icons/google_icon.png' alt='' /> Sign in with Google</Button>
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
