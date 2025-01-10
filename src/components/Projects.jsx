import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'History-Search',
    description: 'SPA to query historical events & figures using public APIs.',
    link: 'https://github.com/yourusername/history-search',
  },
  {
    title: 'Weather-App',
    description: 'Real-time weather updates using OpenWeather APIs.',
    link: 'https://github.com/yourusername/weather-app',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom sx={{ color: '#F1F1F1' }}>
            Projects
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map((project, i) => (
              <Grid item xs={12} md={6} lg={4} key={i}>
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 0.5 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Card
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(5px)',
                    }}
                  >
                    <CardActionArea
                      href={project.link}
                      target="_blank"
                      sx={{ height: '100%' }}
                    >
                      <CardContent>
                        <Typography variant="h5" sx={{ mb: 1 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2">
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Projects;
