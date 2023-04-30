import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDropDowns } from "../../hooks/useDropDowns";

// eslint-disable-next-line react/prop-types
export default function Filter1({ width }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const dropdownFilters = useDropDowns()

    const open = Boolean(anchorEl);
    const [selectedFilter, setValue] = useState(dropdownFilters[0]?.name);
    const handleClickList = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleSelectFilter = (val, i) => {
        switch (i) {
            case 0:
                setAnchorEl(null);
                setValue(val)

                break;

            default:
                break;
        }


    }


    return (
        <div className="text-right" style={{ width, background: '#00af521f', color: '#D97706' }}>
            <div className=" w-100">
                <div className="d-inline-block">
                    <span className="" style={{ fontSize: '12px' }}>
                        This is your data for the past
                    </span>
                    &nbsp;
                    &nbsp;
                    <span style={{ fontSize: '12px' }}>
                        {selectedFilter}
                    </span>
                    &nbsp;
                    <span
                        onClick={handleClickList}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleClickList();
                            }
                        }}
                        tabIndex={0} // This makes the element focusable
                        role="button" // This indicates to screen readers that this is an interactive element
                        className="text-white"
                    >
                        <img style={{ cursor: 'pointer' }} src="/assets/icons/darkTrigger.svg" alt="" />
                    </span>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {dropdownFilters.map((item, i) => (
                            <MenuItem key={i} onClick={() => handleSelectFilter(item.name, 0)}>
                                {item.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>

            </div>

        </div>
    )
}
