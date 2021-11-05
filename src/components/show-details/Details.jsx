import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DetailsCss from './Details.module.css'


const Details = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div className={DetailsCss.container} >

                
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    
                    <AccordionSummary
                        className={DetailsCss.alignLable}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
    
                    <Typography  className={DetailsCss.title}> Show Details</Typography>
                        
                    </AccordionSummary>
                    
                    <AccordionDetails>
                        <Typography>
                            Develped By Shalom Pinchas a blockchain addict :)
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Details
