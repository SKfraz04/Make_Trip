import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MdOutlineFlight, MdHolidayVillage } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { BiTrain } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";
import Flight from "./Flight";
import Hotel from "./Hotel";
import BookingForm from "./Train";
import BusBookingForm from "./Bus";
import UberForm from "./UberForm";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={<MdOutlineFlight />} {...a11yProps(0)} />
          <Tab label={<RiHotelLine />} {...a11yProps(1)} />
          <Tab label={<BiTrain />} {...a11yProps(2)} />
          <Tab label={<MdHolidayVillage />} {...a11yProps(3)} />
          <Tab label={<FaBusAlt />} {...a11yProps(4)} />
          <Tab label={<AiOutlineCar />} {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Flight />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Hotel />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <BookingForm />
      </TabPanel>{" "}
      <TabPanel value={value} index={3}>
        Item 5
      </TabPanel>{" "}
      <TabPanel value={value} index={4}>
      <BusBookingForm />
      </TabPanel>{" "}
      <TabPanel value={value} index={5}>
      <UberForm />
      </TabPanel>{" "}
    </Box>
  );
}
