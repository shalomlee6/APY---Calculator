import React from 'react'
import TierLevelCss from './TierLevel.module.css'
import ToogleButtonsList from '../toggle-buttons-list/ToogleButtonsList'

const TierLevel = (props) => {

    const {isActive} = props

    const onTierClick = (val) => {
        props.onTierClick(val)
    }

    return (
        <div>

            <p className={TierLevelCss.title} >Select Tier</p>
            <ToogleButtonsList 
            isActive={isActive}
            onTierClick={ onTierClick } 
            buttonsInput={ props.inputList}/>
        </div>
    )
}

export default TierLevel
