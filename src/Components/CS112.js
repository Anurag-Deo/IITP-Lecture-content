import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Assignment1 from './CS112/Assignment1';
import Assignment2 from './CS112/Assignment2';
import Assignment3 from './CS112/Assignment3';
import Assignment4 from './CS112/Assignment4';
import Assignment5 from './CS112/Assignment5';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CS112() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Assignment 1" {...a11yProps(0)} />
          <Tab label="Assignment 2" {...a11yProps(1)} />
          <Tab label="Assignment 3" {...a11yProps(2)} />
          <Tab label="Assignment 4" {...a11yProps(3)} />
          <Tab label="Assignment 5" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Assignment1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Assignment2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Assignment3 />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Assignment4 />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Assignment5 />
      </TabPanel>
      
    </Box>
  );
}