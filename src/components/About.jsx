import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Box
      id="about"
      sx={{
        position: 'relative',
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom sx={{ color: '#ffffff' }}>
            About Me
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 4, color: '#ffff60' }}>
            I am a product-driven software engineer with experience in building 
            robust front-end and back-end systems.
          </Typography>

          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                Tech Stack
              </Typography>
              <Typography variant="body1">
                <strong>Programming:</strong> Javascript, Java, C++, TypeScript,Python, Go<br />
                <strong>Frontend:</strong> HTML, CSS, React, Angular, Backbone, Bootstrap, Material UI<br />
                <strong>Backend:</strong> Node, Express, Spring, SpringBoot<br />
                <strong>Cloud &amp; DevOps:</strong> AWS, Azure(Certified), Docker, CI/CD(Jenkins & Gitlab)<br />
                <strong>Others:</strong> Git, REST, SQL, NoSQL
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
