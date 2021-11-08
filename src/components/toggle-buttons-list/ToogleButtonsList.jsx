import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButtonsListCss from '../toggle-buttons-list/ToogleButtonsList.module.css';
import  * as Constants from '../../config/Constants';


const ToogleButtonsList = (props) => {
    const {isActive} = props;
    let list = props.buttonsInput ? props.buttonsInput : [];
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        let val = event.target.value
        if(Constants.CALCULATOR_INPUT_BUTTONS_SHEET.includes(val)) {
            props.onButtonChange(val)
        } else if (Constants.TIMEFRAME_INPUT_BUTTONS_SHEET.includes(val)) {
            props.onTimeFrameChange(val)
        } else if(Constants.TIER_LEVEL_INPUT_BUTTONS_SHEET.includes(val)) {
            props.onTierClick(val)
        }

        setAlignment(newAlignment);
    };

    return (
        <div className={ ToggleButtonsListCss } >
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                fullWidth={true}
                exclusive
                disabled={isActive}
                onChange={handleChange}>
                { list.map(el =>  <ToggleButton key={el} value={ el }>{el}</ToggleButton>) }
            </ToggleButtonGroup>
        </div>
    )
}

export default ToogleButtonsList
