import React from 'react'
import ToogleButtonsList from '../toggle-buttons-list/ToogleButtonsList'

const Timeframe = (props) => {
    return (
        <div>
            <h4>Timeframe</h4>
            <ToogleButtonsList buttonsInput={ props.inputList}/>
        </div>
    )
}

export default Timeframe

