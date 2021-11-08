import React from 'react'
import ToogleButtonsList from '../toggle-buttons-list/ToogleButtonsList'

const Timeframe = (props) => {

    const onTimeFrameChange = (val) => {
        props.onTimeFrameChange(val)
    }

    return (
        <div>
            <h4>Timeframe</h4>
            <ToogleButtonsList onTimeFrameChange={onTimeFrameChange} buttonsInput={ props.inputList}/>
        </div>
    )
}

export default Timeframe

