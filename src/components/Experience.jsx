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
      <Container maxWidth="md">
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
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h5" sx={{ color: 'primary.main' }}>
                  Graduate Analyst (BA4), Barclays
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                  Aug 2022 – Present
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  - UI Developer (Angular) for Limit Management Portal<br />
                  - Backend services in Java/C# for Risk Management<br />
                  - IVR flows for Barclaycard Customer Experience
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
