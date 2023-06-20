

// ----------------------------------------------------------------------
import styles from "../CustomerComponent.module.css"
import {
  // useEffect, 
  useState
} from "react"
import TextField from '@mui/material/TextField';


import {
  Card,
  //   Avatar,
} from '@mui/material';
import Scrollbar from '../../../components/scrollbar';
// sections
// mock
import GlobalModal from "src/Modals/GlobalModal";

// ----------------------------------------------------------------------


export default function CustomerDetails() {
  // eslint-disable-next-line no-unused-vars
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [addDriverModalOpen, setAddDriverModalOpen] = useState(false);


  const handleCloseViewFilter = () => {
    setFilterModalOpen(false);
  };

  const handleCloseAddDriver = () => {
    setAddDriverModalOpen(!addDriverModalOpen);
  };



  return (
    <>
      <div className=" px-0 px-md-2">

        <div className={`${styles.filters} mt-4`}>
          <div className="d-flex justify-content-between" style={{gap: '10px'}}>
            <div className={`${styles.hold_input}  `}>
              <img src="/assets/icons/search.svg" alt="" />
              <input type="text" name="search" placeholder="Search" style={{ textIndent: '25px', width: '240px',  }} className=" form-control" />
            </div>
            <div className="text-right">
              <button
                onClick={() => setFilterModalOpen(true)}
                className="btn  border"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #D0D5DD',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                  borderRadius: '4px',
                  height: '40px'
                }}>
                <img className="" style={{ display: 'inline', width: '20px' }} src="/assets/icons/filterlines.svg" alt="" />
                &nbsp;
                <small className="d-none d-md-inline-block">
                  Filters
                </small>
              </button>

            </div>

          </div>
        </div>
        <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>
          <div className='py-4 px-3 px-md-4 border-bottom'>

            <div className="d-sm-flex justify-content-between" >
              <div className="pb-3 pb-md-0">
                <h5 className="table_desc_header mb-2">
                  Customers Activities
                </h5>
                <p className="m-0">
                  <small  style={{ fontWeight: 'normal', fontSize: '14px' }}>
                    View customers profile and transaction history
                  </small>
                </p>

              </div>
              <div className="pt-md-2">
                <div className="dropleft">
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
                      Customer Name
                      <img className="pl-2" src="/assets/icons/down.svg" alt="" />

                    </th>
                    <th className="text-muted">
                      Phone Number

                    </th>
                    <th className="text-muted">
                      Email Address

                    </th>
                    <th className="text-muted">
                      Completed Trips

                    </th>
                    <th className="text-muted">
                      Amount

                    </th>
                    <th className="text-muted">
                      Action

                    </th>
                    {/* <th className="text-muted">
                      Action

                    </th>
                    <th className="text-muted">
                      Ranks

                    </th>
                    <th className="text-muted">
                      Orders

                    </th>
                    <th className="text-muted">
                      Balance

                    </th>
                    <th className="text-muted">
                      Date Registered

                    </th> */}


                  </tr>

                </thead>

                <tbody>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials" style={{width: '50px'}}>
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '10px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>
                      <span>
                        (704) 555-0127
                      </span>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                      <span>
                        20
                      </span>

                    </td>
                    <td>
                      <span>₦5.63M</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="px-3 py-2" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" onClick={() => setAddDriverModalOpen(true)} className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials" style={{width: '50px'}}>
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '10px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>
                      <span>
                        (704) 555-0127
                      </span>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                      <span>
                        20
                      </span>

                    </td>
                    <td>
                      <span>₦5.63M</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="px-3 py-2" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" onClick={() => setAddDriverModalOpen(true)} className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials" style={{width: '50px'}}>
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '10px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>
                      <span>
                        (704) 555-0127
                      </span>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                      <span>
                        20
                      </span>

                    </td>
                    <td>
                      <span>₦5.63M</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="px-3 py-2" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" onClick={() => setAddDriverModalOpen(true)} className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials" style={{width: '50px'}}>
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '10px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>
                      <span>
                        (704) 555-0127
                      </span>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                      <span>
                        20
                      </span>

                    </td>
                    <td>
                      <span>₦5.63M</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="px-3 py-2" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" onClick={() => setAddDriverModalOpen(true)} className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials" style={{width: '50px'}}>
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '10px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>
                      <span>
                        (704) 555-0127
                      </span>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                      <span>
                        20
                      </span>

                    </td>
                    <td>
                      <span>₦5.63M</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="px-3 py-2" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" onClick={() => setAddDriverModalOpen(true)} className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials" style={{width: '50px'}}>
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        <div className=" ">
                          <p className="mb-0" style={{ fontSize: '14px' }}>
                            <strong>
                              Ariene McCoy
                            </strong>
                          </p>
                          <span style={{ fontSize: '10px' }}>
                            243666
                          </span>

                        </div>

                      </div>

                    </td>

                    <td>
                      <span>
                        (704) 555-0127
                      </span>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                      <span>
                        20
                      </span>

                    </td>
                    <td>
                      <span>₦5.63M</span>
                    </td>
                    <td>
                      <div className="dropleft ">
                        <span
                          id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"

                          className={`${styles.action_button}`} style={{
                            cursor: 'pointer',

                          }}>
                          <img src="/assets/icons/action.svg" className="px-3 py-2" alt="" />

                        </span>

                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                          <button type="button" onClick={() => setAddDriverModalOpen(true)} className="rss dropdown-item btn border-0">View</button>
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
                  <button className="btn" >
                    <span className="d-none d-sm-block">
                      Previous
                    </span>
                    <span>
                      <i className="bi bi-chevron-left d-block d-sm-none"></i>
                    </span>
                  </button>
                  &nbsp;
                  &nbsp;
                  <button className="btn" >
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

      {/* Customer Info Modal */}
      <GlobalModal
        open={addDriverModalOpen}
        onClose={handleCloseAddDriver}
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        width='540px !important'
        height='670px !important'
        overflow='hidden'
        bgcolor='#FFFF'
        border='1px solid #F5F5F5'
        borderRadius='5px'
        boxShadow='24'
        p='25px'
      >
        <div className={`${styles.modal_content}`} style={{height: '84vh'}}>
          <div className={`${styles.modal_header} mb-0`}>
            <h5 
              className="mb-1"
              style={{
                fontSize: '19px',
                fontWeight: '700',

              }}
            >Customer Info</h5>

            <span onClick={handleCloseAddDriver} style={{ cursor: 'pointer' }}>
              <img src="/assets/icons/x.svg" alt="" />

            </span>
          </div>

          <span className="text-muted mb-4" style={{ fontSize: '13px' }}>Details of Customer</span>

          {/* className={`${styles.retailer_modal_product_img}`} style={{
                  // backgroundImage: `url('${url}')`,
                  width:"15%",
                  height:"100px"
              }} */}
          <form action="" className="mt-0">
            <label htmlFor="loc" className="mt-4">Customer's Photo* </label>

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
            <div className="row mt-3">
              <div className="col-12 mb-1">
                <div className="mb-3">
                  <label htmlFor="loc">Customer's Name</label>
                  <TextField
                    type='text'
                    id="loc"
                    size="small"
                    readonly
                    fullWidth
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
                    placeholder="shoprite@gmail.com"
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
                    placeholder="+234840000000"
                  />


                </div>

                <div className="mb-3">
                  <label htmlFor="loc">Address</label>
                  <TextField
                    readonly
                    type='text'
                    id="loc"
                    size="small"
                    fullWidth
                    placeholder="Tejuosho Rd, Yaba 101241, Lagos."

                  />


                </div>

              </div>
            </div>
            <div className="mb-2">
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
                <div className="mb-3">
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
                </div>

                <div className="mb-3">

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
                <label htmlFor="ounit">Amount</label>

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

                </div>

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
