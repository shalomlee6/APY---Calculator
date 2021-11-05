import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButtonsListCss from '../toggle-buttons-list/ToogleButtonsList.module.css';

const ToogleButtonsList = (props) => {
    let list = props.buttonsInput ? props.buttonsInput : []
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    return (
        <div className={ ToggleButtonsListCss } >
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                fullWidth={true}
                exclusive
                onChange={handleChange}>
                { list.map(el => <ToggleButton key={el} value={ el }>{el}</ToggleButton>) }
            </ToggleButtonGroup>
        </div>
    )
}

export default ToogleButtonsList
