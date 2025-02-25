import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        backgroundColor: '#1F1B24',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" align="center" gutterBottom sx={{ color: '#F1F1F1' }}>
            Experience
          </Typography>
          <Timeline position="alternate" sx={{ mt: 4 }}>
            <TimelineItem>
            <TimelineOppositeContent
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right',
                minHeight: '100%',
                pr: 5,
              }}
            >
                <Box
                  component="img"
                  src="/Barclays.png" 
                  alt="Barclays Logo"
                  sx={{
                    width: '120px',
                    height: 'auto',
                    opacity: 0.8,
                  }}
                />
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ pl: 5 }}>
                <Typography variant="h5" sx={{ color: 'primary.main' }}>
                  Software Developer, Barclays
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                  Aug 2022 – Present
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', mt: 2, mb: 1 }}>
                  Cards Journeys
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  - Full Stack Developer on Barclays UK’s multi-channel credit card application platform and cards servicing channels<br />
                  - IVR flows for Barclaycard Customer Experience
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', mt: 2, mb: 1 }}>
                  Markets
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  - UI Development of Market Exposure Limit Management Portal<br />
                  - Backend services in Java & C# for Market Risk Management<br />
                </Typography>
              </TimelineContent>
            </TimelineItem>
            {/* Add more TimelineItem components as needed */}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Experience;
