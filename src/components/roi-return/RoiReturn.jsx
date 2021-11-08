import React from 'react';
import RoiReturnCss from './RoiReturn.module.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Edit from '@mui/icons-material/Edit';
import FormHelperText from '@mui/material/FormHelperText';


const RoiReturn = (props) => {

    const {inputValue} = props;
    const [isEditClicked, setIsEditClicked] = React.useState(true)
    const onEdit = () => {
        setIsEditClicked(!isEditClicked)
    }

    return (
        <div>
            <p className={ RoiReturnCss.title } >ROI at Current Rates</p>
            
            <div className={RoiReturnCss.container} >

                <Box  >
                    <FormControl className={ RoiReturnCss.container} variant="standard">

                        <OutlinedInput
                            type="number"
                            disabled={isEditClicked}
                            value={ inputValue }
                            inputProps={{'aria-label': {inputValue}}}
                            
                            startAdornment={
                                <InputAdornment position="start" onClick={onEdit}>
                                <Edit  />
                                </InputAdornment>
                            }
                            aria-describedby="filled-weight-helper-text"
                        />
                        
                        <div className={ RoiReturnCss.inputFormatValue }>
                            <FormHelperText className={RoiReturnCss.alignLable}>{0}</FormHelperText>
                        </div>
                    </FormControl>
                    
    
                </Box>
            </div>
            
        </div>
    )
}

export default RoiReturn
