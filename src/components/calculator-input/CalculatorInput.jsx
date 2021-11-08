import React, {useEffect} from 'react'
import CalculatorInputCss from './CalculatorInput.module.css'
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import ToogleButtonsList from '../toggle-buttons-list/ToogleButtonsList'
import EventEmitter from '../../utils/EventEmitter.utils'
import  * as Constants from '../../config/Constants';
import {ethers} from 'ethers';
import Web3 from 'web3';


let inputNum = 0;
let inputLAble = 0;

const CalculatorInput = (props) => {

  const {isCakeToken} = props;
  const { walletAddress } = props;
  let bnbToken  = Number(props.bnbToken);
  let cakeToken = Number(props.cakeToken);
  const[usd, setUsd] = React.useState('')
  const[cake, setCake] = React.useState('')
  const[isActive, setIsActive] = React.useState(isCakeToken)

  const handleChange = () => (event) => {

    inputNum = Number(event.target.value);
    if(isActive) {
      
      inputLAble = inputNum * 3.22;
      setCake(inputNum)
      setUsd(inputLAble)
    } else {
      inputLAble = inputNum * 3.22;
      setCake(inputLAble)
      setUsd(inputNum)
    }
  };

  const ToggleButtonChange = (val) => {
    if(val === Constants.CALCULATOR_INPUT_BUTTONS_SHEET[0]) {
      
      getUserCakeBalance()
      
      console.log(val)
    }else {
      let cakeValue = Number(val.substring(1)) 
      cakeValue *= cakeToken
      setCake(cakeValue)
      console.log(val + "**********************")
    }
  }


  const getUserCakeBalance = async() => {
    if(window.ethereum){
      try {
        const Web3Client = new Web3(window.ethereum);

        // The minimum ABI required to get the ERC20 Token balance
        const minABI = [
          // balanceOf
          {
            constant: true,
            inputs: [{ name: "_owner", type: "address" }],
            name: "balanceOf",
            outputs: [{ name: "balance", type: "uint256" }],
            payable: false,
            type: "function",
          },
        ];
        // Cake Token Address from etherScan
        const tokenAddress = "0x40dD9039D167852a5EE7d850bd99dd88b1B5128a";
        const contract = new Web3Client.eth.Contract(minABI, tokenAddress);
        getBalance(contract, Web3Client)
        
        return true
      } catch(e) {
        // User denied access
        return false
      }
    } else {

    }
  }

   const getBalance = async(contract, Web3Client) => {
    const result = await contract.methods.balanceOf(walletAddress).call(); 
    
    const format = Web3Client.utils.fromWei(result); 
    setCake(format)
    // console.log(format);
  }
  
  //SwitchEvent
  useEffect( () => {

    const onSwitchEvent = (e) => {
      triggerSwitchEvent(e)
    }

    const onToggleButtonClick = (e) => {
      triggerToggleButtonClick(e)
    }

    const switchListener = EventEmitter.addListener('SwitchEvent', onSwitchEvent );
    const buttonToggleListener = EventEmitter.addListener('toggleButtonEvent', onToggleButtonClick );

    return () => {
      switchListener.remove()
      buttonToggleListener.remove()
    }
  });

  const triggerSwitchEvent = (e) => {
    setIsActive(e)
  }

  const triggerToggleButtonClick = (val) => {
    //set value of 100$ cake
    
    if(val === Constants.CALCULATOR_INPUT_BUTTONS_SHEET[0]) {
      console.log(val)
      
    }else {
      let cakeValue = Number(val.substring(1)) 
      cakeValue *= cakeToken
      setCake(cakeValue)
      console.log(val + "**********************")
    }
  }

  const calcInputValue = () => {
    return isCakeToken ? cake : usd;
  }

  const calcSubInputValue = () => {
    return isCakeToken ? usd : cake;
  }
  
  return (
    <div>
      <FormControl className={ CalculatorInputCss.input } variant="filled">
          <OutlinedInput
            type="number"
            value= { calcInputValue() }
            onChange={handleChange()}
            startAdornment={<InputAdornment position="start">Cake</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': {inputNum},
            }}
          />
          
          <div className={CalculatorInputCss.inputBottom}>

            <div className={ CalculatorInputCss.inputFormatValue }>
              <FormHelperText className={CalculatorInputCss.alignLable}>{ calcSubInputValue() } </FormHelperText>
            </div>

            <ToogleButtonsList  onButtonChange={ToggleButtonChange}  buttonsInput={ props.inputList} />
          </div>


        </FormControl>
    </div>
  )
}

export default CalculatorInput

