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
import * as ROI from '../../utils/ROI.utils'
import * as Constants from '../../config/Constants';


const triggerTimeFrameChange = (T) => {
    
    // let ROIinUSD = ROI.getROIinUSD(T)
}

const Calculator = (props) => {

    const {walletAddress} = props
    let bnbTokenPrice = props.bnbTokenPrice;
    let cakeTokenPrice = props.cakeTokenPrice;

    const [open, setOpen] = React.useState(false);
    const [usdValue, setUsdValue] = React.useState(0);
    const [tierLevel, setTierLevel] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
    const [timeFrame, setTimeFrame] = React.useState('1 Day');
    const [isCakeToken, setIsCakeToken] = React.useState(true)
    const [isTierClicke, setisTierClicke] = React.useState(false)
    const [showTierSelect, setShowTierSelect] = React.useState(false)
    const [isAPYAccelerated, setAPYAccelerated] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSwitchClick = (isChecked) => {
        setIsCakeToken(!isCakeToken)
    };

    const onTimeFrameChange = (T) => {
        setTimeFrame(T)
        // triggerTimeFrameChange(T)
        // let ROIinUSD = ROI.getROIinUSD(T ,usdValue);
    }

    const onTierClick = (value) => {
        setTierLevel(value)
        setisTierClicke(!isTierClicke)
    }

    const onEnableAPY = () => {
        if(isAPYAccelerated === false &&  isTierClicke === false) {
            setShowTierSelect(!showTierSelect)
        } else if(isAPYAccelerated === true &&  isTierClicke === false) {
            setShowTierSelect(!showTierSelect)
        }
        setAPYAccelerated(!isAPYAccelerated)
    }

    const onInput = (value) => {
        let ROIinUSD = 0
        let inputNumber = Number(value)
        let cakeTokenPrice = Number(props.cakeTokenPrice);

        if(isTierClicke) {
            ROIinUSD = ROI.getROIinUSDWithExtraAPY(timeFrame,cakeTokenPrice*inputNumber,tierLevel);
        } else {
            ROIinUSD = ROI.getROIinUSD(timeFrame,cakeTokenPrice*inputNumber);
        }
        setInputValue(ROIinUSD)
    }
    const onUsdValue = (value) => {
        setUsdValue(value)
    }

    return (
        <div className={CalculatorCss.container}>

            <Button variant="outlined" onClick={handleClickOpen}>
                Open APY - Calculator
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ fontWeight: 'bold' }} >Calculator</DialogTitle>
                <DialogContent>

                    <TokenSwitch isCakeToken={ isCakeToken } onChange={ (a) => handleSwitchClick(a) } />
                    <CalculatorInput 
                    inputValue={onInput}
                    usdValue = {onUsdValue}
                    walletAddress = {props.walletAddress}
                    cakeToken={ props.cakeTokenPrice}
                    bnbToken={ props.bnbTokenPrice}
                    isCakeToken={isCakeToken}
                   
                    inputList={Constants.CALCULATOR_INPUT_BUTTONS_SHEET} />
                    <Timeframe onTimeFrameChange={onTimeFrameChange} inputList={Constants.TIMEFRAME_INPUT_BUTTONS_SHEET}/>
                    
                    <EnableApy isSelected={isAPYAccelerated} onEnableAPY={ (a) => onEnableAPY(a)} />
                    {showTierSelect ? <TierLevel isActive={!isAPYAccelerated} onTierClick={onTierClick} inputList={Constants.TIER_LEVEL_INPUT_BUTTONS_SHEET}/> : null}
                    
                    <RoiReturn inputValue={ inputValue } />

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
