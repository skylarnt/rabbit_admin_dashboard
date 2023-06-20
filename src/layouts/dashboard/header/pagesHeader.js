import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import "../../../Global.css";

import Iconify from "../../../components/iconify";
import bus from "../../../bus";
import { bgBlur } from '../../../utils/cssStyles';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 50;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
  pathName: PropTypes.string.isRequired,
};

export default function Header({ onOpenNav, pathName }) {
  const [pageHeader, setPageHeader] = useState("");
  const [pageText, setPageText] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [n, setN] = useState([]);

  useEffect(() => {
    const pathNameWithoutTrailingSlash = pathName.replace(/\/+$/, "");
    const pathNameWithoutParameter = pathNameWithoutTrailingSlash.replace(
      /\/\d+$/,
      ""
    );
    switch (pathNameWithoutParameter) {
      case "/dashboard/customers":
        setPageHeader("Customers");
        setPageText("Complete customer record and feedback log");

        break;
      case "/dashboard/wallets":
        setPageHeader("Wallet");
        setPageText("Manage all your cash transactions.");

        break;
      case "/dashboard/driver":
        setPageHeader("Drivers");
        setPageText("Add, assign and manage drivers here.");
        // setPageHeader("Drivers/Riders");
        // setPageText("Manage and assign your Drivers/Riders here.");

        break;
      case "/dashboard/vehicles":
        setPageHeader("Vehicles");
        setPageText("Share vehicle information and operational capacity");

        break;
      case "/dashboard/buses_bikes":
        setPageHeader("Vehicles");
        setPageText("Add Buses/Bikes to your list");

        break;
      case "/dashboard/route":
        setPageHeader("Routes");
        setPageText("View Details, manage and create new Routes");

        break;
      case "/dashboard/charter":
        setPageHeader("Charter");
        setPageText("Add new Vehicles, manage request and fleets");

        break;
      case "/dashboard/operations":
        setPageHeader("Operations");
        setPageText("View all operational activities");

        break;
      case "/dashboard/wallet":
        setPageHeader("Wallet");
        setPageText("Manage all your cash transactions");

        break;
      case "/dashboard/administrations":
        setPageHeader("Administration");
        setPageText("View all admin members and assign their roles");

        break;
      case "/dashboard/incremental_insight":
        setPageHeader("Incremental Insight");
        setPageText(
          "An overview of your business performance"
        );

        break;
      case "/dashboard/subscription":
        setPageHeader("Subscriptions");
        setPageText("");

        break;
      case "/dashboard/payment":
        setPageHeader("Payment method");
        setPageText("Update your billing details and address");

        break;
      case "/dashboard/profile":
        setPageHeader("Profile");
        setPageText("");

        break;
      case "/dashboard/settings":
        setPageHeader("Settings");
        setPageText("");
        break;
    }
  }, [pathName]);

  return (
    <StyledRoot className="pt-md-5 style_cs">
      <StyledToolbar className="px-0 style_c">
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: "text.primary",
            display: { lg: "none" },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <div className={` header d-none d-md-block`}>
          <h4 className={`mb-1 pb-0`}>{pageHeader}</h4>
          <p style={{ fontSize: "14px" }} className={`mb-0 pb-0`}>
            {pageText}
          </p>
        </div>

        <Box sx={{ flexGrow: 1 }} />

        {pathName === "/dashboard/administration" && (
          <button
            type="button"
            onClick={() => bus.emit("open-invite-modal")}
            className={`btn btn-lg btn_primary`}
          >
            <img src="/assets/icons/plus.svg" className="pr-1" alt="" />

            <span>Invite Admin</span>
          </button>
        )}

        {pathName === "/dashboard/driver" && (
          <div className="d-flex text-right">
            <button
              className={`export_btn pt-2 btn m-0 mx-3`}
              onClick={() => bus.emit("open-driverinfo-modal")}
              style={{
                verticalAlign: "middle",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                <img src="/assets/icons/plus.svg" className="mr-1" alt="" />
                Add Driver
              </span>
            </button>
            <button
              className="btn border"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #D0D5DD",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              <small className="d-md-inline-block">Import CSV File</small>
            </button>
          </div>
        )}

        {pathName === "/dashboard/vehicles" && (
          <div className="d-flex text-right">
            <button
              className={`export_btn pt-2 btn m-0 mx-3`}
              onClick={() => bus.emit("open-addvehicle-modal")}
              style={{
                verticalAlign: "middle",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                <img src="/assets/icons/plus.svg" className="mr-1" alt="" />
                Add Vehicle
              </span>
            </button>
            <button
              className="btn border"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #D0D5DD",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              <small className="d-md-inline-block">Import CSV File</small>
            </button>
          </div>
        )}

        {pathName === "/dashboard/buses_bikes" && (
          <div className="d-flex text-right">
            <button
              className={`export_btn pt-2 btn m-0 mx-3`}
              onClick={() => bus.emit("open-addbus-modal")}
              style={{
                verticalAlign: "middle",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                <img src="/assets/icons/plus.svg" className="mr-1" alt="" />
                Add Bus
              </span>
            </button>
            <button
              className={`export_btn pt-2 btn m-0 mx-3`}
              onClick={() => bus.emit("open-addbike-modal")}
              style={{
                verticalAlign: "middle",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                <img src="/assets/icons/plus.svg" className="mr-1" alt="" />
                Add Bike
              </span>
            </button>
            <button
              className="btn border"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #D0D5DD",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              <small className="d-md-inline-block">Import CSV File</small>
            </button>
          </div>
        )}

        {pathName === "/dashboard/route" && (
          <div className="d-flex text-right">
            <button
              className={`export_btn pt-2 btn m-0 mx-3`}
              onClick={() => bus.emit("open-createroute-modal")}
              style={{
                verticalAlign: "middle",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                <img src="/assets/icons/plus.svg" className="mr-1" alt="" />
                Create Route
              </span>
            </button>
            <button
              className="btn border"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #D0D5DD",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              <small className="d-md-inline-block">Import CSV File</small>
            </button>
          </div>
        )}

        {pathName === "/dashboard/charter" && (
          <div className="d-flex text-right">
            <button
              className={`export_btn pt-2 btn m-0 mx-3`}
              onClick={() => bus.emit("open-charter-modal")}
              style={{
                verticalAlign: "middle",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                <img src="/assets/icons/plus.svg" className="mr-1" alt="" />
                Add Vehicles
              </span>
            </button>
            <button
              className="btn border"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #D0D5DD",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              <small className="d-md-inline-block">Import CSV File</small>
            </button>
          </div>
        )}

        {pathName === "/dashboard/wallet" && (
          <div className="d-flex text-right">
            <button
              className={`export_btn pt-2 btn m-0 mx-3 rounded`}
              onClick={() => bus.emit("open-topup-modal")}
              style={{
                verticalAlign: "middle",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                <img src="/assets/icons/plus.svg" className="mr-1" alt="" />
                Top Up
              </span>
            </button>
            
            <button
              onClick={() => bus.emit("open-withdraw-modal")}
              className="btn border px-4"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #D0D5DD",
                boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                borderRadius: "4px",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                Withdraw
              </span>
            </button>
          </div>
        )}

        {pathName === "/dashboard/administrations" && (
          <div className="d-flex text-right">
            <button
              className={`export_btn pt-2 btn m-0 rounded`}
              onClick={() => bus.emit("open-invite-modal")}
              style={{
                verticalAlign: "middle",
              }}
            >
              <span style={{ verticalAlign: "middle" }}>
                <img src="/assets/icons/plus.svg" className="mr-1" alt="" />
                Invite Admin
              </span>
            </button>
          </div>
        )}
      </StyledToolbar>
    </StyledRoot>
  );
}
