import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  ButtonGroup
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { image } from 'framer-motion/client';

const projects = [
  {
    title: 'Simplified Jira',
    description: 'A project management tool for managing projects, tasks, and team collaborations with role-based access. Built with React, Node, Express, MongoDB, and MUI. Key features include project/issue management, user roles, and secure API integrations.',
    code: 'https://github.com/Prabhudatta19/simplified-jira',
    image: '/simplifiedJira.png',
    live: 'https://simplified-jira.vercel.app/'
  },
  {
    title: 'History-Search',
    description: 'A single-page React application using Vite which allows users to search for historical events and figures using keywords, integrating two public APIs. Users can search across two dedicated pages or get combined results on the home page.',
    code: 'https://github.com/Prabhudatta19/history-search',
    image: '/history.png',
    live: 'https://history-search.vercel.app/'
  },
  {
    title: 'Coding Contests Schedule',
    description: 'A Chrome extension developed to provide real-time schedules for current and upcoming coding contests. The extension fetches data from API exposed by clist.by, offering a consolidated view of all coding competitions and their timings.',
    code: 'https://github.com/Prabhudatta19/coding-contests-ext',
    image: '/project.png',
    live: 'https://github.com/Prabhudatta19/coding-contests-ext'
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
                      href={project.live}
                      target="_blank"
                      sx={{ height: '100%' }}
                    >
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ mb: 2 , color: 'primary.main'}}>
                          {project.title}
                        </Typography>
                        <CardMedia
                          component="img"
                          height="200"
                          image={project.image}
                          alt={project.title}
                          sx={{ borderRadius: 1 }}
                          ></CardMedia>
                        <Typography variant="body2" sx={{color: 'text.secondary', mt: 2}}>
                          {project.description}
                        </Typography>
                        <ButtonGroup variant="outlined" sx={{ mt: 2 }}>
                          <Button 
                            startIcon={<GitHub />}
                            href={project.code}
                            target="_blank"
                            sx={{ color: 'text.secondary', borderColor: 'rgba(255,255,255,0.1)' }}
                          >
                            Code
                          </Button>
                          <Button
                            startIcon={<Launch />}
                            href={project.live}
                            target="_blank"
                            sx={{ color: 'text.secondary', borderColor: 'rgba(255,255,255,0.1)' }}
                          >
                            Live
                          </Button>
                        </ButtonGroup>
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
