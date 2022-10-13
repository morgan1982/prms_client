import React from 'react'; 
import PropTypes from 'prop-types';

import { createTheme } from "@mui/material/styles"
import { Link as RouterLink } from 'react-router-dom';


const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;

  return <RouterLink data-testid="custom link" ref={ref} to={href} { ...other }/>
})

LinkBehavior.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
};


export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#2D3034 "
    }
  }
})

