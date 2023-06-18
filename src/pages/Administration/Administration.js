

// ----------------------------------------------------------------------
import styles from "./Administration.module.css"
import {
    useEffect, 
    useState
} from "react"
import {
    Card,
    //   Avatar,
} from '@mui/material';
import * as React from 'react';
import Scrollbar from '../../components/scrollbar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import bus from "src/bus"; import GlobalModal from "../../Modals/GlobalModal";

// ----------------------------------------------------------------------


export default function AdministrationPage() {
    const [topupModalOpen, setTopupModalOpen] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleCloseTopup = () => {
        setTopupModalOpen(false);
    };


    useEffect(() => {
        bus.on("open-modal", () => {
            setTopupModalOpen(true);
        });
    }, []);
    return (
        <>
            <div className=" px-2 mt-5 pt-2">
                <div className={`${styles.filters} mt-5`}>
                    <div className="row">
                        <div className={`${styles.hold_input} col-6   `}>
                            <img src="/assets/icons/search.svg" alt="" />
                            <input type="text" name="search" placeholder="Search" style={{ textIndent: '25px', width: '240px' }} className=" form-control" />

                        </div>

                    </div>
                </div>

                <Card style={{ marginTop: '50px', borderRadius: '10px' }} className='p-0'>

                    <Scrollbar>
                        <div className={`${styles.overflow_table} table-responsive  pt-3 pb-3 pl-0 pr-0`}  >
                            <table className={`${styles.table} table-hover table-striped`}>
                                <thead className={`${styles.thead}`}>
                                    <tr>
                                        <th className="text-muted" style={{ width: "16%" }}>
                                            S/N
                                        </th>
                                        <th className="text-muted text-center">
                                            Admin Name
                                            <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                                        </th>
                                        <th className="text-muted">
                                            Password
                                        </th>
                                        <th className="text-muted">
                                            Date Ordered
                                            <img className="pl-2" src="/assets/icons/down.svg" alt="" />
                                        </th>
                                        <th className="text-muted">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '13px' }}>
                                                1.
                                            </span>
                                        </td>

                                        <td className="">
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Michael Gillard
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            <div className={`${styles.showPasswordWrap} mb-3`}>
                                                <FormControl sx={{ mt: 2, width: '100%', p: 0 }} variant="outlined">
                                                    <OutlinedInput
                                                        placeholder="Password 1"
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
                                        </td>
                                        <td>
                                            <span>12/02/23</span>
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
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '13px' }}>
                                                2.
                                            </span>
                                        </td>

                                        <td className="">
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Michael Gillard
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>
                                        </td>
                                        <td><div className="mb-3">
                                            <div className={`${styles.showPasswordWrap} mb-3`}>
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
                                        </td>
                                        <td>
                                            <span>12/02/23</span>
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
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '13px' }}>
                                                3.
                                            </span>
                                        </td>

                                        <td className="">
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Michael Gillard
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>
                                        </td>
                                        <td><div className="mb-3">
                                            <div className={`${styles.showPasswordWrap} mb-3`}>
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
                                        </td>
                                        <td>
                                            <span>12/02/23</span>
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
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '13px' }}>
                                                4.
                                            </span>
                                        </td>

                                        <td className="">
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Michael Gillard
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>
                                        </td>
                                        <td><div className="mb-3">
                                            <div className={`${styles.showPasswordWrap} mb-3`}>
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
                                        </td>
                                        <td>
                                            <span>12/02/23</span>
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
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
                                                </div>
                                            </div>
                                        </td>

                                    </tr>

                                    <tr className={`${styles.tr} `}>
                                        <td>
                                            <span style={{ fontSize: '13px' }}>
                                                5.
                                            </span>
                                        </td>

                                        <td className="">
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div className="initials">
                                                    {/* AM */}
                                                    <img src="/assets/illustrations/illustration_avatar.png" alt="" style={{ width: '50px' }} />
                                                </div>
                                                &nbsp;
                                                <div className=" ">
                                                    <p className="mb-0" style={{ fontSize: '14px' }}>
                                                        <strong>
                                                            Michael Gillard
                                                        </strong>
                                                    </p>
                                                    <span style={{ fontSize: '14px' }}>
                                                        243666
                                                    </span>

                                                </div>

                                            </div>
                                        </td>
                                        <td><div className="mb-3">
                                            <div className={`${styles.showPasswordWrap} mb-3`}>
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
                                        </td>
                                        <td>
                                            <span>12/02/23</span>
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
                                                    <button type="button" className="rss dropdown-item btn border-0 text-danger">Delete</button>
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

            {/* Invite Admin Modal */}
            <GlobalModal
                    open={topupModalOpen}
                    onClose={handleCloseTopup}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='500px !important'
                    height='auto !important'
                    overflowY='scroll'
                    bgcolor='#fff'
                    border='1px solid #F5F5F5'
                    borderRadius='5px'
                    boxShadow='24'
                    p='25px'
                >
                    <div className={`${styles.modal_content}`}>
                        <div className={`${styles.modal_header} mb-0`}>
                            <h5 className='mb-0' style={{
                                fontSize: '19px',
                                fontWeight: '700',

                            }}>Invite Admin</h5>
                            <span onClick={handleCloseTopup} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <p className='text-muted mt-1' style={{ fontSize: '14px' }}>Add Admin to manage the dashboard</p>

                        <form action="" className="mt-3">
                            <div className="row">
                                <div className="col-12 mb-3">

                                    <label htmlFor="ounit">Email Address</label>
                                    <div className="">
                                        <div className="" style={{ width: '100%' }}>
                                            <div className="">
                                                <TextField
                                                    name="min_products"
                                                    required
                                                    type='email'
                                                    id="ounit"
                                                    placeholder="jbennjoku@gmail.com"
                                                    size="small"
                                                    fullWidth

                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-12 mb-1">

                                    <label htmlFor="ounit">Role</label>
                                    <div className="">
                                        <div className="" style={{ width: '100%' }}>
                                            <div className="mb-3">
                                                <TextField
                                                    name="min_products"
                                                    required
                                                    type='text'
                                                    id="ounit"
                                                    placeholder="Manage Route"
                                                    size="small"
                                                    fullWidth

                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-success w-100 d-block" data-dismiss="modal" aria-label="Close">Invite Admin</button>
                            </div>
                            {/* <div className="mb-4">
                <button type="button" className={`${styles.modal_btn} btn btn-block`}>
                    Proceed
                </button>
            </div> */}
                        </form>
                    </div>
                </GlobalModal>

        </>
    );
}
