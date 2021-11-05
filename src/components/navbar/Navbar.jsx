import React from 'react'
import NavbarCss from './Navbar.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    return (
        <div className={ NavbarCss.topNavbar }>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: 'rgb(255, 240, 55)' }}>
                    <Toolbar>
                        <Typography color="black" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            APY - Calculator
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
