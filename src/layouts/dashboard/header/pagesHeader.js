import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import '../../../Global.css'

import Iconify from '../../../components/iconify';
import bus from '../../../bus';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 50;

const StyledRoot = styled(AppBar)(({ theme }) => ({
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
  pathName: PropTypes.string.isRequired,

};

export default function Header({ onOpenNav, pathName }) {
  const [pageHeader, setPageHeader] = useState('')
  const [pageText, setPageText] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [n, setN] = useState([]);




  useEffect(() => {
    const pathNameWithoutTrailingSlash = pathName.replace(/\/+$/, '');
    const pathNameWithoutParameter = pathNameWithoutTrailingSlash.replace(/\/\d+$/, '');
    switch (pathNameWithoutParameter) {
      case '/dashboard/customers':
        setPageHeader('Customers')
        setPageText('Manage and monitor all customers')

        break;
      case '/dashboard/wallets':
        setPageHeader('Wallet')
        setPageText('Manage all your cash transactions.')

        break;
      case '/dashboard/administration':
        setPageHeader('Administration')
        setPageText('Assign roles to your staff here ')

        break;
      case '/dashboard/data_insight':
        setPageHeader('Data Insight')
        setPageText('An overview of your store orders and performance metrics.')

        break;
      case '/dashboard/settings':
      default:
        break;
    }

  }, [pathName])





  return (
    <StyledRoot className='pt-md-5 style_cs'>
      <StyledToolbar className='px-0 style_c'>
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
        <div className={` header d-none d-md-block`}>
          <h4 className={`mb-1 pb-0`}>{pageHeader}</h4>
          <p style={{ fontSize: '14px' }} className={`mb-0 pb-0`}>
            {pageText}
          </p>
        </div>

        <Box sx={{ flexGrow: 1 }} />

        {
          pathName === '/app/administration' &&
          <button type="button" onClick={() => bus.emit('open-invite-modal')} className={`btn btn-lg btn_primary`}>
            <img src="/assets/icons/plus.svg" className="pr-1" alt="" />

            <span>
              Invite Admin
            </span>
          </button>
        }


      </StyledToolbar>
    </StyledRoot>
  );
}
