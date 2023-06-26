

// ----------------------------------------------------------------------
import styles from "./Payment.module.css"
import * as React from 'react';
import TextField from '@mui/material/TextField';

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
                <div className="mt-md-3">
                    <div className="row border-top border-bottom py-3">
                        <div className="col-md-3">
                            <p className="font-weight-bold">Card details</p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-9">
                                    <p className="mb-1" style={{fontSize: '14px'}}>Name on card</p>
                                    <TextField
                                        required
                                        name="max_products"
                                        type='text'
                                        placeholder="Olivia Rhye "
                                        size="small"
                                        fullWidth
                                    />

                                    <p className="mb-1 mt-3" style={{fontSize: '14px'}}>Card Number</p>
                                    <div className="position-relative">
                                        <div 
                                            className="float-left position-absolute"
                                            style={{
                                                top: '50%',
                                                left: '7px',
                                                transform: 'translate(0%, -50%)',
                                                zIndex: '99',
                                                overflow: 'hidden',
                                                width: 'fit-content',
                                                height: 'auto',
                                            }} alt="" 
                                        >
                                            <img src="/assets/icons/Payment-method.png" alt="Mastercard" style={{transform: 'scale(1.2)'}} />
                                        </div>
                                        <TextField
                                            required
                                            name="max_products"
                                            type='number'
                                            placeholder="1234 1234 1234 1234"
                                            size="small"
                                            fullWidth
                                            className={`${styles.card_no_input}`}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <p className="mb-1 mt-3 mt-md-0" style={{fontSize: '14px'}}>Expiry</p>
                                    <TextField
                                        required
                                        name="max_products"
                                        type='number'
                                        placeholder="06 / 2024 "
                                        size="small"
                                        fullWidth
                                    />
                                    
                                    <p className="mb-1 mt-3" style={{fontSize: '14px'}}>CVV</p>
                                    <TextField
                                        required
                                        name="max_products"
                                        type='number'
                                        placeholder="***"
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row border-bottom pt-4 pb-2">
                        <div className="col-md-3">
                            <p className="m-0 font-weight-bold">Email address</p>
                            <p><small className="text-muted font-weight-normal">Invoices will be sent to this email address.</small></p>
                        </div>
                        <div className="col-md-6">
                            <TextField
                                required
                                name="max_products"
                                type='email'
                                placeholder="billing@untitledui.com"
                                size="small"
                                fullWidth
                            />
                        </div>
                    </div>
                    
                    <div className="row border-bottom py-4">
                        <div className="col-md-3">
                            <p className="m-0 mb-2 font-weight-bold">Address</p>
                        </div>
                        <div className="col-md-6">
                            <TextField
                                required
                                name="max_products"
                                type='text'
                                placeholder="100, Smith Street"
                                size="small"
                                fullWidth
                            />
                        </div>
                    </div>
                    
                    <div className="row border-bottom py-4">
                        <div className="col-md-3">
                            <p className="m-0 mb-2 font-weight-bold">City</p>
                        </div>
                        <div className="col-md-6">
                            <TextField
                                required
                                name="max_products"
                                type='text'
                                placeholder="Collingwood"
                                size="small"
                                fullWidth
                            />
                        </div>
                    </div>
                    
                    <div className="row border-bottom py-4">
                        <div className="col-md-3">
                            <p className="m-0 mb-2 font-weight-bold">State / Province</p>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex">
                                <div className="mr-3">
                                    <TextField
                                        required
                                        name="max_products"
                                        type='text'
                                        placeholder="VIC"
                                        size="small"
                                        fullWidth
                                        style={{width: '7em'}}
                                    />
                                </div>
                                <div className="">
                                    <TextField
                                        required
                                        name="max_products"
                                        type='number'
                                        placeholder="3066"
                                        size="small"
                                        fullWidth
                                        style={{width: '7em'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row py-4">
                        <div className="col-md-3">
                            <p className="m-0 mb-2 font-weight-bold">Country</p>
                        </div>
                        <div className="col-md-6">
                            <TextField
                                required
                                name="max_products"
                                type='text'
                                placeholder="Australia"
                                size="small"
                                fullWidth
                            />
                        </div>
                    </div>
                    
                    <div className="py-4">
                        <div className="ml-auto" style={{width: 'fit-content'}}> 
                            <button className="btn btn-default border rounded mx-3">Cancel</button>
                            <button className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
