import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// @mui
import { Box, Drawer, ListItemText } from '@mui/material';
// mock
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
import NavSection from '../../../components/nav-section';
import { StyledNavItem } from '../../../components/nav-section/styles';

import navConfig from './config';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;


// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/login');
  };

  const ProfilePageClick = () => {
    navigate('/dashboard/profile');
  };

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>

      <NavSection data={navConfig} />
      <div className='px-2 pb-5'>
        <button className='btn d-block w-100 text-white py-2' style={{ background: '#00AF52' }}>Switch Dashboard</button>
      </div>

      <div className='border-bottom '>
        <StyledNavItem
          className='px-3'
          sx={{
            '&.active': {
              color: 'text.primary',
              bgcolor: 'action.selected',
              fontWeight: 'fontWeightBold',
            },
          }}
          onClick={handleLogoutClick}
        >
          {/* <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon> */}
          <p className='mb-0'>
            <img src="/assets/icons/log-out.svg" alt="" />
          </p>
          <ListItemText style={{ paddingLeft: '15px', color: '#ff0000d1' }} disableTypography primary='Log Out' />
        </StyledNavItem>

      </div>
      <StyledNavItem
        // component={RouterLink}
        // to='/app/profile'
        className='px-3 py-5'
        onClick={ProfilePageClick}
      >
        <img className='float-left' style={{ width: '42px', borderRadius: '50%' }} src={'/assets/illustrations/illustration_avatar.png'} alt="" />
        <div className='ml-2 pt-3'>
          <h6 className='mb-0' style={{ fontSize: '16px' }}>
            Rabbit WebApp
          </h6>
          <p style={{ fontSize: '12px' }} className='mb-0'>
            <span>123465</span>
          </p>

          <p className='text-primary' style={{ fontSize: '10px' }}>
            <span style={{ cursor: 'pointer' }}
              type='button'
            // to='/app/profile'
            // component={RouterLink}
            // to='/app/profile'
            >
              View profile
            </span>
          </p>

        </div>

      </StyledNavItem>

      <Box sx={{ flexGrow: 1 }} />

    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
