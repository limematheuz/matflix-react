import "../../components/AuthForm/AuthForm.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Login } from "./Login/Login";
import Register from './Register/Register';

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
      <Box sx={{width:"100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs 
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Item One" {...a11yProps(0)}  />
            <Tab label="Item Two" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Login/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Register/>
        </CustomTabPanel>

      </Box>
    </section>
  );
}

// export function AuthForm() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };

//     return (
//       <Box sx={{ width: "100vw", height: "100vh", bgcolor: "#ccccc" }}>
//         <Tabs value={value} onChange={handleChange} centered>
//           <Tab label="Item One">
//             <Login />
//           </Tab>
//           <Tab label="Item Two">
//               <Login />
//           </Tab>
//         </Tabs>
//       </Box>
//     );
//   }
