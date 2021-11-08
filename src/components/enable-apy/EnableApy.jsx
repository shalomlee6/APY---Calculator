import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import EnableApyCss from './EnableApy.module.css'

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

const EnableApy = (props) => {

    const { isSelected, onEnableAPY }  = props;

    return (
        <div>
            <div className={ EnableApyCss.container }>

            <h4>Enable Accelerated APY</h4>
                <div className={EnableApyCss.switch} >

                    <GreenSwitch 
                    {...label} 
                    checked={ isSelected }
                    onChange={ onEnableAPY } />
                </div>
            </div>
        </div>
    )
}

export default EnableApy
