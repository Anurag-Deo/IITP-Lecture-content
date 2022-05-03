import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DescriptionIcon from '@mui/icons-material/Description';
import Card from './Card'
import ImgMediaCard from './Card';
import CENotes from './CE102/CENotes';
import CETutorial from './CE102/CETutorial';
import CEVideos from './CE102/CEVideos';



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

export default function CE102() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Notes" {...a11yProps(0)} />
          <Tab label="Videos" {...a11yProps(1)} />
          <Tab label="Tutorials" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CENotes />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CEVideos />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CETutorial />
      </TabPanel>
    </Box>
  );
}