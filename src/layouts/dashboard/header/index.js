import '../../../Global.css'

import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import Iconify from '../../../components/iconify';
//
import NotificationsPopover from './NotificationsPopover';
// ----------------------------------------------------------------------
import { bgBlur } from '../../../utils/cssStyles';

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 50;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));



// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {


    const LogoutUser=()=>{
      localStorage.removeItem('auth');


    
    
      
      setTimeout(() => {


        
      }, 1000);

    

    
      
    
      
    }
  return (
    <StyledRoot  className='header_container style_cs'>
      <StyledToolbar  className='px-0 style_c'>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <div   className={` header d-none d-md-block`}>
          <h4 className={`mb-1 pb-0`}>Dashboard</h4>
          <p style={{fontSize: '14px'}} className={`mb-0 pb-0`}>
            {'An overview of your business performance'}
          </p>
        </div>
        
        <Box sx={{ flexGrow: 1 }} />


        <div className='hold_input4' style={{width:'35%'}}>
            <img src="/assets/icons/search.svg" alt="" />
            <input type="text" placeholder="Search" style={{textIndent:'25px',width:'100%'}} className=" form-control" />

        </div>
        
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <LanguagePopover /> */}
          <NotificationsPopover />
          
          <div className="dropleft ">
            <PowerSettingsNewIcon  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  style={{color:'gray', cursor:'pointer'}} />
                
                
            
            <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
              <button type="button" onClick={LogoutUser} className="rss dropdown-item btn border-0">Logout</button>
            
            
            </div>
          </div>
          {/* <AccountPopover /> */}
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
