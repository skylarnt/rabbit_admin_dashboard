import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import navConfig from './config';
// import bus from "../../../bus";
import bus from "src/bus"
import '../header/index';
// ----------------------------------------------------------------------

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxWidth: '95%',
  overflow: 'scroll',
  bgcolor: '#F5F5F5',
  border: '1px solid #F5F5F5',
  borderRadius: '5px',
  boxShadow: 24,
  p: 2,
};

const NAV_WIDTH = 280;


// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const [openSwitchDialog, setOpenSwitchDialog] = useState(false);
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

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
  
  useEffect(() => {
    bus.on("open-logout-modal", () => {
      setOpenLogoutDialog(true);
    });
  }, []);

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
        <button className='btn d-block w-100 text-white py-2' style={{ background: '#00AF52' }} onClick={() => setOpenSwitchDialog(true)}>Switch Dashboard</button>
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
          onClick={() => setOpenLogoutDialog(true)}
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
        <img className='float-left' style={{ width: '42px', borderRadius: '50%' }} src={'/assets/icons/Avatar.png'} alt="" />
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
    <>

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


      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSwitchDialog}
        onClose={() => setOpenSwitchDialog(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEnforceFocus
        className='modal_bg'
        style={{maxWidth: '100%'}}
      >
        <Fade in={openSwitchDialog} className='modal_bg'>
          <Box className={`mobile_modal_size modal_bg`} sx={style1}>
            <div className={`text-center add_to_cart_content`}>
                    <div className={`d-flex justify-content-between mb-5`}>
                        <span className='m-0'></span>
                        <span className='p-2' onClick={() => setOpenSwitchDialog(false)} style={{ cursor: 'pointer' }}>
                            <img src="/assets/icons/x.svg" alt="" />

                        </span>

                    </div>
              {/* <img src="/assets/icons/circleCheck.svg" alt="" /> */}
              <h3 className="mt-3" style={{ fontWeight: 'bold' }}>Switch Dashboard</h3>
              <p className='text-center font-weight-normal text-muted' style={{ textAlign: 'center !important' }}>
                Monitor your other services
              </p>
              <div className="my-4 px-4">
                <button 
                  onClick={() => setOpenSwitchDialog(false)} 
                  className={`modal_btn d-block w-100 hover btn mx-auto border py-2 py-md-3 bg-light text-dark`}
                  style={{
                    boxShadow: '0 5px 5px #bbb'
                  }}
                >
                  Logistics
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>


<Modal
  aria-labelledby="transition-modal-title"
  aria-describedby="transition-modal-description"
  open={openLogoutDialog}
  onClose={() => setOpenLogoutDialog(false)}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500,
  }}
  disableEnforceFocus
  className='modal_bg'
  style={{maxWidth: '100%'}}
>
  <Fade in={openLogoutDialog} className='modal_bg'style={{maxWidth: '90%'}}>
    <Box className={`mobile_modal_size modal_bg`} sx={style1}style={{maxWidth: '90%'}}>
      <div className={`text-center add_to_cart_content py-3`}>
              {/* <div className={`d-flex justify-content-between`}>
                  <span className='m-0'></span>
                  <span className='p-2' onClick={() => setOpenLogoutDialog(false)} style={{ cursor: 'pointer' }}>
                      <img src="/assets/icons/x.svg" alt="" />

                  </span>

              </div> */}
        <img src="/assets/RABBIT1.png" alt="" />
        {/* <h4 className="mt-3" style={{ fontWeight: 'bold' }}>Switch Dashboard</h4> */}
        <p className='text-center font-weight-normal my-3' style={{ textAlign: 'center !important', fontSize: '1.2em' }}>
          Do you want to Logout?
        </p>
        <div className="d-flex px-2">
          <button 
            onClick={() => setOpenLogoutDialog(false)} 
            className={`modal_btn d-block w-100 hover btn border py-2 bg-light text-dark mr-2`}
            style={{
              boxShadow: '0 5px 5px #bbb'
            }}
          >
            Cancel
          </button>

          <button 
            // onClick={() => setOpenLogoutDialog(false)} 
            className={`modal_btn d-block w-100 hover btn border py-2 bg-light text-dark ml-2`}
            style={{
              boxShadow: '0 5px 5px #bbb'
            }}
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      </div>
    </Box>
  </Fade>
</Modal>

    </>
  );
}
