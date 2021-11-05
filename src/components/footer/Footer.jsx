import React from 'react'
import FooterCss from './Footer.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <div className={ FooterCss.siteFooter }>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: 'rgb(255, 240, 55)' }}>
                    <Toolbar>
                        <Typography color="black" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            APY - Calculator © Shalom Pinchas
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default Footer