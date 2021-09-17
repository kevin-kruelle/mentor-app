import * as React from 'react';
import './header.css';
import Gallery from './MentorGallery';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Header(){

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const links = ['/', '/gallery']

    return (
        <Router>
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
                            <Tab value="one" label="Home" component={Link} to={links[0]} />
                            <Tab value="two" label="Opportunities" />
                            <Tab value="three" label="Mentors" component={Link} to={links[1]} />
                            <Tab value="four" label="Contact Us" />
                        </Tabs>
                        
                    </Box>
                    </div>
        </div>

            <Switch>
                    <Route path={links[1]} render={() => <div><Gallery /></div>} />
            </Switch>

        </Router>

    );
}

export default Header;