import React from 'react'
import CalculatorInputCss from './CalculatorInput.module.css'
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import ToogleButtonsList from '../toggle-buttons-list/ToogleButtonsList'

let inputNum = 0;
let inputLAble = 0;
const CalculatorInput = (props) => {

  const [values, setValues] = React.useState({
    cake: '',
    usd: ''
  });

  const handleChange = (prop) => (event) => {
    inputNum = event.target.value ? event.target.value : 0;
    inputLAble = inputNum * 3.22;
    setValues({ ...values, [prop]: inputNum });
    
  };

  return (
    <div>
      <FormControl className={ CalculatorInputCss.input } variant="filled">
          <OutlinedInput
            type="number"
            value={values.cake}
            onChange={handleChange('cake')}
            startAdornment={<InputAdornment position="start">Cake</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              'aria-label': {inputNum},
            }}
          />
          
          <div className={CalculatorInputCss.inputBottom}>

            <div className={ CalculatorInputCss.inputFormatValue }>
              <FormHelperText className={CalculatorInputCss.alignLable}>{inputLAble}</FormHelperText>
            </div>

            <ToogleButtonsList buttonsInput={ props.inputList} />
          </div>


        </FormControl>
    </div>
  )
}

export default CalculatorInput

