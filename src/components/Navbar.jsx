import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <AppBar
        position="sticky"
        sx={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700, color: '#BB86FC' }}
          >
            PRABHUDATTA
          </Typography>
          <Box>
            <Button color="inherit" href="#about" sx={{ mr: 1 }}>
              About
            </Button>
            <Button color="inherit" href="#experience" sx={{ mr: 1 }}>
              Experience
            </Button>
            <Button color="inherit" href="#projects" sx={{ mr: 1 }}>
              Projects
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}

export default Navbar;
