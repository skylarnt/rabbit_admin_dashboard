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
import Styles from './CSSModules/ResetPassword.module.css'

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
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';


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
  minHeight: '52em',
  overflowX: 'hidden',
}));

const StyledContent = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  overflowX: 'hidden',
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  minHeight: '52em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3, 0),
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const mdUp = useResponsive('up', 'md');
  const imageUrl = '/assets/img/signup-img.jpeg';

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword_two, setShowPassword_two] = React.useState(false);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword_two = () => setShowPassword_two((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword_two = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title> Reset Password | Minimal UI </title>
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

          </StyledSection>
        )}

        <Container style={{ width: '100%', }}>
          <StyledContent className={`${Styles.StyledContent}`}>
            <div className={`${Styles.logo_wrap}`}>
              <Logo />
            </div>

            <div className={`${Styles.signin_form_wrap}`}>
              <Typography variant='h3'>
                Reset Password
              </Typography>

              <div className={`${Styles.input_box}`}>
                <label>Enter New Password*</label>
                
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <OutlinedInput
                  placeholder='Create a password'
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
                  <small className='text-muted font-weight-normal mt-2'>Must be at least 8 characters.</small>
                </FormControl>
              </div>

              <div className={`${Styles.input_box}`}>
                <label>Confirm Password*</label>
                
                <FormControl sx={{ width: '100%' }} variant="outlined">
                  <OutlinedInput
                  placeholder='Confirm password'
                    id="outlined-adornment-password_two"
                    type={showPassword_two ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword_two}
                          onMouseDown={handleMouseDownPassword_two}
                          edge="end"
                        >
                          {showPassword_two ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <small className='text-muted font-weight-normal mt-2'></small>
                </FormControl>
              </div>

              <div>
                <Stack spacing={2} direction="row">
                  <Button className={`${Styles.signin_btn}`}>Proceed</Button>
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
