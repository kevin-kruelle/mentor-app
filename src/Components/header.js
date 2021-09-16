import * as React from 'react';
import './header.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Header(){

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="headerContainer">
            <h1>Menty</h1>
            <div>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="Home" />
                    <Tab value="two" label="Opportunities" />
                    <Tab value="three" label="Mentors" />
                    <Tab value="four" label="Contact Us" />
                </Tabs>
            </Box>
            </div>
        </div>

    );
}

export default Header;