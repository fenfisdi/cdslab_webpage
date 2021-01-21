import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ItemLink, Menu } from '../SideNav/styles'
import { MainContainer } from './styles'
import Header from '../Header'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainContainer>
      <Header />
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <ItemLink to='/simulations'>
          <Tab label="Simulations" {...a11yProps(0)} />
        </ItemLink>
        <ItemLink to='/population_settings'>
          <Tab label="Population Settings" {...a11yProps(1)} />
        </ItemLink>
        <ItemLink to='/infection_diseases_states'>
          <Tab label="Infection and diseases states" {...a11yProps(2)} />
        </ItemLink>
        <ItemLink to='/states_transitions'>
          <Tab label="States transitions" {...a11yProps(3)} />
        </ItemLink>
        <ItemLink to='/risks_settings'>
          <Tab label="Risks settings" {...a11yProps(4)} />
        </ItemLink>

      </Tabs>
      <TabPanel value={value} index={value}>
        { children }
      </TabPanel>

    </div>
    </MainContainer>
  );
}
