import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: '#1F1B24',
        color: '#fff',
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Let’s Connect
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4 }}>
            Reach out for collaborations or a friendly hello!
          </Typography>
          <Stack direction="column" spacing={2} alignItems="center">
            <Link
              href="mailto:someone@example.com"
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <EmailIcon sx={{ mr: 1 }} />
              prabhudatta.prof@gmail.com
            </Link>
            <Link
              href="https://github.com/Prabhudatta19/"
              target="_blank"
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <GitHubIcon sx={{ mr: 1 }} />
              github.com/Prabhudatta19
            </Link>
            <Link
              href="https://www.linkedin.com/in/prabhudatta-mohapatra/"
              target="_blank"
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <LinkedInIcon sx={{ mr: 1 }} />
              linkedin.com/in/prabhudatta-mohapatra
            </Link>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Contact;
