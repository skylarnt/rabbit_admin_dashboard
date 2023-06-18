import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import DashboardHeader from './header/index';
import PagesHeader from './header/pagesHeader';
import SmallScreenHeader from './header/smallScreenHeader';
import Nav from './nav';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const [pathName, setPathName] = useState(window.location.pathname);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const {innerWidth} =window

  const locationVal=window.location.pathname

  useEffect(() => {
    
    setPathName(locationVal);
      
  }, [locationVal]);

  useEffect(() => {
    
    if(innerWidth <= 743) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
      
  }, [innerWidth]);


  return (
    <StyledRoot>

      <Nav openNav={open} onCloseNav={() => setOpen(false)} />
      
      {(pathName ==="/dashboard/app" && !isSmallScreen) && 
          <DashboardHeader onOpenNav={() => setOpen(true)} />
        
        }
         {(!isSmallScreen && pathName !== "/dashboard/app") &&
          <PagesHeader pathName={pathName} onOpenNav={() => setOpen(true)} />
        
        }
        { isSmallScreen && 
          <SmallScreenHeader onOpenNav={() => setOpen(true)} />

        }


      <Main  className='px-3 px-md-4 remove_padding'>
        
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
