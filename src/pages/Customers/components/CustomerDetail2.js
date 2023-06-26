

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


export default function CustomerDetails2() {
  // eslint-disable-next-line no-unused-vars
  const [filterModalOpen, setFilterModalOpen] = useState(false);


  const handleCloseViewFilter = () => {
    setFilterModalOpen(false);
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
                  All Users
                </h5>
                <small style={{ fontWeight: '200', fontSize: '14px' }}>
                  These are the total users of your service
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
              <table className={`${styles.table} table-hover table-striped`}>
                <thead className={`${styles.thead}`}>


                  <tr>
                    <th className="text-muted" style={{ width: "16%" }}>
                      Customer Name
                      <img className="pl-2" src="/assets/icons/down.svg" alt="" />

                    </th>
                    <th className="text-muted">
                      Phone Number
                      <img className="pl-2" src="/assets/icons/down.svg" alt="" />

                    </th>
                    <th className="text-muted">
                      Email Address

                    </th>
                    <th className="text-muted">
                      Date

                    </th>
                    <th className="text-muted">
                      Completed Logistics

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
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
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
                      <p>
                        (704) 555-0127
                      </p>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                        12/10/23
                    </td>
                    <td className="text-center">
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
                          <button type="button" className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
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
                      <p>
                        (704) 555-0127
                      </p>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                        12/10/23
                    </td>
                    <td className="text-center">
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
                          <button type="button" className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
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
                      <p>
                        (704) 555-0127
                      </p>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                        12/10/23
                    </td>
                    <td className="text-center">
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
                          <button type="button" className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
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
                      <p>
                        (704) 555-0127
                      </p>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                        12/10/23
                    </td>
                    <td className="text-center">
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
                          <button type="button" className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
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
                      <p>
                        (704) 555-0127
                      </p>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                        12/10/23
                    </td>
                    <td className="text-center">
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
                          <button type="button" className="rss dropdown-item btn border-0">View</button>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className={`${styles.tr} `}>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div className="initials">
                          {/* AM */}
                          <img src="/assets/illustrations/illustration_avatar.png" alt="" />
                        </div>
                        &nbsp;
                        &nbsp;
                        &nbsp;
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
                      <p>
                        (704) 555-0127
                      </p>
                    </td>
                    <td>
                      example@gmail.com
                    </td>
                    <td>
                        12/10/23
                    </td>
                    <td className="text-center">
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
                          <button type="button" className="rss dropdown-item btn border-0">View</button>
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
