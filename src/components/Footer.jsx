import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        py: 2,
        textAlign: 'center',
        backgroundColor: '#121212',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255,255,255,0.2)',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Prabhudatta. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
