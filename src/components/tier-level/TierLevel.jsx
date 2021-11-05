import React from 'react'
import TierLevelCss from './TierLevel.module.css'
import ToogleButtonsList from '../toggle-buttons-list/ToogleButtonsList'

const TierLevel = (props) => {
    return (
        <div>

            <p className={TierLevelCss.title} >Select Tier</p>
            <ToogleButtonsList buttonsInput={ props.inputList}/>
        </div>
    )
}

export default TierLevel
