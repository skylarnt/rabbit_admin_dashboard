

// ----------------------------------------------------------------------
import styles from "./Settings.module.css"
import { useState, forwardRef } from "react"
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
// import LockIcon from '@mui/icons-material/Lock';
// import HelpIcon from '@mui/icons-material/Help';
// import { BaseUrlContext } from 'src/context/BaseUrlContext';
// import DeleteIcon from '@mui/icons-material/Delete';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import bus from "src/bus"


// ----------------------------------------------------------------------

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    overflow: 'scroll',
    bgcolor: '#F5F5F5',
    border: '1px solid #F5F5F5',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};

export default function SettingsPage() {


    const [value, setValue] = useState(0);
    const [name, setName] = useState('');
    const [openDialog, setDiologOpen] = useState(false);
    const [openMyDialog, setOpenMyDialog] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const handleClickOpen = () => {
        setDiologOpen(true);
    };

    const handleDialogClose = () => {
        setDiologOpen(false);
        window.location.reload()
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleNameChange = (event, newValue) => {
        setName(event.target.value);
    };


    return (
        <>
            <div className="wrapper mt-md-0 mt-4 px-0 px-md-2">
                <div className="header d-block d-md-none mb-4">
                    <div className="d-md-flex justify-content-between">
                        <div className="mb-3">
                            <h4 className={`mb-1 mb-md-0 pb-0`}>Settings</h4>

                        </div>

                    </div>

                </div>
                <div className="card px-0 mx-0" style={{ height: '100%' }}>

                    <div className="row">
                        <div className="col-md-4 border-right pr-0 settings_tab_wrap" >
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                className="border"
                                style={{width: '96%'}}
                            >
                                <Tab className={`${value === 0 ? styles.active : styles.default_cl} ${styles.control_button}`} label={
                                    <div className="d-flex" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '9px' }}>
                                        <div>
                                            {/* <LockIcon style={{ color: '#F53D3D' }} /> */}
                                            <img src="/assets/icons/lockbox.png" alt="" style={{ width: '40px' }} />
                                        </div>
                                        <div className="text-left m-0 p-0">
                                            <span className="d-block text-left m-0 p-0">Password</span>
                                            <small className="d-block text-left m-0 p-0">
                                                Secure your account by setting up or changing your passwords
                                            </small>
                                        </div>

                                    </div>
                                } />
                                <Tab style={{ maxWidth: '100% !important' }} className={`${value === 1 ? styles.active : styles.default_cl} ${styles.control_button}`} label={
                                    <div className="d-flex" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '9px' }}>
                                        <div>
                                            {/* <HelpIcon style={{ color: '#7839EE' }} /> */}
                                            <img src="/assets/icons/helpCenter.png" alt="" style={{ width: '40px' }} />
                                        </div>
                                        <div className="text-left m-0 p-0">
                                            <span className="d-block text-left m-0 p-0">Help Center</span>
                                            <small className="d-block text-left m-0 p-0">
                                                Use our comprehensive resource of helpful guidelines and FAQS
                                            </small>
                                        </div>
                                    </div>

                                } />
                                <Tab className={`${value === 2 ? styles.active : styles.default_cl} ${styles.control_button}`} label={
                                    <div className="d-flex" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '9px' }}>
                                        <div>
                                            {/* <DeleteIcon style={{ color: '#F97316' }} /> */}
                                            <img src="/assets/icons/deleteBox.png" alt="" style={{ width: '40px' }} />
                                        </div>
                                        <div className="text-left m-0 p-0">
                                            <span className="d-block text-left m-0 p-0">Delete  Account</span>
                                            <small className="d-block text-left m-0 p-0">
                                                Delete your account permanently from this application
                                            </small>
                                        </div>
                                    </div>

                                } />
                                <Tab className={`${value === 3 ? styles.active : styles.default_cl} ${styles.control_button}`} label={
                                    <div className="d-flex" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: '9px' }}>
                                        <div>
                                            {/* <HelpIcon style={{ color: '#000095' }} /> */}
                                            <img src="/assets/icons/pauseBox.png" alt="" style={{ width: '40px' }} />
                                        </div>
                                        <div className="text-left m-0 p-0">
                                            <span className="d-block text-left m-0 p-0">Pause Operation</span>
                                            <small className="d-block text-left m-0 p-0">
                                                Pause your operations temporarily from this application
                                            </small>
                                        </div>
                                    </div>

                                } />
                            </Tabs>
                            <div className="logout" style={{ position: 'absolute', bottom: '2%', left: '7%' }}>
                                <button 
                                    type="button" 
                                    className="btn " 
                                    onClick={() => bus.emit("open-logout-modal")}
                                >
                                    <img src="/assets/icons/logout.svg" alt="" style={{ width: '30px' }} />
                                    &nbsp;

                                    Log out

                                </button>

                            </div>



                        </div>
                        <div className="col-md-8 pl-0 pr-4" style={{ height: '100vh' }}>
                            {value === 0 &&
                                <div className={`${styles.card_n_body} card-body px-2 pl-md-0`}>
                                    <div className={`${styles.content_header_container} ml-2`}>
                                        <h5>
                                            Password Info
                                        </h5>
                                        <small style={{ fontWeight: 'lighter' }}>
                                            View and change your password settings
                                        </small>

                                    </div>
                                    <div className={`${styles.content_body}`}>
                                        <div className={`${styles.row_container} row border-bottom `}>
                                            <div className="col-sm-6">
                                                <label htmlFor="p">
                                                    Current password
                                                </label>
                                            </div>
                                            <div className="col-sm-6 position_settings">
                                                <div className={`${styles.showPasswordWrap} mb-4`}>
                                                    <FormControl sx={{ mt: 2, width: '100%', p: 0 }} variant="outlined">
                                                        <OutlinedInput
                                                            placeholder="********"
                                                            id="outlined-adornment-password"
                                                            type={showPassword ? 'text' : 'password'}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={`${styles.row_container} row border-bottom pb-4`}>
                                            <div className="col-sm-6 ">
                                                <label htmlFor="n">
                                                    Enter new password
                                                </label>
                                            </div>
                                            <div className="col-sm-6 position_settings">

                                                <div className={`${styles.showPasswordWrap}`}>
                                                    <FormControl sx={{ mt: 2, width: '100%', p: 0 }} variant="outlined">
                                                        <OutlinedInput
                                                            placeholder="********"
                                                            id="outlined-adornment-password"
                                                            type={showPassword ? 'text' : 'password'}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                    <small className={`${styles.small}`}>
                                                        Your password should have 8 characters
                                                    </small>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={`${styles.row_container} row border-bottom pb-4`}>
                                            <div className="col-sm-6">
                                                <label htmlFor="c">
                                                    Confirm password
                                                </label>
                                            </div>
                                            <div className="col-sm-6 position_settings">
                                                <div className={`${styles.showPasswordWrap} mb-4`}>
                                                    <FormControl sx={{ mt: 2, width: '100%', p: 0 }} variant="outlined">
                                                        <OutlinedInput
                                                            placeholder="********"
                                                            id="outlined-adornment-password"
                                                            type={showPassword ? 'text' : 'password'}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        aria-label="toggle password visibility"
                                                                        onClick={handleClickShowPassword}
                                                                        onMouseDown={handleMouseDownPassword}
                                                                        edge="end"
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`text-right mt-4 ${styles.buttons}`}>
                                            <button className="btn btn-sm " style={{
                                                background: '#FFFFFF',
                                                border: '1px solid #D0D5DD',

                                            }}>
                                                Cancel
                                            </button>
                                            &nbsp;
                                            &nbsp;
                                            <button className={`btn btn-success btn-sm ${styles.btn_custom_color}`} onClick={() => setOpenMyDialog(true)}>
                                                <span style={{ marginRight: '5px' }}>
                                                    Update password
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            }
                            {value === 1 &&
                                <div className={`${styles.card_n_body} card-body pl-0`}>
                                    <div className={`${styles.content_header_container}`}>
                                        <h5>
                                            Help Center
                                        </h5>
                                        <small className="font-weight-normal">
                                            Let us know what we can help you with
                                        </small>

                                    </div>
                                    <div className={`${styles.content_body}`}>
                                        <div className={`${styles.row_container} row border-bottom pb-4`}>
                                            <div className="col-sm-6">
                                                <label htmlFor="sub">
                                                    Subject
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <TextField
                                                    required
                                                    id="sub"
                                                    size="small"
                                                    value={name}
                                                    placeholder="Input"
                                                    onChange={handleNameChange}
                                                    fullWidth

                                                />

                                            </div>
                                        </div>
                                        <div className={`${styles.row_container} row border-bottom pb-4`}>
                                            <div className="col-sm-6">
                                                <label htmlFor="m">
                                                    Your message

                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <TextField
                                                    required
                                                    id="m"
                                                    size="small"
                                                    placeholder="Text area"
                                                    multiline
                                                    rows='5'
                                                    cols='5'
                                                    fullWidth

                                                />

                                            </div>
                                        </div>
                                        <div className="text-right mt-4">
                                            <button className={`btn btn-success btn-sm ${styles.btn_custom_color}`}>
                                                <span style={{ marginRight: '5px' }}>
                                                    Send Message
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            }
                            {value === 2 &&
                                <div className={`${styles.card_n_body} card-body pl-0`}>
                                    <div className={`${styles.content_header_container}`}>
                                        <h5>
                                            Delete account
                                        </h5>
                                        <small className="font-weight-normal">
                                            We are sorry to see you go
                                        </small>

                                    </div>
                                    <div className={`${styles.content_body} pt-3`}>
                                        <p>

                                            Once you delete your account, it cant be restored. you would loose access to past messages and <br />
                                            events. if you are sure you want to delete your account, we would email you with the final steps at <br />
                                            candidate@gmail.com

                                        </p>
                                        <div className="text-right mt-4">
                                                <button style={{ cursor: 'pointer' }} onClick={handleClickOpen} className={`btn btn-danger btn-sm ${styles.btn_custom_color}`}>
                                                    <span style={{ marginRight: '5px' }}>
                                                        Delete Account
                                                    </span>
                                                </button>
                                        </div>
                                    </div>

                                </div>
                            }
                            {value === 3 &&
                                <div className={`${styles.card_n_body} card-body pl-0`}>
                                    <div className={`${styles.content_header_container}`}>
                                        <h5>
                                            Pause Operation
                                        </h5>
                                        <small className="font-weight-normal">
                                            Set a duration
                                        </small>

                                    </div>
                                    <div className={`${styles.content_body}`}>
                                        <label htmlFor="sub">
                                            Date
                                        </label>
                                        <div className={`${styles.row_container} row pb-4`}>
                                            <div className="col-sm-8">
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
                                            </div>
                                            <div className="col-sm-4 pr-0">
                                                <div className={`${styles.select_wrap} mr-auto ml-md-auto border`}>
                                                    <Select
                                                    labelId="s"
                                                    id="s"
                                                    size="small"
                                                    required
                                                    name="verified"
                                                    defaultValue='select'
                                                    style={{ minWidth: '130px' }}
                                                    >

                                                    <MenuItem value='select'>Month</MenuItem>
                                                    <MenuItem value='1'>Jan</MenuItem>
                                                    <MenuItem value='2'>Feb</MenuItem>
                                                    <MenuItem value='3'>Mar</MenuItem>
                                                    <MenuItem value='4'>Apr</MenuItem>
                                                    <MenuItem value='5'>May</MenuItem>
                                                    <MenuItem value='6'>June</MenuItem>
                                                    <MenuItem value='7'>July</MenuItem>
                                                    <MenuItem value='8'>Aug</MenuItem>
                                                    <MenuItem value='9'>Sept</MenuItem>
                                                    <MenuItem value='10'>Oct</MenuItem>
                                                    <MenuItem value='11'>Nov</MenuItem>
                                                    <MenuItem value='12'>Dec</MenuItem>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right mt-4">
                                            <button className={`btn btn-danger btn-sm ${styles.btn_custom_color}`}>
                                                <span >
                                                    Pause Operation
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            }

                        </div>
                    </div>

                </div>
            </div>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openMyDialog}
                onClose={() => setOpenMyDialog(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                disableEnforceFocus
            >
                <Fade in={openMyDialog}>
                    <Box className={`mobile_modal_size modal_bg`} sx={style1}>
                        <div className={`text-center add_to_cart_content`}>
                            <img src="/assets/icons/circleCheck.svg" alt="" />
                            <h5 className="mt-3 mb-2" style={{ fontWeight: 'bold' }}>Password Updated</h5>
                            <p className='text-center' style={{ textAlign: 'center !important' }}>
                                You have successfully updated your password.

                            </p>
                            <button onClick={() => setOpenMyDialog(false)} className={`modal_btn hover btn mx-auto border px-4 bg-light text-dark`}>
                                Done

                            </button>

                        </div>



                    </Box>
                </Fade>
            </Modal>


            {/*  DIALOG*/}
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleDialogClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <div className="card border-0">
                    <div className="card-body border-0 ">
                        <div className={`${styles.customized_row}`}>
                            <div className="text-center">
                                <img style={{ width: '40px' }} src="/assets/icons/caution.svg" alt="" />

                            </div>
                            <div>
                                <h4>
                                    Delete Account

                                </h4>
                                <p style={{
                                    fontSize: '14px',
                                    color: '#6B7280',
                                }}>
                                    Are you sure you want to delete this account? All your data will be permanently removed from our servers forever. This action cannot be undone.
                                </p>

                            </div>

                        </div>

                        <DialogActions>
                            <Button className={`${styles.cancel_delete}`} onClick={handleDialogClose}>Cancel</Button>
                            <Button className={`${styles.delete_account}`}>Delete</Button>
                        </DialogActions>
                    </div>
                </div>
            </Dialog>

        </>
    );
}
