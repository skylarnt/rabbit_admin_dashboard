import { Helmet } from "react-helmet-async";
import styles from "./Charter.module.css";
import React from "react";
import AvailableBuses from "./components/AvailableBuses";
import CharterRequest from "./components/CharterRequest";
import { useEffect, useState } from "react";
import bus from "src/bus";
// import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

// ----------------------------------------------------------------------

// import { useLayoutEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// import GlobalModal from "src/Modals/GlobalModal";
// import TextField from '@mui/material/TextField';
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
// import {
// useParams,
// useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  minHeight: 250,
  overflow: "hidden",
  bgcolor: "#F5F5F5",
  border: "1px solid #F5F5F5",
  borderRadius: "5px",
  boxShadow: 24,
  p: 3,
};

// ----------------------------------------------------------------------

export default function CharterPage() {
  const [value, setValue] = React.useState("1");
  const [addVehicles, setaddVehicles] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCloseAddVehicles = () => {
    setaddVehicles(false);
  };

  useEffect(() => {
    bus.on("open-modal", () => {
      setaddVehicles(true);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title> Routes </title>
      </Helmet>

      <div className="wrapper">
        <div className="header d-block d-md-none mb-4 mt-2 pt-3">
          <div
            className={`${styles.product_actions} d-md-flex justify-content-between`}
          >
            <div className=" ">
              <h4 className={`mb-0 pb-0`}>Charter</h4>
              <p style={{ fontSize: "14px" }} className={`mb-0 mt-2 pb-0`}>
              Add new Vehicles, manage request and fleets
              </p>
            </div>
          </div>
        </div>
        <Box
          style={{ padding: "0" }}
          className="aa"
          sx={{ width: "100%", typography: "body1" }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList aria-label="lab API tabs" onChange={handleChange}>
                <Tab label="Available Buses" value="1" />
                <Tab label="Charter Request" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" style={{ paddingLeft: "0" }}>
              <AvailableBuses />
            </TabPanel>
            <TabPanel value="2" style={{ paddingLeft: "0" }}>
              <CharterRequest />
            </TabPanel>
          </TabContext>
        </Box>
      </div>

      {/* Add Vehicles Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={addVehicles}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEnforceFocus
      >
        <Fade in={addVehicles}>
          <Box sx={style} className={`mobile_modal_size bg-white`}>
            <div
              className={`modal_content bg-transparent`}
              style={{ overflowY: "scroll", height: "28em" }}
            >
              <div className={`modal_header mb-0`}>
                <h5
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                  }}
                >
                  Choose Vehicle
                </h5>
                <span
                  onClick={handleCloseAddVehicles}
                  style={{ cursor: "pointer" }}
                >
                  <img src="/assets/icons/x.svg" alt="" />
                </span>
              </div>
              <p
                className=" mt-0"
                style={{
                  fontSize: "14px",
                }}
              >
                <span className="m-0 d-block text-muted font-weight-normal">
                  Place your vehicles for charter
                </span>
                {/* <small className="m-0 d-block">Bus 001</small> */}
              </p>

              <div className="mb-3">
                <label htmlFor="name">Available Vehicles</label>
                <Select
                  labelId="s"
                  id="s"
                  fullWidth
                  size="small"
                  required
                  name="verified"
                  // defaultValue='select'
                >
                  <MenuItem value="select">
                    <div className=" ">
                      <strong>Bus 001</strong>
                      <p className="text-muted" style={{ fontSize: "13px" }}>
                        Toyota Hiace
                      </p>
                    </div>
                  </MenuItem>

                  <MenuItem value="select">
                    <div className=" ">
                      <strong>Bus 001</strong>
                      <p className="text-muted" style={{ fontSize: "13px" }}>
                        Toyota Hiace
                      </p>
                    </div>
                  </MenuItem>

                  <MenuItem value="select">
                    <div className=" ">
                      <strong>Bus 001</strong>
                      <p className="text-muted" style={{ fontSize: "13px" }}>
                        Toyota Hiace
                      </p>
                    </div>
                  </MenuItem>

                  <MenuItem value="select">
                    <div className=" ">
                      <strong>Bus 001</strong>
                      <p className="text-muted" style={{ fontSize: "13px" }}>
                        Toyota Hiace
                      </p>
                    </div>
                  </MenuItem>
                </Select>
              </div>

              <div className="d-block w-100" style={{marginTop: '13em'}}>
                <button
                  className=" d-block w-100 btn py-2 text-white"
                  onClick={handleCloseAddVehicles}
                  style={{ background: "#00AF52" }}
                >
                  Add
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>

    </>
  );
}
