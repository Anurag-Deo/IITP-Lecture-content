import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import LooksThreeIcon from '@mui/icons-material/Looks3';
import LooksFourIcon from '@mui/icons-material/Looks4';
import LooksFiveIcon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';



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

export default function Assignment1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label={<LooksOneIcon/>} {...a11yProps(0)} />
          <Tab label={<LooksTwoIcon/>} {...a11yProps(1)} />
          <Tab label={<LooksThreeIcon/>} {...a11yProps(2)} />
          <Tab label={<LooksFourIcon/>} {...a11yProps(3)} />
          <Tab label={<LooksFiveIcon/>} {...a11yProps(4)} />
          <Tab label={<Looks6Icon/>} {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <iframe src="https://www.jdoodle.com/iembed/v0/ra6" width="100%" height="800px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <iframe src="https://www.jdoodle.com/iembed/v0/ra7" width="100%" height="800px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <iframe src="https://www.jdoodle.com/iembed/v0/ra8" width="100%" height="800px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={3}>
          <iframe src="https://www.jdoodle.com/iembed/v0/ra9" width="100%" height="800px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={4}>
          <iframe src="https://www.jdoodle.com/iembed/v0/raa" width="100%" height="800px"></iframe>
      </TabPanel>
      <TabPanel value={value} index={5}>
          <iframe src="https://www.jdoodle.com/iembed/v0/rab" width="100%" height="800px"></iframe>
      </TabPanel>
      
    </Box>
  );
}