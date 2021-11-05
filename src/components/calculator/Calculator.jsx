import React from 'react'
import CalculatorCss from './Calculator.module.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TokenSwitch from '../token-switch/TokenSwitch'
import CalculatorInput from '../calculator-input/CalculatorInput';
import Timeframe from '../timeframe/Timeframe';
import EnableApy from '../enable-apy/EnableApy';
import TierLevel from '../tier-level/TierLevel';
import RoiReturn from '../roi-return/RoiReturn'
import Details from '../show-details/Details';
import * as Constants from '../../config/Constants';

const Calculator = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={CalculatorCss.container}>

            <Button variant="outlined" onClick={handleClickOpen}>
                Open APY - Calculator
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ fontWeight: 'bold' }} >Calculator</DialogTitle>
                <DialogContent>

                    <TokenSwitch />
                    <CalculatorInput inputList={Constants.CALCULATOR_INPUT_BUTTONS_SHEET} />
                    <Timeframe inputList={Constants.TIMEFRAME_INPUT_BUTTONS_SHEET}/>
                    <EnableApy />
                    <TierLevel inputList={Constants.TIER_LEVEL_INPUT_BUTTONS_SHEET}/>
                    <RoiReturn />

                </DialogContent>
                <DialogActions>

                    <div className={CalculatorCss.actionSheet} >
                        <Button onClick={handleClose}>Apply</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </div>
                </DialogActions>
                <Details   />
            </Dialog>
        </div>
    )


}

export default Calculator
