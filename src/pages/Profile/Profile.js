

// ----------------------------------------------------------------------
import styles from "./Profile.module.css"
// import { useEffect, useState } from "react"
// import TextField from '@mui/material/TextField';

// import bus from "src/bus";
// sections
// mock
// ----------------------------------------------------------------------
export default function ProfilePage() {

    return (
        <>
            <div className={`wrapper mt-md-0 mt-4 pt-2 px-2`}>
                <div className={`${styles.header} d-block d-md-none mb-4`}>
                    <div className="d-md-flex justify-content-between">
                        <div className="mb-3">
                            <h4 className={`mb-1 mb-md-0 pb-0`}>Settings</h4>

                        </div>

                    </div>

                </div>
            </div>

            <div className={`${styles.holder} px-2`}>
                <div className={` mb-5`} id="updated">
                    <div className="content">

                        <div className={`${styles.sub_header} ${styles.row} row`}>
                            <div className={`${styles.p_info} col-sm-8 px-0`}>
                                <h6>Personal info</h6>
                                <p className="">Update your photo and personal details here</p>
                            </div>
                            <div className={`${styles.edit_btn} col-sm-4 px-0 text-md-right pb-1`}>
                                <button className="btn btn-success ml-auto">Edit</button>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p>Business Logo</p>
                            </div>
                            <div className="col-md-5 p-0 ">
                                <div className="logo mb-3">
                                    <img style={{ width: '50px', borderRadius: '50%' }} src="/assets/icons/Avatar.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p>Business name</p>
                            </div>
                            <div className="col-md-5 p-0">
                                <p>Jaya Services Nigeria Limited</p>
                            </div>
                            <div className="col-md-4 p-0">
                                <p className="text-right text-muted">Brand ID : RX 2237</p>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p>Business email address</p>
                            </div>
                            <div className="col-md-5 p-0">
                                <p><i className="bi bi-envelope bi_envelope"></i> jayaservices@gmail.com</p>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p>Phone Number</p>
                            </div>
                            <div className="col-md-5 p-0">
                                <p>+2348012345678</p>
                            </div>
                        </div>

                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p>Business Address</p>
                            </div>
                            <div className="col-md-5 p-0">
                                <p>76, Borno Way, Alago meji</p>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p>Country</p>
                            </div>
                            <div className="col-md-5 p-0">
                                <p>Nigeria</p>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p>State</p>
                            </div>
                            <div clas5="col-md-5 p-0">
                                <p>Lagos</p>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p style={{
                                    padding: '0',
                                    margin: '0',
                                    lineHeight: '1'
                                }}>Account</p>
                                {/* <small className="text-muted p-0" style={{
                                    fontSize: '10px',
                                    lineHeight: '0px'
                                }}>Write a short introduction</small> */}
                            </div>
                            <div className="col-md-5 py-md-0 py-3 px-0">
                                <p>Bank Name : <p className="m-0 p-0 d-inline">GT Bank</p></p>
                                <p>Account Number : <p className="m-0 p-0 d-inline">0123456789</p></p>
                            </div>
                        </div>
                        <div className={`${styles.row} row`} >
                            <div className="col-md-3 p-0">
                                <p>Service Rendered</p>
                            </div>
                            <div className="col-md-5 p-0 pb-1">
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                }}>
                                    <div className={`${styles.product_selected}`}>
                                        <div className=" d-flex justify-content-between">
                                            <span >Trips</span>
                                        </div>
                                    </div>
                                    <div className={`${styles.product_selected}`}>
                                        <div className=" d-flex justify-content-between">
                                            <span >Charter</span>
                                        </div>
                                    </div>
                                    <div className={`${styles.product_selected}`}>
                                        <div className=" d-flex justify-content-between">
                                            <span >Interstate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.row} row`}>
                            <div className="col-md-3 p-0">
                                <p>LinkedIn Url</p>
                            </div>
                            <div className="col-md-5 p-0">
                                <p>https://www.linkedin.ng/098998</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-5"
                    id="editupdate">
                    <div
                        className="content">
                        <form action="" className="pt-0 mt-0">
                            <div className={`${styles.sub_header} ${styles.row} row`}>
                                <div className={`${styles.p_info} col-sm-8 px-0`}>
                                    <h6>Personal info</h6>
                                    <p className="">Update your photo and personal details here</p>
                                </div>
                                <div className={`${styles.edit_btn} col-sm-4 px-0 ml-auto pb-1`}>
                                    <div className={`${styles.update_sect} d-flex ml-auto `} style={{
                                        width: 'fit-content'
                                    }}>
                                        <div>
                                            <button
                                                type="button"
                                                style={{
                                                    background: '#FFFFFF',
                                                    color: '#344054'
                                                }} className={`${styles.cancel_btn} btn mx-3`}>
                                                Cancel
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                style={{
                                                    color: '#ffffff'
                                                }}
                                                className="btn btn-success">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-2 p-0">
                                    <p>Business Logo</p>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className={`${styles.row} row`}
                                        style={{
                                            borderTop: 'none',
                                            padding: '0 !important',
                                            margin: '0 !important'
                                        }}
                                    >
                                        <div className="col-md-2 mx-0 px-0">
                                            <div className="logo my-lg-4 mb-3 mx-auto" style={{
                                                width: '50px',
                                            }}>
                                            </div>
                                        </div>
                                        <div className="col-md-10 mx-0 px-0">
                                            <div className={`${styles.cstm_file} custom-file`}>
                                                <div className={`${styles.cstm_file_label} custom-file-label`}
                                                    htmlFor="customFile"
                                                    style={{
                                                        position: 'relative',
                                                        zIndex: '0'
                                                    }}>
                                                    <div className="mx-auto"
                                                        style={{
                                                            width: '50%',
                                                            position: 'absolute',
                                                            top: '50%',
                                                            left: '15%',
                                                            transform: 'translate(-50%, -50%)'
                                                        }}>
                                                        <img style={{ width: '20%' }} src="/assets/icons/Avatar.png" alt="" />

                                                    </div>
                                                    <p className="p-0 m-0 mt-3 mb-2">
                                                        <i className="bi bi-cloud-arrow-up"></i>
                                                    </p>
                                                    <p>
                                                        <span
                                                            className="text-success"
                                                            style={{
                                                                cursor: 'pointer'
                                                            }}
                                                            onClick={() => { document.getElementById('customFileInput').click(); }}>
                                                            Click to upload
                                                        </span>
                                                        or drag and drop
                                                    </p>
                                                    <input type="file"
                                                        className="custom-file-input"
                                                        id="customFileInput"
                                                        style={{ display: 'none' }}
                                                        accept="image/png, image/jpeg, image/jpg"
                                                    />
                                                    <p>
                                                        PNG, JPG or PDF
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p>Business name</p>
                                </div>
                                <div className="col-md-5 p-0">
                                    <div className={`${styles.form_group}`}>
                                        <input
                                            type="text"
                                            className="form-control shadow-none"
                                            id="bizName"
                                            placeholder="Nestle International PLC"
                                            aria-describedby="bizName"
                                            name="business_name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p>Business email address</p>
                                </div>
                                <div className="col-md-5 p-0">
                                    <div className={`${styles.form_group}`}>
                                    <i className="bi bi-envelope bi_envelope position-absolute" 
                                        style={{
                                            top: '45%',
                                            left: '20px',
                                            transform: 'translate(-50%, -50%)',
                                        }} 
                                    ></i>
                                        <input
                                            type="email"
                                            name="business_email"
                                            className="form-control  shadow-none"
                                            id="bizEmail"
                                            placeholder="tedbree_hates_goats@yahoo.com"
                                            aria-describedby="bizEmail"
                                            style={{
                                                paddingLeft: '35px'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p>Business Phone Number</p>
                                </div>
                                <div className="col-md-5 p-0">
                                    <div className={`${styles.form_group}`}>
                                        <input
                                            name="business_phone_number"
                                            type="tel" className="form-control shadow-none"
                                            id="bizPhone"
                                            placeholder="+2348000000000"
                                            aria-describedby="bizPhone"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p>Business Address</p>
                                </div>
                                <div className="col-md-5 p-0">
                                    <div className={`${styles.form_group}`}>
                                        <input
                                            name="business_address"
                                            type="text"
                                            className="form-control shadow-none"
                                            id="bizAddress"
                                            placeholder="Address"
                                            aria-describedby="bizAddress"
                                        />
                                    </div>
                                </div>
                            </div><div></div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p>Country</p>
                                </div>
                                <div className="col-md-5 p-0">
                                    <div className={`${styles.form_group}`}>
                                        <select
                                            id={`${styles.country_list}`}
                                            name="country"
                                        >
                                            <option
                                                className="form-control shadow-none"
                                                value="">
                                                United States
                                            </option>
                                            <option>
                                                Nigeria
                                            </option>
                                            <option>
                                                Liberia
                                            </option>
                                            <option>
                                                Senegal
                                            </option>
                                            <option>
                                                Ghana
                                            </option>
                                            <option>
                                                Kenya
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p>State</p>
                                </div>
                                <div className="col-md-5 p-0">
                                    <div className={`${styles.form_group}`}>
                                        <select
                                            id={`${styles.country_list}`}
                                            name="state"
                                        >
                                            <option
                                                className="form-control shadow-none"
                                                value="">
                                                Select State
                                            </option>
                                            <option>Lagos</option>
                                            <option>Lagos</option>
                                            <option>Lagos</option>
                                            <option>Lagos</option>
                                            <option>Lagos</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p style={{
                                        padding: '0',
                                        margin: '0',
                                        lineHeight: '1'
                                    }}>Bank Name</p>
                                </div>
                                <div className="col-md-5 py-md-0 py-3 px-0">
                                    <div className={`${styles.form_group}`}>
                                    <input
                                            name="bank_name"
                                            type="text"
                                            className="form-control shadow-none"
                                            id="bank_name"
                                            placeholder=""
                                            aria-describedby="bank_name"
                                        />                                   
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row border-0`}>
                                <div className="col-md-3 p-0">
                                    <p style={{
                                        padding: '0',
                                        margin: '0',
                                        lineHeight: '1'
                                    }}>Account Number</p>
                                </div>
                                <div className="col-md-5 py-md-0 py-3 px-0 pb-md-3">
                                    <div className={`${styles.form_group}`}>
                                    <input
                                            name="bank_name"
                                            type="text"
                                            className="form-control shadow-none"
                                            id="bank_name"
                                            placeholder=""
                                            aria-describedby="bank_name"
                                        />                                   
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p>Service Rendered</p>
                                </div>
                                <div className="col-md-5 p-0 pb-2">
                                    <div className={`mb-3 inputs_n_label ${styles.push_notification_icon}`} >
                                        {/* <TextField
                                            required
                                            id="businessDesc"
                                            className="position-relative"
                                            placeholder='Select items'
                                            size="small"
                                            disabled
                                            fullWidth

                                        />
                                        <img className="icon cursor_pointer float-right position-absolute" src="/assets/icons/ShapeRight.svg" 
                                            style={{
                                                top: '20%',
                                                right: '10px',
                                                transform: 'translate(-50%, -50%)',
                                            }}  
                                            alt="" 
                                        /> */}
                                        <div className="card border p-2" style={{borderRadius: '8px'}}>
                                            <div className={`${styles.product_selected} `}>
                                                <div className=" d-flex justify-content-between">
                                                    <span>Trips</span>
                                                    &nbsp;
                                                    &nbsp;
                                                    <span>&times;</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="mt-3 mb-2"><small className="text-muted font-weight-normal">Select all kind of services you render</small></p>
                                            </div>
                                            <div className="d-flex">
                                                <div className={`${styles.product_selected} `}>
                                                    <div className=" d-flex justify-content-between">
                                                        <span >Trips</span>
                                                    </div>
                                                </div>
                                                <div className={`${styles.product_selected} `}>
                                                    <div className=" d-flex justify-content-between">
                                                        <span >Charter</span>
                                                    </div>
                                                </div>
                                                <div className={`${styles.product_selected} `}>
                                                    <div className=" d-flex justify-content-between">
                                                        <span >Interstate</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.row} row`}>
                                <div className="col-md-3 p-0">
                                    <p>LinkedIn Url</p>
                                </div>
                                <div className="col-md-5 p-0">
                                    <div className={`${styles.form_group}`}>
                                        <input name="linkedIn_url" type="text" className="form-control  shadow-none" id="bizAddress" placeholder="linked url" aria-describedby="bizAddress" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
