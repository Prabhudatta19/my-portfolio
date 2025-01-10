import React from 'react';
import { Box } from '@mui/material';

function WaveDivider({ flip = false, color = '#1F1B24' }) {
  const transform = flip ? 'rotate(180, 0, 0)' : '';

  return (
    <Box
      component="svg"
      sx={{ width: '100%', height: '100px' }}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        transform={transform}
        fill={color}
        d="M0,256L30,213.3C60,171,120,85,180,74.7C240,64,300,128,360,144C420,160,480,128,540,106.7C600,85,660,75,720,80C780,85,840,107,900,144C960,181,1020,235,1080,234.7C1140,235,1200,181,1260,165.3C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      />
    </Box>
  );
}

export default WaveDivider;
