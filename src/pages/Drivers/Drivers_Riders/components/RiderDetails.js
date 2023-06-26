

// ----------------------------------------------------------------------
import styles from "../Drivers_RidersComponent.module.css"
import {
  // useEffect, 
  useState
} from "react"
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import Modal from '@mui/material/Modal';
// import Backdrop from '@mui/material/Backdrop';
// import Fade from '@mui/material/Fade';
// import Box from '@mui/material/Box';

import {
  Card,
  //   Avatar,
} from '@mui/material';
import Scrollbar from '../../../../components/scrollbar';
// sections
// mock
import GlobalModal from "src/Modals/GlobalModal";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// ----------------------------------------------------------------------


export default function RidersDetails() {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [addDriverModalOpen, setAddDriverModalOpen] = useState(false);

  const handleCloseViewFilter = () => {
    setFilterModalOpen(false);
  };

  const handleCloseAddDriver = () => {
    setAddDriverModalOpen(!addDriverModalOpen);
  };




  return (
    <>
      <div className="px-0 px-md-2">

        <div className={`${styles.filters} mt-4`}>
          <div className="row">
            <div className={`${styles.hold_input} col-6   `}>
              <img src="/assets/icons/search.svg" alt="" />
              <input type="text" name="search" placeholder="Search" style={{ textIndent: '25px', width: '240px' }} className=" form-control" />

            </div>
            <div className="col-6  text-right">
              <button
                onClick={() => setFilterModalOpen(true)}
                className="btn  border"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #D0D5DD',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                  borderRadius: '4px'
                }}>
                <img className="" style={{ display: 'inline', width: '28%' }} src="/assets/icons/filterlines.svg" alt="" />
                &nbsp;
                <small className="d-none d-md-inline-block">
                  Filters
                </small>
              </button>

            </div>

          </div>
        </div>
        <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>
          <div className='p-4 border-bottom'>

            <div className="d-md-flex justify-content-between" >
              <div className="pb-3 pb-md-0">
                <h5 className="table_desc_header">
                  All Riders
                </h5>
                <small style={{ fontWeight: '200', fontSize: '14px' }}>
                  These are all your Riders
                </small>

              </div>
              <div className="pt-md-2">
                <div className="dropleft ">
                  <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} pt-2 btn m-0`}>
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
            <div className={`${styles.overflow_table} table-responsive  pt-3 pb-3 pl-0 pr-0`}  >
              <table className={`${styles.table} table-hover table-striped`} style={{ minWidth: '90em' }}>
                <thead className={`${styles.thead}`}>
                  <tr>
                    <th className="text-muted" style={{ width: "16%" }}>
                      Riders Name
                      <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                    </th>
                    <th className="text-muted">
                      Phone Number
                    </th>
                    <th className="text-muted">
                      Email Address
                    </th>
                    <th className="text-muted">
                      Bus ID
                      <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                    </th>
                    <th className="text-muted">
                      Routes
                    </th>
                    <th className="text-muted">
                      Driver Address
                    </th>
                    <th className="text-muted">
                      Date
                    </th>
                    <th className="text-muted">
                      Completed Deliveries
                    </th>
                    <th className="text-muted">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                        </div>
                        &nbsp;
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>
                    <td>
                      <span>
                        (603) 555-0123
                      </span>
                    </td>
                    <td>
                      <span>
                        example@gmail.com
                      </span>
                    </td>

                    <td>
                      <p>
                        {/* No Assign Bus */}
                        Nil
                      </p>
                    </td>
                    <td>
                      Nil
                    </td>
                    <td>
                      <span>76, Sukami Adekule street, Yaba, Lagos Nigeria</span>
                    </td>
                    <td>
                      <span>
                        12/10/23
                      </span>
                    </td>
                    <td className="text-center">
                      <span>
                        20
                      </span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button} px-3 py-2`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0" onClick={() => setAddDriverModalOpen(true)} >View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                        </div>
                        &nbsp;
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>
                    <td>
                      <span>
                        (603) 555-0123
                      </span>
                    </td>
                    <td>
                      <span>
                        example@gmail.com
                      </span>
                    </td>

                    <td>
                      <p className="m-0 font-weight-bold">001</p>
                      <p className="m-0"><small className="font-weight-normal text-muted">Qlink Legend 250</small></p>
                    </td>
                    <td>
                      <span style={{ fontSize: '13px' }}>
                        VI (Eko Hotel)
                      </span>
                    </td>
                    <td>
                      <span>76, Sukami Adekule street, Yaba, Lagos Nigeria</span>
                    </td>
                    <td>
                      <span>
                        12/10/23
                      </span>
                    </td>
                    <td className="text-center">
                      <span>
                        20
                      </span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button} px-3 py-2`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0">Edit</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                        </div>
                        &nbsp;
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>
                    <td>
                      <span>
                        (603) 555-0123
                      </span>
                    </td>
                    <td>
                      <span>
                        example@gmail.com
                      </span>
                    </td>

                    <td>
                      <p className="m-0 font-weight-bold">001</p>
                      <p className="m-0"><small className="font-weight-normal text-muted">Sinoki Supra</small></p>
                    </td>
                    <td>
                      <span style={{ fontSize: '13px' }}>
                        VI (Eko Hotel)
                      </span>
                    </td>
                    <td>
                      <span>76, Sukami Adekule street, Yaba, Lagos Nigeria</span>
                    </td>
                    <td>
                      <span>
                        12/10/23
                      </span>
                    </td>
                    <td className="text-center">
                      <span>
                        20
                      </span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button} px-3 py-2`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0">Edit</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                        </div>
                        &nbsp;
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>
                    <td>
                      <span>
                        (603) 555-0123
                      </span>
                    </td>
                    <td>
                      <span>
                        example@gmail.com
                      </span>
                    </td>

                    <td>
                      <p className="m-0 font-weight-bold">001</p>
                      <p className="m-0"><small className="font-weight-normal text-muted">Qlink Legend 250</small></p>
                    </td>
                    <td>
                      <span style={{ fontSize: '13px' }}>
                        VI (Eko Hotel)
                      </span>
                    </td>
                    <td>
                      <span>76, Sukami Adekule street, Yaba, Lagos Nigeria</span>
                    </td>
                    <td>
                      <span>
                        12/10/23
                      </span>
                    </td>
                    <td className="text-center">
                      <span>
                        20
                      </span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button} px-3 py-2`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0">Edit</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                        </div>
                        &nbsp;
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>
                    <td>
                      <span>
                        (603) 555-0123
                      </span>
                    </td>
                    <td>
                      <span>
                        example@gmail.com
                      </span>
                    </td>

                    <td>
                      <p className="m-0 font-weight-bold">001</p>
                      <p className="m-0"><small className="font-weight-normal text-muted">Sinoki Supra</small></p>
                    </td>
                    <td>
                      <span style={{ fontSize: '13px' }}>
                        VI (Eko Hotel)
                      </span>
                    </td>
                    <td>
                      <span>76, Sukami Adekule street, Yaba, Lagos Nigeria</span>
                    </td>
                    <td>
                      <span>
                        12/10/23
                      </span>
                    </td>
                    <td className="text-center">
                      <span>
                        20
                      </span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button} px-3 py-2`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0">Edit</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                        </div>
                        &nbsp;
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '14px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>
                    <td>
                      <span>
                        (603) 555-0123
                      </span>
                    </td>
                    <td>
                      <span>
                        example@gmail.com
                      </span>
                    </td>

                    <td>
                      <p className="m-0 font-weight-bold">001</p>
                      <p className="m-0"><small className="font-weight-normal text-muted">Qlink Legend 250</small></p>
                    </td>
                    <td>
                      <span style={{ fontSize: '13px' }}>
                        VI (Eko Hotel)
                      </span>
                    </td>
                    <td>
                      <span>76, Sukami Adekule street, Yaba, Lagos Nigeria</span>
                    </td>
                    <td>
                      <span>
                        12/10/23
                      </span>
                    </td>
                    <td className="text-center">
                      <span>
                        20
                      </span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button} px-3 py-2`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" className="rss dropdown-item btn border-0">Edit</button>
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
                <div className="d-flex align-item-center pt-2">
                  Page 1 of <b className="pl-1"> 10</b>
                </div>
                <div className={`${styles.pagination_button_container}`}>
                  <button className="btn" >Previous</button>
                  &nbsp;
                  &nbsp;
                  <button className="btn" >Next</button>
                </div>
              </div>


            </div>
          </div>

        </Card>
      </div>


      {/* Driver info Modal */}
      <GlobalModal
        open={addDriverModalOpen}
        onClose={handleCloseAddDriver}
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        width='540px !important'
        overflowY='scroll'
        bgcolor='#FFFF'
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

            }}>Rider Info</h5>

            <span onClick={handleCloseAddDriver} style={{ cursor: 'pointer' }}>
              <img src="/assets/icons/x.svg" alt="" />

            </span>
          </div>

          <p className="text-muted mb-4 mt-0" style={{ fontSize: '13px' }}>Details of Rider</p>

          {/* className={`${styles.retailer_modal_product_img}`} style={{
                  // backgroundImage: `url('${url}')`,
                  width:"15%",
                  height:"100px"
              }} */}
          <form action="" className="mt-0">
            <div className="row">
              <div className="col-sm-4" >

                <label htmlFor="loc" className="mt-0">Rider's Photo* </label>

                <input type="file" hidden name="" />
                <div className={`${styles.retailer_modal_product_img} border rounded`} style={{
                  // backgroundImage: `url('${url}')`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // flexDirection: 'column',
                  width: "90px",
                  height: "80px",
                  border: '1px solid #ddd',
                }} >
                  <div style={{ cursor: 'pointer', display: 'inline-block', backgroundColor: 'white' }}
                  // onClick={() => handleButtonClick()}
                  >
                    <img
                      className={`${styles.retailer_product_image} ${styles.rounded_border}`}
                      src="/assets/illustrations/illustration_avatar.png"
                      alt=""
                    />
                    {/* <p className="mb-0 text-center text-info" style={{ fontSize: '10px' }} >Click to upload</p> */}

                  </div>
                </div>
              </div>
              <div className="col-sm-4" >
                <label htmlFor="loc" className="mt-0">Bike</label>
                <p className="m-0 font-weight-bold">001</p>
                <p className="m-0"><small className="font-weight-normal text-muted">Qlink Supra 250</small></p>
                <p className="m-0"><small className="font-weight-normal " style={{color: '#00AF52'}}>IKD-123AB</small></p>
              </div>
              <div className="col-sm-4" >
              <label htmlFor="loc" className="mt-0">Route</label>
              <p className="m-0 font-weight-bold">Lagos</p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 mb-1">
                <div className="mb-3">
                  <label htmlFor="loc">Rider's Name</label>
                  <TextField
                    type='text'
                    id="loc"
                    size="small"
                    readonly
                    fullWidth
                    disabled
                    placeholder="Benedict James"
                  />


                </div>
                <div className="mb-3">
                  <label htmlFor="loc">Email Address</label>
                  <TextField
                    type='email'
                    readonly

                    id="loc"
                    size="small"
                    fullWidth
                    disabled
                    placeholder="shorite@gmail.com"

                  />


                </div>

                <div className="mb-3">
                  <label htmlFor="loc">Phone Number</label>
                  <TextField
                    readonly
                    type='tel'
                    id="loc"
                    size="small"
                    fullWidth
                    disabled
                    placeholder="+2348400000000"

                  />


                </div>

                <div className="mb-3">
                  <label htmlFor="loc">Address</label>
                  <TextField
                    readonly
                    type='tel'
                    id="loc"
                    size="small"
                    fullWidth
                    disabled
                    placeholder="Tejuosho Rd, Yaba 101241, Lagos"

                  />


                </div>

              </div>
            </div>
            <div className="mb-4">
              <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                Save
              </button>


            </div>

          </form>


        </div>
      </GlobalModal>


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

                <label htmlFor="ounit">Location</label>
                <div className=" ">
                  <div className="" style={{ width: '100%' }}>
                    <div className="mb-3">
                      <TextField
                        name="min_products"
                        fullWidth
                        required
                        type='text'
                        id="ounit"
                        placeholder="Enter Location"
                        size="small"

                      />
                    </div>

                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="name">Route</label>
                  <Select
                    labelId="s"
                    id="s"
                    fullWidth
                    size="small"
                    required
                    name="verified"
                    defaultValue='select'
                  >

                    <MenuItem value='select'>Enter Location</MenuItem>
                    <MenuItem value='14'>Sabo - Yaba</MenuItem>
                    <MenuItem value='18'>Lekki - Ajah</MenuItem>
                    <MenuItem value='22'>Oshodi - Eko Hotel</MenuItem>
                  </Select>
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

                <label htmlFor="ounit">Completed Logistics</label>
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
            <div className="mb-4">
              <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                Proceed
              </button>
            </div>
          </form>
        </div>


      </GlobalModal>

    </>
  );
}