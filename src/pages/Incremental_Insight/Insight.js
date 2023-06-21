

// ----------------------------------------------------------------------
import styles from "./Insight.module.css"
import ReactApexChart from 'react-apexcharts';

import {
    Card,
    CardContent,
} from '@mui/material';
import { useState } from "react";
import GlobalModal from "src/Modals/GlobalModal";

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';




// ----------------------------------------------------------------------


export default function DashboardAppPage() {
    const [rvModalOpen, setRvModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [hpModalOpen, setHpModalOpen] = useState(false);
    const [toAndCoModalOpen, setToAndCoModalOpen] = useState(false);
    const [msModalOpen, setMsModalOpen] = useState(false);
    const [sbpModalOpen, setSbpModalOpen] = useState(false);

    const handleCloseRvModal = () => {
        setRvModalOpen(false);
    };
    const handleClose = () => {
        setModalOpen(false);
    };
    const handleCloseHpModal = () => {
        setHpModalOpen(false);
    };
    const handleCloseToAndCoModal = () => {
        setToAndCoModalOpen(false);
    };
    const handleCloseMsModal = () => {
        setMsModalOpen(false);
    };
    const handleCloseSbpModal = () => {
        setSbpModalOpen(false);
    };

    // ==============================  For tabs  ================================================
    const [selectedTab, setSelectedTab] = useState(1);
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    //  ================================= Sign up and Stat =========================================
    const [timeToResolutionChartOptions] = useState({
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        },
        colors: ['#3763EA', '#57B464', '#E62F2C'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'],
        },

        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val
                }
            }
        }
    })
    const [timeToResolutionChartSeries] = useState(
        [{
            name: 'Total Trips',
            data: [900, 550, 800, 810, 810, 600, 400, 400]
        },
        {
            name: 'Completed Trips',
            data: [800, 700, 600, 500, 800, 700, 650, 600]
        },
        {
            name: 'Pending',
            data: [650, 700, 750, 890, 800, 400, 350, 480]
        }]
    )


    // ===============================Total Orders and Co Chart=========================================

    const [chartSeries2] = useState(
        [35, 3, 8, 3, 10, 15, 5, 21
        ]
    )

    const [chartOptionsPie] = useState({
        chart: {
            type: 'pie',
            toolbar: {
                show: false,
            },
        },
        legend: {
            position: 'top'
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#85E13A', '#D444F1', '#16B364', '#06AED4', '#2E90FA', '#875BF7', '#F63D68', '#EAAA08'],
        labels: ['Nigeria', 'Ghana', 'Egypt', 'Benin', 'Liberia', 'Togo', 'Sierralone', 'Senegal'],

        plotOptions: {
            pie: {
                labels: {
                    formatter: function (val, opts) {
                        var value = chartSeries2[opts.index];
                        return val + ' - ' + value;
                    }
                }
            },
        },

        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            }
        }
    })
    const [chartSeriesPie] = useState(
        [35, 3, 8, 3, 10, 15, 5, 21]
    )

    //   Bounce rate
    const [bounceRateChartOptions] = useState({
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#57B464'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '20%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        xaxis: {
            categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'],
        },
        yaxis: {
            labels: {
                formatter: function (val, index) {
                    return '' + val;
                }
            }
        },

        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val
                }
            }
        }
    })
    const [bounceRateChartSeries] = useState(
        [{
            name: 'Revenue',
            data: [920, 550, 800, 1000, 810, 600, 400]
        }]
    )

    return (
        <>
            <div className="mt-md-5 mt-4 pt-3 px-0 px-md-2">
                <div className="header d-block d-md-none mb-4">
                    <div className={`${styles.wallet_actions} d-md-flex justify-content-between`}>
                        <div className=" ">
                            <h4 className={`mb-0 pb-0`}>Incremental Insight</h4>
                            <p style={{ fontSize: '14px' }} className={`mb-0 mt-2 pb-0`}>
                                An overview of your business performance
                            </p>

                        </div>


                    </div>


                </div>

                {/* Bounce Rate */}
                <Card style={{ marginBottom: '20px', borderRadius: '10px' }} className='p-0 pt-md-5 mt-md-5'>
                    <CardContent>
                        <div className={`${styles.insight_header} pl-md-5`}>
                            <div className="d-md-flex justify-content-between" style={{alignItems: 'center'}}>
                                <div>
                                    <h5 className="mb-2">
                                        Peak Period
                                    </h5>
                                    <p>
                                        View the period that has the highest demand
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <div className="dropleft ">
                                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                        </div>
                                    </div>
                                    &nbsp;
                                    &nbsp;
                                    <div className="dropleft ">
                                        <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} btn m-0`}>
                                            <span style={{
                                                paddingTop: '8px',


                                            }}>
                                                <img src="/assets/icons/download.svg" alt="" /> &nbsp;
                                                Export
                                            </span>
                                            &nbsp;
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

                                            </span>


                                        </button>

                                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                            <button type="button" className="rss dropdown-item btn border-0">CSV</button>
                                            <button type="button" className="rss dropdown-item btn border-0">Excel </button>
                                            <button type="button" className="rss dropdown-item btn border-0">PDF </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="d-md-flex flex-wrap justify-content-between mt-md-0 mt-4 pt-2" style={{alignItems: 'center', gap: '15px'}}>
                                <div className=" mb-2">
                                    <div className="d-md-flex">
                                        <div className="">
                                            <div className="card  p-0 overallYearlyMonthly"  >
                                                <div className="card-body d-flex justify-content-around  pb-0 pt-1" style={{gap: '10px'}}>
                                                    <label htmlFor="ov2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="ov2" /> Overall
                                                    </label>
                                                    <label htmlFor="year2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="year2" /> Yearly
                                                    </label>
                                                    <label htmlFor="month2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="month2" /> Monthly
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="ml-md-4 mt-3 mt-md-0">
                                            <div className="m-0">
                                                <div className="">
                                                    <div className="p-0">
                                                        <span className="dateControl">
                                                            <span className={`${styles.arrowSpan}`}>
                                                                <img width={'20px'} src="/assets/icons/left_arrow.svg" alt="arrow" className={`${styles.newStyle} mr-2`} />
                                                            </span>
                                                            <span className={`${styles.year_styles}`}>2023</span>
                                                            <span className={`${styles.arrowSpan}`}>
                                                                <img width={'20px'} src="/assets/icons/right_arrow.svg" alt="arrow" className={`${styles.newStyle} ml-2`} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="d-md-flex mb-2" style={{justifyContent: 'center', alignItems: 'center' ,gap: '15px'}}>
                                        <label htmlFor="vehicles">Route:</label>
                                        <Select
                                            labelId="s"
                                            id="s"
                                            fullWidth
                                            size="small"
                                            required
                                            name="verified"
                                            defaultValue='select'
                                        >

                                            <MenuItem value='select'>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Sabo-Yaba
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            VI (Eko Hotel)
                                                        </span>

                                                    </div>
                                                    <div className="initials ml-2">
                                                        {/* AM */}
                                                        <img src="/assets/icons/to-fro.png" alt="" style={{ width: 'auto' }} />
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem value='opt2'>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Ijebu 
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            Oshodi
                                                        </span>

                                                    </div>
                                                    <div className="initials ml-2">
                                                        {/* AM */}
                                                        <img src="/assets/icons/to-fro.png" alt="" style={{ width: 'auto' }} />
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem value='opt3'>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Lekki
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            VI (Eko Hotel)
                                                        </span>

                                                    </div>
                                                    <div className="initials ml-2">
                                                        {/* AM */}
                                                        <img src="/assets/icons/to-fro.png" alt="" style={{ width: 'auto' }} />
                                                    </div>

                                                </div>
                                            </MenuItem>
                                            <MenuItem value='opt4'>
                                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    
                                                    <div className=" ">
                                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                                            <strong>
                                                                Sabo-Yaba
                                                            </strong>
                                                        </p>
                                                        <span style={{ fontSize: '14px' }}>
                                                            VI (Eko Hotel)
                                                        </span>

                                                    </div>
                                                    <div className="initials ml-2">
                                                        {/* AM */}
                                                        <img src="/assets/icons/to-fro.png" alt="" style={{ width: 'auto' }} />
                                                    </div>

                                                </div>
                                            </MenuItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="card  p-0 " style={{minWidth: '15em'}} >
                                        <div className="card-body d-flex justify-content-around pb-0 pt-1">
                                            <label htmlFor="tabbs">
                                                <input type="radio"
                                                    id="tabbs"
                                                    name="tabsss"
                                                    value={1}
                                                    checked={selectedTab === 1}
                                                    onChange={() => handleTabChange(1)}
                                                    className="mt-2 mr-2"
                                                />
                                                Bar Chart
                                            </label>
                                            <label htmlFor="ttab2">
                                                <input type="radio"
                                                    id="ttab2"
                                                    name="tabsss"
                                                    value={2}
                                                    checked={selectedTab === 2}
                                                    onChange={() => handleTabChange(2)}
                                                    className="mt-2 mr-2"
                                                />
                                                Line Chart
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {selectedTab === 1 && (
                                <div>
                                    {/* Content for Tab 1 */}
                                    <ReactApexChart type="bar" series={bounceRateChartSeries} options={bounceRateChartOptions} height={500} />
                                </div>
                            )}
                            {selectedTab === 2 && (
                                <div>
                                    {/* Content for Tab 2 */}
                                    <ReactApexChart type="line" series={bounceRateChartSeries} options={bounceRateChartOptions} height={500} />
                                </div>
                            )}

                        </div>

                        {/* <ReactApexChart type="bar" series={chartSeries3} options={chartOptions3} height={500} /> */}

                    </CardContent>

                </Card>

                {/* Recurring revenue */}
                <Card style={{ marginBottom: '20px', borderRadius: '10px', marginTop: '40px'}} className='p-0'>
                    <CardContent>
                        <div className={`${styles.insight_header} pl-md-5`}>
                            <div className="d-md-flex justify-content-between" style={{alignItems: 'center'}}>
                                <div>
                                    <h5 className="mb-2">
                                        Customer Base
                                    </h5>
                                    <p>
                                        A view of products' market share
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <div className="dropleft ">
                                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                        </div>
                                    </div>
                                    &nbsp;
                                    &nbsp;
                                    <div className="dropleft ">
                                        <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} btn m-0`}>
                                            <span style={{
                                                paddingTop: '8px',


                                            }}>
                                                <img src="/assets/icons/download.svg" alt="" /> &nbsp;
                                                Export
                                            </span>
                                            &nbsp;
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

                                            </span>


                                        </button>

                                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                            <button type="button" className="rss dropdown-item btn border-0">CSV</button>
                                            <button type="button" className="rss dropdown-item btn border-0">Excel </button>
                                            <button type="button" className="rss dropdown-item btn border-0">PDF </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-md-0 mt-4">
                                <div className="col-md-6 mb-2 mt-4">
                                    <div className="d-md-flex">
                                        <div className="">
                                            <div className="card  p-0 overallYearlyMonthly"  >
                                                <div className="card-body d-flex justify-content-around  pb-0 pt-1" style={{gap: '10px'}}>
                                                    <label htmlFor="ov2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="ov2" /> Overall
                                                    </label>
                                                    <label htmlFor="year2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="year2" /> Yearly
                                                    </label>
                                                    <label htmlFor="month2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="month2" /> Monthly
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="ml-md-4 mt-3 mt-md-0">
                                            <div className="m-0">
                                                <div className="">
                                                    <div className="p-0">
                                                        <span className="dateControl">
                                                            <span className={`${styles.arrowSpan}`}>
                                                                <img width={'20px'} src="/assets/icons/left_arrow.svg" alt="arrow" className={`${styles.newStyle} mr-2`} />
                                                            </span>
                                                            <span className={`${styles.year_styles}`}>2023</span>
                                                            <span className={`${styles.arrowSpan}`}>
                                                                <img width={'20px'} src="/assets/icons/right_arrow.svg" alt="arrow" className={`${styles.newStyle} ml-2`} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <ReactApexChart type="line" series={rrChartSeries} options={rrChartOptionLine} height={500} /> */}
                            <ReactApexChart type="pie" series={chartSeriesPie} options={chartOptionsPie} height={350} />
                        </div>

                    </CardContent>

                </Card>

                {/* Recurring revenue */}
                <Card style={{ marginBottom: '20px', borderRadius: '10px', marginTop: '40px'}} className='p-0'>
                    <CardContent>
                        <div className={`${styles.insight_header} pl-md-5`}>
                            <div className="d-md-flex justify-content-between" style={{alignItems: 'center'}}>
                                <div>
                                    <h5 className="mb-2">
                                        Highest Performing Route
                                    </h5>
                                    <p>
                                        Monitor how your stores perform in different areas
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <div className="dropleft ">
                                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                        </div>
                                    </div>
                                    &nbsp;
                                    &nbsp;
                                    <div className="dropleft ">
                                        <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} btn m-0`}>
                                            <span style={{
                                                paddingTop: '8px',


                                            }}>
                                                <img src="/assets/icons/download.svg" alt="" /> &nbsp;
                                                Export
                                            </span>
                                            &nbsp;
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

                                            </span>


                                        </button>

                                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                            <button type="button" className="rss dropdown-item btn border-0">CSV</button>
                                            <button type="button" className="rss dropdown-item btn border-0">Excel </button>
                                            <button type="button" className="rss dropdown-item btn border-0">PDF </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-md-0 mt-4">
                                <div className="col-md-6 mb-2 mt-4">
                                    <div className="d-md-flex">
                                        <div className="">
                                            <div className="card  p-0 overallYearlyMonthly"  >
                                                <div className="card-body d-flex justify-content-around  pb-0 pt-1" style={{gap: '10px'}}>
                                                    <label htmlFor="ov2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="ov2" /> Overall
                                                    </label>
                                                    <label htmlFor="year2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="year2" /> Yearly
                                                    </label>
                                                    <label htmlFor="month2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="month2" /> Monthly
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="ml-md-4 mt-3 mt-md-0">
                                            <div className="m-0">
                                                <div className="">
                                                    <div className="p-0">
                                                        <span className="dateControl">
                                                            <span className={`${styles.arrowSpan}`}>
                                                                <img width={'20px'} src="/assets/icons/left_arrow.svg" alt="arrow" className={`${styles.newStyle} mr-2`} />
                                                            </span>
                                                            <span className={`${styles.year_styles}`}>2023</span>
                                                            <span className={`${styles.arrowSpan}`}>
                                                                <img width={'20px'} src="/assets/icons/right_arrow.svg" alt="arrow" className={`${styles.newStyle} ml-2`} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ReactApexChart type="bar" series={bounceRateChartSeries} options={bounceRateChartOptions} height={500} />
                            {/* <ReactApexChart type="bar" series={rrChartSeries} options={rrChartOptionLine} height={500} /> */}
                            {/* <ReactApexChart type="pie" series={chartSeriesPie} options={chartOptionsPie} height={350} /> */}
                        </div>

                    </CardContent>

                </Card>

                {/* Completed Abandoned Order */}
                <Card style={{ marginBottom: '20px', borderRadius: '10px', marginTop: '40px' }} className='p-0'>
                    <CardContent>
                        <div className={`${styles.insight_header} pl-md-5`}>
                            <div className="d-md-flex justify-content-between" style={{alignItems: 'center'}}>
                                <div>
                                    <h5 className="mb-2">
                                        Total Trip, Completed Trips and Pending Trips
                                    </h5>
                                    <p>
                                        Compare total orders with completion and abandonment rates
                                    </p>
                                </div>
                                <div className="d-flex">
                                    <div className="dropleft ">
                                        <button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className={`${styles.export_btn} btn m-0`}>
                                            <span style={{
                                                paddingTop: '8px',


                                            }}>
                                                <img src="/assets/icons/download.svg" alt="" /> &nbsp;
                                                Export
                                            </span>
                                            &nbsp;
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

                                            </span>


                                        </button>

                                        <div className="dropdown-menu drop-left" aria-labelledby="dropdownMenuButton">
                                            <button type="button" className="rss dropdown-item btn border-0">CSV</button>
                                            <button type="button" className="rss dropdown-item btn border-0">Excel </button>
                                            <button type="button" className="rss dropdown-item btn border-0">Pdf </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="d-md-flex mt-md-0 mt-4">
                                <div className="mb-2 mt-4">
                                    <div className="d-md-flex ">
                                        <div className="">
                                            <div className="card  p-0 m-0 overallYearlyMonthly"  >
                                                <div className="card-body d-flex justify-content-around  pb-0 pt-1" style={{gap: '10px'}}>
                                                    <label htmlFor="ov2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="ov2" /> Overall
                                                    </label>
                                                    <label htmlFor="year2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="year2" /> Yearly
                                                    </label>
                                                    <label htmlFor="month2">
                                                        <input type="radio" className="mt-2 mr-1" name="insight_shoppers" id="month2" /> Monthly
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="ml-md-4 mt-3 mt-md-0">
                                            <div className="m-0">
                                                <div className="">
                                                    <div className="p-0">
                                                        <span className="dateControl">
                                                            <span className={`${styles.arrowSpan}`}>
                                                                <img width={'20px'} src="/assets/icons/left_arrow.svg" alt="arrow" className={`${styles.newStyle} mr-2`} />
                                                            </span>
                                                            <span className={`${styles.year_styles}`}>2023</span>
                                                            <span className={`${styles.arrowSpan}`}>
                                                                <img width={'20px'} src="/assets/icons/right_arrow.svg" alt="arrow" className={`${styles.newStyle} ml-2`} />
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <ReactApexChart type="line" series={timeToResolutionChartSeries} options={timeToResolutionChartOptions} height={500} />
                        </div>


                    </CardContent>

                </Card>

                <GlobalModal
                    open={modalOpen}
                    onClose={handleClose}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='740px !important'
                    height='auto !important'
                    maxHeight='50vh !important'
                    overflow='scroll'
                    bgcolor='#fff'
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
                            <span onClick={handleClose} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <div className={`${styles.modal_content} row`}>
                            <div className="col-md-6">
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">All Products</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Products
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample04" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample04">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Nestle Milo</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Pure life table water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Nescafe</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Kitkat</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Maggi</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="allprod_wrapper">
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Category
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample01" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample01">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Beverages</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Snacks</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Milk</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Table Water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Groceries</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.bordered_sect} col-md-6`} style={{
                                borderLeft: '2px solid #ddd'
                            }}>
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">Location/Store</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                        <div className="row my-0 py-0">
                                            <div className="col-5 py-0 my-0">
                                                <label htmlFor="country">
                                                    <input type="checkbox" name="country" id="country" />
                                                    &nbsp;&nbsp;Nigeria
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample02" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse pl-1" id="collapseExample02">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <div className="row mt-3">
                                                    <div className="col-5 py-0 my-0">
                                                        <label htmlFor="state">
                                                            <input type="checkbox" name="state" id="state" />
                                                            &nbsp;&nbsp;Lagos
                                                        </label>
                                                    </div>
                                                    <div className="col-5 py-0 my-0">
                                                        <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample03" aria-expanded="false" aria-controls="collapseExample">
                                                            <label>
                                                                <input type="checkbox" name="" />
                                                                <span>
                                                                    <i className="bi bi-chevron-down"></i>
                                                                </span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="collapse pl-1" id="collapseExample03">
                                                    <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                        <p>
                                                            <label htmlFor="milo2">
                                                                <input type="checkbox" name="milo2" id="milo2" />
                                                                &nbsp;&nbsp;<span>Mama tee superstore</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="water2">
                                                                <input type="checkbox" name="water2" id="water2" />
                                                                &nbsp;&nbsp;<span>Shoprite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="nescafe2">
                                                                <input type="checkbox" name="nescafe2" id="nescafe2" />
                                                                &nbsp;&nbsp;<span>Justrite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="kitkat2">
                                                                <input type="checkbox" name="kitkat2" id="kitkat2" />
                                                                &nbsp;&nbsp;<span>Mallmart</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="maggi2">
                                                                <input type="checkbox" name="maggi2" id="maggi2" />
                                                                &nbsp;&nbsp;<span>Jendol</span>
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-primary w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                        </div>

                    </div>


                </GlobalModal>

                <GlobalModal
                    open={rvModalOpen}
                    onClose={handleCloseRvModal}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='740px !important'
                    height='auto !important'
                    maxHeight='50vh !important'
                    overflow='scroll'
                    bgcolor='#fff'
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
                            <span onClick={handleCloseRvModal} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <div className={`${styles.modal_content} row`}>
                            <div className="col-md-6">
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">All Products</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Products
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample04" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample04">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Nestle Milo</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Pure life table water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Nescafe</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Kitkat</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Maggi</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="allprod_wrapper">
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Category
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample01" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample01">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Beverages</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Snacks</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Milk</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Table Water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Groceries</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.bordered_sect} col-md-6`} style={{
                                borderLeft: '2px solid #ddd'
                            }}>
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">Location/Store</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                        <div className="row my-0 py-0">
                                            <div className="col-5 py-0 my-0">
                                                <label htmlFor="country">
                                                    <input type="checkbox" name="country" id="country" />
                                                    &nbsp;&nbsp;Nigeria
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample02" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse pl-1" id="collapseExample02">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <div className="row mt-3">
                                                    <div className="col-5 py-0 my-0">
                                                        <label htmlFor="state">
                                                            <input type="checkbox" name="state" id="state" />
                                                            &nbsp;&nbsp;Lagos
                                                        </label>
                                                    </div>
                                                    <div className="col-5 py-0 my-0">
                                                        <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample03" aria-expanded="false" aria-controls="collapseExample">
                                                            <label>
                                                                <input type="checkbox" name="" />
                                                                <span>
                                                                    <i className="bi bi-chevron-down"></i>
                                                                </span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="collapse pl-1" id="collapseExample03">
                                                    <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                        <p>
                                                            <label htmlFor="milo2">
                                                                <input type="checkbox" name="milo2" id="milo2" />
                                                                &nbsp;&nbsp;<span>Mama tee superstore</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="water2">
                                                                <input type="checkbox" name="water2" id="water2" />
                                                                &nbsp;&nbsp;<span>Shoprite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="nescafe2">
                                                                <input type="checkbox" name="nescafe2" id="nescafe2" />
                                                                &nbsp;&nbsp;<span>Justrite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="kitkat2">
                                                                <input type="checkbox" name="kitkat2" id="kitkat2" />
                                                                &nbsp;&nbsp;<span>Mallmart</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="maggi2">
                                                                <input type="checkbox" name="maggi2" id="maggi2" />
                                                                &nbsp;&nbsp;<span>Jendol</span>
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-primary w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                        </div>

                    </div>


                </GlobalModal>

                <GlobalModal
                    open={hpModalOpen}
                    onClose={handleCloseHpModal}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='740px !important'
                    height='auto !important'
                    maxHeight='50vh !important'
                    overflow='scroll'
                    bgcolor='#fff'
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
                            <span onClick={handleCloseHpModal} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <div className={`${styles.modal_content} row`}>
                            <div className="col-md-6">
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">All Products</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Products
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample04" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample04">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Nestle Milo</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Pure life table water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Nescafe</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Kitkat</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Maggi</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="allprod_wrapper">
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Category
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample01" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample01">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Beverages</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Snacks</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Milk</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Table Water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Groceries</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.bordered_sect} col-md-6`} style={{
                                borderLeft: '2px solid #ddd'
                            }}>
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">Location/Store</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                        <div className="row my-0 py-0">
                                            <div className="col-5 py-0 my-0">
                                                <label htmlFor="country">
                                                    <input type="checkbox" name="country" id="country" />
                                                    &nbsp;&nbsp;Nigeria
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample02" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse pl-1" id="collapseExample02">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <div className="row mt-3">
                                                    <div className="col-5 py-0 my-0">
                                                        <label htmlFor="state">
                                                            <input type="checkbox" name="state" id="state" />
                                                            &nbsp;&nbsp;Lagos
                                                        </label>
                                                    </div>
                                                    <div className="col-5 py-0 my-0">
                                                        <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample03" aria-expanded="false" aria-controls="collapseExample">
                                                            <label>
                                                                <input type="checkbox" name="" />
                                                                <span>
                                                                    <i className="bi bi-chevron-down"></i>
                                                                </span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="collapse pl-1" id="collapseExample03">
                                                    <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                        <p>
                                                            <label htmlFor="milo2">
                                                                <input type="checkbox" name="milo2" id="milo2" />
                                                                &nbsp;&nbsp;<span>Mama tee superstore</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="water2">
                                                                <input type="checkbox" name="water2" id="water2" />
                                                                &nbsp;&nbsp;<span>Shoprite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="nescafe2">
                                                                <input type="checkbox" name="nescafe2" id="nescafe2" />
                                                                &nbsp;&nbsp;<span>Justrite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="kitkat2">
                                                                <input type="checkbox" name="kitkat2" id="kitkat2" />
                                                                &nbsp;&nbsp;<span>Mallmart</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="maggi2">
                                                                <input type="checkbox" name="maggi2" id="maggi2" />
                                                                &nbsp;&nbsp;<span>Jendol</span>
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-primary w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                        </div>

                    </div>


                </GlobalModal>

                <GlobalModal
                    open={toAndCoModalOpen}
                    onClose={handleCloseToAndCoModal}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='740px !important'
                    height='auto !important'
                    maxHeight='50vh !important'
                    overflow='scroll'
                    bgcolor='#fff'
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
                            <span onClick={handleCloseToAndCoModal} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <div className={`${styles.modal_content} row`}>
                            <div className="col-md-6">
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">All Products</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Products
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample04" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample04">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Nestle Milo</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Pure life table water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Nescafe</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Kitkat</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Maggi</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="allprod_wrapper">
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Category
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample01" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample01">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Beverages</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Snacks</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Milk</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Table Water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Groceries</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.bordered_sect} col-md-6`} style={{
                                borderLeft: '2px solid #ddd'
                            }}>
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">Location/Store</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                        <div className="row my-0 py-0">
                                            <div className="col-5 py-0 my-0">
                                                <label htmlFor="country">
                                                    <input type="checkbox" name="country" id="country" />
                                                    &nbsp;&nbsp;Nigeria
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample02" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse pl-1" id="collapseExample02">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <div className="row mt-3">
                                                    <div className="col-5 py-0 my-0">
                                                        <label htmlFor="state">
                                                            <input type="checkbox" name="state" id="state" />
                                                            &nbsp;&nbsp;Lagos
                                                        </label>
                                                    </div>
                                                    <div className="col-5 py-0 my-0">
                                                        <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample03" aria-expanded="false" aria-controls="collapseExample">
                                                            <label>
                                                                <input type="checkbox" name="" />
                                                                <span>
                                                                    <i className="bi bi-chevron-down"></i>
                                                                </span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="collapse pl-1" id="collapseExample03">
                                                    <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                        <p>
                                                            <label htmlFor="milo2">
                                                                <input type="checkbox" name="milo2" id="milo2" />
                                                                &nbsp;&nbsp;<span>Mama tee superstore</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="water2">
                                                                <input type="checkbox" name="water2" id="water2" />
                                                                &nbsp;&nbsp;<span>Shoprite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="nescafe2">
                                                                <input type="checkbox" name="nescafe2" id="nescafe2" />
                                                                &nbsp;&nbsp;<span>Justrite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="kitkat2">
                                                                <input type="checkbox" name="kitkat2" id="kitkat2" />
                                                                &nbsp;&nbsp;<span>Mallmart</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="maggi2">
                                                                <input type="checkbox" name="maggi2" id="maggi2" />
                                                                &nbsp;&nbsp;<span>Jendol</span>
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-primary w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                        </div>

                    </div>


                </GlobalModal>

                <GlobalModal
                    open={msModalOpen}
                    onClose={handleCloseMsModal}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='740px !important'
                    height='auto !important'
                    maxHeight='50vh !important'
                    overflow='scroll'
                    bgcolor='#fff'
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
                            <span onClick={handleCloseMsModal} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <div className={`${styles.modal_content} row`}>
                            <div className="col-md-6">
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">All Products</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Products
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample04" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample04">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Nestle Milo</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Pure life table water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Nescafe</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Kitkat</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Maggi</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="allprod_wrapper">
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Category
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample01" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample01">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Beverages</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Snacks</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Milk</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Table Water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Groceries</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.bordered_sect} col-md-6`} style={{
                                borderLeft: '2px solid #ddd'
                            }}>
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">Location/Store</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                        <div className="row my-0 py-0">
                                            <div className="col-5 py-0 my-0">
                                                <label htmlFor="country">
                                                    <input type="checkbox" name="country" id="country" />
                                                    &nbsp;&nbsp;Nigeria
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample02" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse pl-1" id="collapseExample02">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <div className="row mt-3">
                                                    <div className="col-5 py-0 my-0">
                                                        <label htmlFor="state">
                                                            <input type="checkbox" name="state" id="state" />
                                                            &nbsp;&nbsp;Lagos
                                                        </label>
                                                    </div>
                                                    <div className="col-5 py-0 my-0">
                                                        <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample03" aria-expanded="false" aria-controls="collapseExample">
                                                            <label>
                                                                <input type="checkbox" name="" />
                                                                <span>
                                                                    <i className="bi bi-chevron-down"></i>
                                                                </span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="collapse pl-1" id="collapseExample03">
                                                    <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                        <p>
                                                            <label htmlFor="milo2">
                                                                <input type="checkbox" name="milo2" id="milo2" />
                                                                &nbsp;&nbsp;<span>Mama tee superstore</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="water2">
                                                                <input type="checkbox" name="water2" id="water2" />
                                                                &nbsp;&nbsp;<span>Shoprite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="nescafe2">
                                                                <input type="checkbox" name="nescafe2" id="nescafe2" />
                                                                &nbsp;&nbsp;<span>Justrite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="kitkat2">
                                                                <input type="checkbox" name="kitkat2" id="kitkat2" />
                                                                &nbsp;&nbsp;<span>Mallmart</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="maggi2">
                                                                <input type="checkbox" name="maggi2" id="maggi2" />
                                                                &nbsp;&nbsp;<span>Jendol</span>
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-primary w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                        </div>

                    </div>


                </GlobalModal>

                <GlobalModal
                    open={sbpModalOpen}
                    onClose={handleCloseSbpModal}
                    position='absolute'
                    top='50%'
                    left='50%'
                    transform='translate(-50%, -50%)'
                    width='740px !important'
                    height='auto !important'
                    maxHeight='50vh !important'
                    overflow='scroll'
                    bgcolor='#fff'
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
                            <span onClick={handleCloseSbpModal} style={{ cursor: 'pointer' }}>
                                <img src="/assets/icons/x.svg" alt="" />

                            </span>

                        </div>
                        <div className={`${styles.modal_content} row`}>
                            <div className="col-md-6">
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">All Products</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Products
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample04" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample04">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Nestle Milo</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Pure life table water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Nescafe</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Kitkat</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Maggi</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="allprod_wrapper">
                                    <div className={`${styles.modal_body}`}>
                                        <div className="row my-0 py-0">
                                            <div className="col-7 py-0 my-0">
                                                <label htmlFor="allprod">
                                                    <input type="checkbox" name="allprod" id="allprod" />
                                                    &nbsp;&nbsp;All Category
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample01" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse" id="collapseExample01">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <p>
                                                    <label htmlFor="milo1">
                                                        <input type="checkbox" name="milo1" id="milo1" />
                                                        &nbsp;&nbsp;<span>Beverages</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="water1">
                                                        <input type="checkbox" name="water1" id="water1" />
                                                        &nbsp;&nbsp;<span>Snacks</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="nescafe1">
                                                        <input type="checkbox" name="nescafe1" id="nescafe1" />
                                                        &nbsp;&nbsp;<span>Milk</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="kitkat1">
                                                        <input type="checkbox" name="kitkat1" id="kitkat1" />
                                                        &nbsp;&nbsp;<span>Table Water</span>
                                                    </label>
                                                </p>
                                                <p>
                                                    <label htmlFor="maggi1">
                                                        <input type="checkbox" name="maggi1" id="maggi1" />
                                                        &nbsp;&nbsp;<span>Groceries</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.bordered_sect} col-md-6`} style={{
                                borderLeft: '2px solid #ddd'
                            }}>
                                <div className="allprod_wrapper">
                                    <div className="modal-header" style={{ border: 'none' }}>
                                        <h5 className="modal-title" id="exampleModalLabel">Location/Store</h5>
                                    </div>
                                    <div className={`${styles.modal_body}`}>
                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                        <div className="row my-0 py-0">
                                            <div className="col-5 py-0 my-0">
                                                <label htmlFor="country">
                                                    <input type="checkbox" name="country" id="country" />
                                                    &nbsp;&nbsp;Nigeria
                                                </label>
                                            </div>
                                            <div className="col-5 py-0 my-0">
                                                <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample02" aria-expanded="false" aria-controls="collapseExample">
                                                    <label>
                                                        <input type="checkbox" name="" />
                                                        <span>
                                                            <i className="bi bi-chevron-down"></i>
                                                        </span>
                                                    </label>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="collapse pl-1" id="collapseExample02">
                                            <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                <div className="row mt-3">
                                                    <div className="col-5 py-0 my-0">
                                                        <label htmlFor="state">
                                                            <input type="checkbox" name="state" id="state" />
                                                            &nbsp;&nbsp;Lagos
                                                        </label>
                                                    </div>
                                                    <div className="col-5 py-0 my-0">
                                                        <span className={`${styles.span}`} data-toggle="collapse" data-target="#collapseExample03" aria-expanded="false" aria-controls="collapseExample">
                                                            <label>
                                                                <input type="checkbox" name="" />
                                                                <span>
                                                                    <i className="bi bi-chevron-down"></i>
                                                                </span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="collapse pl-1" id="collapseExample03">
                                                    <div className="card card-body pl-5 pb-0" style={{ border: 'none' }}>
                                                        <p><input type="text" className="form-control" placeholder="Search..." name="" id="" /></p>
                                                        <p>
                                                            <label htmlFor="milo2">
                                                                <input type="checkbox" name="milo2" id="milo2" />
                                                                &nbsp;&nbsp;<span>Mama tee superstore</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="water2">
                                                                <input type="checkbox" name="water2" id="water2" />
                                                                &nbsp;&nbsp;<span>Shoprite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="nescafe2">
                                                                <input type="checkbox" name="nescafe2" id="nescafe2" />
                                                                &nbsp;&nbsp;<span>Justrite</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="kitkat2">
                                                                <input type="checkbox" name="kitkat2" id="kitkat2" />
                                                                &nbsp;&nbsp;<span>Mallmart</span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label htmlFor="maggi2">
                                                                <input type="checkbox" name="maggi2" id="maggi2" />
                                                                &nbsp;&nbsp;<span>Jendol</span>
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="btn btn-primary w-100 d-block" data-dismiss="modal" aria-label="Close">Proceed</button>
                        </div>

                    </div>


                </GlobalModal>
            </div>

        </>
    );
}
