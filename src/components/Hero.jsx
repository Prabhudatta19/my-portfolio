import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import codingAnimation from '../lotties/coding.json';

function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(45deg, #BB86FC, #03DAC6, #F8B400, #FF2E63)',
        backgroundSize: '600% 600%',
        animation: 'gradientAnimation 12s ease infinite',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Left: Intro Text */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'left' },
            mb: { xs: 4, md: 0 },
            color: '#fff',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h1" gutterBottom>
              Hi, I’m{' '}
              <span style={{ color: '#00000f' }}>Prabhudatta</span>
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Building modern, scalable software solutions for the enterprise.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="#contact"
              sx={{ mr: 2 }}
            >
              Contact Me
            </Button>
            <Button variant="outlined" color="#00000f" href="#">
              View Resume
            </Button>
          </motion.div>
        </Box>

        {/* Right: Optional Lottie Animation */}
        {
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Lottie
              animationData={codingAnimation}
              style={{ width: 400, height: 400 }}
              loop
              autoplay
            />
          </motion.div>
        </Box>
        }
      </Container>
    </Box>
  );
}

export default Hero;
