import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info, iconActive } = item;
  

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: '#00AF52',
          bgcolor: '#00af521f',
          fontWeight: 'fontWeightBold',
        },
      }}
      style={{
        paddingLeft: '10px',
        marginBottom: '6px'
      }}
    >
      {/* <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon> */}
      <p className='mb-0 ml-3'>
        {path !== window.location.pathname && <img src={icon} alt="icon_active" />}
        {path === window.location.pathname && <img src={iconActive} alt="icon_active" />}

      </p>
      <ListItemText style={{ paddingLeft: '15px' }} disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
