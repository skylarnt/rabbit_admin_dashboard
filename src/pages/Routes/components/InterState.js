

// ----------------------------------------------------------------------
import styles from "../RoutesComponent.module.css"
import {
  // useEffect, 
  useState
} from "react"
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Card,
  //   Avatar,
} from '@mui/material';
import Scrollbar from '../../../components/scrollbar';
// sections
// mock
import GlobalModal from "src/Modals/GlobalModal";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// ----------------------------------------------------------------------


const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  overflowY: 'auto',
  bgcolor: '#F5F5F5',
  border: '1px solid #F5F5F5',
  borderRadius: '5px',
  boxShadow: 24,
  p: 5,
};

export default function InterStatePage() {
  // eslint-disable-next-line no-unused-vars
  const [editRoute, seteditRoute] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleCloseViewFilter = () => {
    setFilterModalOpen(false);
  };

  const handleCloseEditRoute = () => {
    seteditRoute(false);
  };



  return (
    <>
      <div className=" px-0 px-md-2">

        <div className={`${styles.filters} mt-4`}>
          <div
            className="d-flex justify-content-between"
            style={{ gap: "10px" }}
          >
            <div className={`${styles.hold_input}  `}>
              <img src="/assets/icons/search.svg" alt="" />
              <input
                type="text"
                name="search"
                placeholder="Search"
                style={{ textIndent: "25px", width: "240px" }}
                className=" form-control"
              />
            </div>
            <div className="text-right">
              <button
                onClick={() => setFilterModalOpen(true)}
                className="btn  border"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #D0D5DD",
                  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                  borderRadius: "4px",
                  height: "40px",
                }}
              >
                <img
                  className=""
                  style={{ display: "inline", width: "20px" }}
                  src="/assets/icons/filterlines.svg"
                  alt=""
                />
                &nbsp;
                <small className="d-none d-md-inline-block">Filters</small>
              </button>
            </div>
          </div>
        </div>
        <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>
          <div className='p-4 border-bottom'>

            <div className="d-md-flex justify-content-between" >
              <div className="pb-3 pb-md-0">
                <h5 className="table_desc_header mb-2">
                  All Routes
                </h5>
                <small style={{ fontWeight: 'normal', fontSize: '14px' }}>
                  Create time slots, assign drivers and set prices
                </small>

              </div>
              <div className="pt-md-2">
                <div className="dropleft ">
                  <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} pt-2 btn m-0 ml-auto`}>
                    <span style={{
                      paddingTop: '8px',
                    }}>
                      <img src="/assets/icons/download.svg" alt="" /> &nbsp;
                      Export
                    </span>
                    {/* &nbsp;
                    &nbsp;
                    <span style={{
                        borderLeft: '1px solid white',
                        display: 'inline-block',
                        height: 'inherit',
                        paddingTop: '8px',
                        paddingLeft: '8px',
                        textAlign: 'center',

                    }}>
                        <img src="/assets/icons/arrowDown.svg" alt="" />

                    </span> */}


                  </button>

                  <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                    <button type="button" className="rss dropdown-item btn border-0">CSV</button>
                    <button type="button" className="rss dropdown-item btn border-0">Excel </button>
                    <button type="button" className="rss dropdown-item btn border-0">PDF </button>
                  </div>
                </div>


              </div>

            </div>

          </div>
          <Scrollbar>
            <div className={`${styles.overflow_table} table-responsive pb-3 pl-0 pr-0`}  >
              <table className={`${styles.table} table-hover table-striped`}>
                <thead className={`${styles.thead}`}>
                  <tr>
                    <th className="text-muted" style={{ width: "16%" }}>
                      Routes
                      <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                    </th>
                    <th className="text-muted text-center">
                      No of Assigned Drivers
                    </th>
                    <th className="text-muted">
                      Date
                    </th>
                    <th className="text-muted text-center">
                      Completed Trips
                    </th>
                    <th className="text-muted">
                      Charge
                    </th>
                    <th className="text-muted">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>

                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '8em' }}>
                        <div className=" ">
                          <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                            Sabo Yaba
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            VI (Eko Hotel)
                          </span>

                        </div>
                        &nbsp;
                        &nbsp;
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/icons/to-fro.png" alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="text-center">
                      <span className="">
                        4
                      </span>
                    </td>
                    <td>
                      <span>12/10/23</span>
                    </td>
                    <td className="text-center">
                      <span>
                        16
                      </span>

                    </td>
                    <td>
                      <span>₦1000</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0" onClick={() => seteditRoute(true)}>Edit</button>
                          <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                        </div>
                      </div>
                    </td>

                  </tr>

                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '8em' }}>
                        <div className=" ">
                          <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                            Sabo Yaba
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            VI (Eko Hotel)
                          </span>

                        </div>
                        &nbsp;
                        &nbsp;
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/icons/to-fro.png" alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="text-center">
                      <span className="">
                        3
                      </span>
                    </td>
                    <td>
                      <span>12/10/23</span>
                    </td>
                    <td className="text-center">
                      <span>
                        16
                      </span>

                    </td>
                    <td>
                      <span>₦1000</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0" onClick={() => seteditRoute(true)}>Edit</button>
                          <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                        </div>
                      </div>
                    </td>

                  </tr>

                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '8em' }}>
                        <div className=" ">
                          <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                            Sabo Yaba
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            VI (Eko Hotel)
                          </span>

                        </div>
                        &nbsp;
                        &nbsp;
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/icons/to-fro.png" alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="text-center">
                      <span className="">
                        4
                      </span>
                    </td>
                    <td>
                      <span>12/10/23</span>
                    </td>
                    <td className="text-center">
                      <span>
                        16
                      </span>

                    </td>
                    <td>
                      <span>₦1000</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0" onClick={() => seteditRoute(true)}>Edit</button>
                          <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                        </div>
                      </div>
                    </td>

                  </tr>

                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '8em' }}>
                        <div className=" ">
                          <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                            Sabo Yaba
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            VI (Eko Hotel)
                          </span>

                        </div>
                        &nbsp;
                        &nbsp;
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/icons/to-fro.png" alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="text-center">
                      <span className="">
                        2
                      </span>
                    </td>
                    <td>
                      <span>12/10/23</span>
                    </td>
                    <td className="text-center">
                      <span>
                        16
                      </span>

                    </td>
                    <td>
                      <span>₦1000</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0" onClick={() => seteditRoute(true)}>Edit</button>
                          <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                        </div>
                      </div>
                    </td>

                  </tr>

                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '8em' }}>
                        <div className=" ">
                          <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                            Sabo Yaba
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            VI (Eko Hotel)
                          </span>

                        </div>
                        &nbsp;
                        &nbsp;
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/icons/to-fro.png" alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="text-center">
                      <span className="">
                        1
                      </span>
                    </td>
                    <td>
                      <span>12/10/23</span>
                    </td>
                    <td className="text-center">
                      <span>
                        16
                      </span>

                    </td>
                    <td>
                      <span>₦1000</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0" onClick={() => seteditRoute(true)}>Edit</button>
                          <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                        </div>
                      </div>
                    </td>

                  </tr>

                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '8em' }}>
                        <div className=" ">
                          <p className="mb-0 font-weight-bold" style={{ fontSize: '14px' }}>
                            Sabo Yaba
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            VI (Eko Hotel)
                          </span>

                        </div>
                        &nbsp;
                        &nbsp;
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/icons/to-fro.png" alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="text-center">
                      <span className="">
                        4
                      </span>
                    </td>
                    <td>
                      <span>12/10/23</span>
                    </td>
                    <td className="text-center">
                      <span>
                        16
                      </span>

                    </td>
                    <td>
                      <span>₦1000</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="py-2 px-3" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0" onClick={() => seteditRoute(true)}>Edit</button>
                          <button type="button" className="rss dropdown-item btn border-0 text-danger">Remove</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                </tbody>

              </table>

            </div>
            {/* <div className="d-flex justify-content-center">

            </div> */}

            {/* <div className="alert alert-primary text-center">
                <h4>No record found</h4>
              </div> */}

          </Scrollbar>
          <div className="card border-0 p-0 m-0">
            <div className="card-body pt-0 mt-0">
              <div className="d-flex justify-content-between">
                <div className=" pt-2">
                  Page 1 of <b className="pl-1"> 10</b>
                </div>
                <div className={`${styles.pagination_button_container}`}>
                  <button className="btn border" >
                    <span className="d-none d-sm-block">
                      Previous
                    </span>
                    <span>
                      <i className="bi bi-chevron-left d-block d-sm-none"></i>
                    </span>
                  </button>
                  &nbsp;
                  &nbsp;
                  <button className="btn border" >
                    <span className="d-none d-sm-block">
                      Next
                    </span>
                    <span>
                      <i className="bi bi-chevron-right d-block d-sm-none"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </Card>
      </div>


      {/* Fiter Modal */}
      <GlobalModal
        open={filterModalOpen}
        onClose={handleCloseViewFilter}
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        width='740px !important'
        overflowY='scroll'
        bgcolor='#FFFFFF'
        border='1px solid #F5F5F5'
        borderRadius='5px'
        boxShadow='24'
        p='25px'
      >
        <div className={`${styles.modal_content}`}>
          <div className={`${styles.modal_header} mb-0`}>
            <h5 style={{
              fontSize: '19px',
              fontWeight: '700',

            }}>Filter</h5>
            <span onClick={handleCloseViewFilter} style={{ cursor: 'pointer' }}>
              <img src="/assets/icons/x.svg" alt="" />

            </span>

          </div>


          <form action="" className="mt-3">
            <div className="row">
              <div className="col-md-6 mb-1">
                {/* <div className="mb-3">
                  <label htmlFor="name">Location</label>
                  <div>
                    <TextField
                      name="min_products"
                      required
                      type='number'
                      id="ounit"
                      placeholder="Enter Location"
                      size="small"
                      style={{ width: '100%' }}

                    />
                  </div>
                </div> */}
                <div className="mb-3">
                  <label htmlFor="name">No of seat</label>
                  <Select
                    labelId="s"
                    id="s"
                    fullWidth
                    size="small"
                    required
                    name="verified"
                    defaultValue='select'
                  >

                    <MenuItem value='select'>Enter Route</MenuItem>
                    <MenuItem value='14'>Sabo - Yaba</MenuItem>
                    <MenuItem value='18'>Lekki - Ajah</MenuItem>
                    <MenuItem value='22'>Oshodi - Eko Hotel</MenuItem>
                  </Select>
                </div>

                <label htmlFor="ounit">Completed Trips</label>
                <div className=" d-flex">
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <TextField
                        name="min_products"
                        required
                        type='number'
                        id="ounit"
                        placeholder="Min"
                        size="small"

                      />


                    </div>

                  </div>
                  <div className="px-1 d-flex   align-items-center " style={{ height: '40px' }}>
                    <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                  </div>
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <TextField
                        required
                        name="max_products"
                        type='number'
                        placeholder="Max "
                        size="small"

                      />


                    </div>

                  </div>

                </div>


              </div>
              <div className="col-md-6 mb-1">
                <label htmlFor="ounit">Date</label>

                <div className=" d-flex">
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <DatePicker
                        showIcon
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                        placeholderText="Start"
                        required
                      />


                    </div>

                  </div>
                  <div className="px-1 d-flex   align-items-center " style={{ height: '40px' }}>
                    <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                  </div>
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <DatePicker
                        showIcon
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                        placeholderText="End"
                        required
                      />


                    </div>

                  </div>

                </div>
                {/* <label htmlFor="ounit">Amount</label>

                <div className=" d-flex">
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <TextField
                        required
                        name="min_balance"
                        type='number'
                        id="ounit"
                        placeholder="Min"
                        size="small"

                      />


                    </div>

                  </div>
                  <div className="px-1 d-flex   align-items-center " style={{ height: '40px' }}>
                    <img src="/assets/icons/line.svg" style={{ width: '30px' }} alt="" />
                  </div>
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <TextField
                        required
                        type='number'
                        name="max_balance"
                        placeholder="Max "
                        size="small"

                      />


                    </div>

                  </div>

                </div> */}

              </div>
            </div>
            <div className="mt-4">
              <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                Proceed
              </button>
            </div>
          </form>
        </div>


      </GlobalModal>


      {/* Edit Route Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={editRoute}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableEnforceFocus
        style={{ maxWidth: '100%' }}
      >
        <Fade in={editRoute} style={{ maxWidth: '95%' }}>
          <Box sx={style2} className={`mobile_modal_size bg-white p-3 p-md-5`} style={{ maxWidth: '95%' }}>
            <div className={`modal_content bg-transparent`}
              style={{ overflowY: 'scroll', minHeight: '29em' }}
            >
              <div className={`modal_header mb-0`}>
                <h5 style={{
                  fontWeight: 'bold',
                  fontSize: '22px'
                }}>
                  Edit Route
                </h5>
                <span onClick={handleCloseEditRoute} style={{ cursor: 'pointer' }}>
                  <img src="/assets/icons/x.svg" alt="" />

                </span>

              </div>
              <p className=' mt-0' style={{
                fontSize: '14px'
              }}>
                <span className="m-0 d-block text-muted font-weight-normal">Details of route</span>
                {/* <small className="m-0 d-block">Bus 001</small> */}
              </p>

              <div className="mt-4 mb-2">
                <label htmlFor="drivers">Starting Point</label>
                <input type="text" placeholder="Sabo Yaba" style={{ width: '100%' }} className=" form-control" />
                {/* <p className='px-4 mt-2'><span>Imo State</span></p> */}
              </div>

              <div className="mt-3 mb-2">
                <label htmlFor="drivers">Destination</label>
                <input type="text" placeholder="VI (Eko Hotel)" style={{ width: '100%' }} className=" form-control" />
              </div>

              <div className="mt-3 mb-2">
                <label htmlFor="drivers">Charges</label>
                <div className={`${styles.charges_input}`}>
                  <span>$</span>
                  <input type="text" placeholder="" style={{ width: '100%', textIndent: '25px' }} className=" form-control" />
                  <div className={`${styles.select_wrap}`}>
                    <Select
                      labelId="s"
                      id="s"
                      size="small"
                      required
                      name="verified"
                      defaultValue='select'
                      style={{ width: 'fit-content' }}
                    >

                      <MenuItem value='select'>USD</MenuItem>
                      <MenuItem value='14'>NGN</MenuItem>
                      <MenuItem value='18'>NGN</MenuItem>
                      <MenuItem value='22'>NGN</MenuItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <div className='row'>
                  <div className='col-md-3'>
                    <label htmlFor="drivers" style={{ fontSize: '16px' }}>Assigned Drivers</label>

                    <div className="mb-3">
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                        <div className="initials">
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '80px' }} />
                        </div>
                        &nbsp;

                        <div className="w-100 ">
                          <span className="text-muted" style={{ fontSize: '13px' }}>
                            Bus 001(Toyota Hiace)
                          </span>
                          <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span className="text-muted" style={{ fontSize: '13px' }}>
                            243666
                          </span>
                        </div>
                        <span className='py-0 '>
                          <iconify-icon icon="octicon:chevron-down-24" width="20" style={{ lineHeight: '0', verticalAlign: 'middle' }}></iconify-icon>
                        </span>

                      </div>
                    </div>

                    {/* <div style={{color: '#00AF52'}}>
                      <p >
                        Assign Drivers
                        <span className='ml-5 py-0 px-3 btn' 
                        //
                        >
                          <iconify-icon icon="octicon:chevron-down-24" width="30" style={{lineHeight: '0', verticalAlign: 'middle'}}></iconify-icon>
                        </span>
                      </p>
                    </div> */}
                  </div>
                  <div className='col-md-6'>
                    <label htmlFor="drivers" style={{ fontSize: '16px' }}>Time Slot</label>
                    <div className={`${styles.accordion_wrap} mb-3`} >
                      <Accordion >
                        <AccordionSummary
                          className={`${styles.acc_summary}`}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <div className='d-flex justify-content-between w-100'>
                            <span>MONDAY</span> <span>TUESDAY</span><span>WEDNESDAY</span><span>THURSDAY</span>
                          </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className='d-flex justify-content-between w-100 pr-md-4'>
                            <div>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                            </div>
                            <div>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                            </div>
                            <div>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                            </div>
                            <div>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>

                    </div>
                    {/* <div className="row justify-content-between" style={{fontSize: '13px'}}>
                      <div className="col-6 col-lg-3">
                        <p>MONDAY</p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <p>TUESDAY</p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <p>WEDNESDAY</p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <p>THURSDAY</p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="drivers" className="d-block w-100 text-success" style={{ fontSize: '14px', textAlign: 'right', cursor: 'pointer' }}>
                      <iconify-icon icon="octicon:plus-24" width="20" style={{ lineHeight: '0', verticalAlign: 'middle' }}></iconify-icon>
                      Add Drivers
                    </label>

                    <div>
                      <p className="m-0 mb-2"><small style={{ color: '#00AF52', fontSize: '12px' }} className='btn px-2 py-0'>Add time</small></p>
                      <div style={{ width: '200px' }}>
                        <div className='slot_time_select d-flex justify-content-center' style={{ gap: '5px', alignItems: 'center', width: '100%' }}>
                          <span className='btn rounded' style={{ background: '#ccc' }}></span>
                          <span className=''>:</span>
                          <span className='btn rounded' style={{ background: '#ccc' }}></span>
                          <span className='btn rounded' style={{ background: '#ccc' }}></span>
                        </div>
                        <p className='mt-2'><button className='btn mx-auto d-block text-white py-0 px-4' style={{ background: '#00AF52', fontSize: '12px' }}>Add</button></p>
                      </div>
                    </div>
                  </div>



                  <div className='col-md-3'>

                    <div className="mb-3">
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}>
                        <div className="initials">
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                        </div>
                        &nbsp;
                        <div className=" ">
                          <span className="text-muted" style={{ fontSize: '13px' }}>
                            Bus 001(Toyota Hiace)
                          </span>
                          <p className="mb-0 text-dark" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span className="text-muted" style={{ fontSize: '13px' }}>
                            243666
                          </span>

                        </div>
                        <span className='py-0 '>
                          <iconify-icon icon="octicon:chevron-down-24" width="20" style={{ lineHeight: '0', verticalAlign: 'middle' }}></iconify-icon>
                        </span>

                      </div>
                    </div>

                    {/* <div style={{color: '#00AF52'}}>
                      <p >
                        Assign Drivers
                        <span className='ml-5 py-0 px-3 btn' 
                        //
                        >
                          <iconify-icon icon="octicon:chevron-down-24" width="30" style={{lineHeight: '0', verticalAlign: 'middle'}}></iconify-icon>
                        </span>
                      </p>
                    </div> */}
                  </div>
                  <div className='col-md-6'>
                    <div className={`${styles.accordion_wrap} mb-3`} >
                      <Accordion >
                        <AccordionSummary
                          className={`${styles.acc_summary}`}
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <div className='d-flex justify-content-between w-100'>
                            <span>MONDAY</span> <span>TUESDAY</span><span>WEDNESDAY</span><span>THURSDAY</span>
                          </div>
                        </AccordionSummary>
                        <AccordionDetails>
                          <div className='d-flex justify-content-between w-100 pr-md-4'>
                            <div>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                            </div>
                            <div>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                            </div>
                            <div>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                            </div>
                            <div>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                              <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                            </div>
                          </div>
                        </AccordionDetails>
                      </Accordion>

                    </div>
                    {/* <div className="row justify-content-between" style={{fontSize: '13px'}}>
                      <div className="col-6 col-lg-3">
                        <p>MONDAY</p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <p>TUESDAY</p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <p>WEDNESDAY</p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <p>THURSDAY</p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                        <p className="m-0 mb-2 pb-1"><span className="border rounded p-1 bg-light">6:00am &times;</span></p>
                      </div>
                    </div> */}
                  </div>
                  <div className="col-md-3">
                    <div>
                      <p className="m-0 mb-2"><small style={{ color: '#00AF52', fontSize: '12px' }} className='btn px-2 py-0'>Add time</small></p>
                      <div style={{ width: '200px' }}>
                        <div className='slot_time_select d-flex justify-content-center' style={{ gap: '5px', alignItems: 'center', width: '100%' }}>
                          <span className='btn rounded' style={{ background: '#ccc' }}></span>
                          <span className=''>:</span>
                          <span className='btn rounded' style={{ background: '#ccc' }}></span>
                          <span className='btn rounded' style={{ background: '#ccc' }}></span>
                        </div>
                        <p className='mt-2'><button className='btn mx-auto d-block text-white py-0 px-4' style={{ background: '#00AF52', fontSize: '12px' }}>Add</button></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-block w-100 mt-4 pt-3 pb-0 mb-0'><button className='d-block w-100 btn py-2 text-white pb-0 mb-0' onClick={handleCloseEditRoute} style={{ background: '#00AF52' }}>Save</button></div>

            </div>
          </Box>
        </Fade>
      </Modal>



    </>
  );
}
