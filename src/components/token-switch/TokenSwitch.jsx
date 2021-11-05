import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import cakeToken from '../../assets/img/cake_token.png'
import TokenSwitchCss from './TokenSwitch.module.css'

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#fff",
       
      '&:hover': {
        backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: yellow[600],
    },
  }));
  
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const TokenSwitch = () => {

    const [value, setValue] = React.useState({
      active: false 
    });

    const handleChange = (prop) => (event) => {
      setValue({ value, [prop]: !!event.target.value });
      if(event.target.value) {
        // Fire Change Event 
      } else {
        // Fire Change Event 
      }
     };

    return (
        <div className={ TokenSwitchCss.container } >
            <img src={cakeToken} alt="" />
            <p>Cake</p>
            <GreenSwitch 
            {...label}
             defaultChecked
             value={value.active}
             onChange={handleChange('active')} />
            <p>USD</p>
        </div>
    )
}

export default TokenSwitch
