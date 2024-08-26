import "../../components/AuthForm/AuthForm.css";
import logo from "../../assets/Icons/logo.png";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Login } from "./Login/Login";
import Register from "./Register/Register";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
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

export function AuthForm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="af-container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", color: "#ffffff" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab
              label="Login"
              {...a11yProps(0)}
              sx={{ fontWeight: "bold", color: "#ffffff" }}
            />
            <Tab
              label="Register"
              {...a11yProps(1)}
              sx={{ fontWeight: "bold", color: "#ffffff" }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Login />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Register />
        </CustomTabPanel>
      </Box>
    </section>
  );
}
