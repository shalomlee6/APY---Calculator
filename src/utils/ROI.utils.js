import * as  Constants from '../config/Constants'

export const getROIinUSD = (T, inputAmountInUsd ) => {
    let APY = 80;
    let timeFrameInDayes = 0;

    //convert values not the best way due to time left in the assignment
    if(T === Constants.TIMEFRAME_INPUT_BUTTONS_SHEET[0]) {  timeFrameInDayes = 1 ;}
    else if (T === Constants.TIMEFRAME_INPUT_BUTTONS_SHEET[1]){ timeFrameInDayes = 7 ;}
    else if (T === Constants.TIMEFRAME_INPUT_BUTTONS_SHEET[2]){ timeFrameInDayes = 30 ;}
    else if (T === Constants.TIMEFRAME_INPUT_BUTTONS_SHEET[3]){ timeFrameInDayes = 365 ;}
    else { timeFrameInDayes = 365*5; }

    return (APY) * inputAmountInUsd * (timeFrameInDayes/100*365);
}

export const getROIinUSDWithExtraAPY = (T, inputAmountInUsd, tierLevel ) => {
    let APY = 80;
    let extraAPY = 0;
    let timeFrameInDayes = 0;

    //convert values not the best way due to time left in the assignment
    if(T === Constants.TIMEFRAME_INPUT_BUTTONS_SHEET[0]) {  timeFrameInDayes = 1 }
    else if (T === Constants.TIMEFRAME_INPUT_BUTTONS_SHEET[1]){timeFrameInDayes = 7 }
    else if (T === Constants.TIMEFRAME_INPUT_BUTTONS_SHEET[2]){ timeFrameInDayes = 30 }
    else if (T === Constants.TIMEFRAME_INPUT_BUTTONS_SHEET[3]){ timeFrameInDayes = 365 }
    else {timeFrameInDayes = 365*5 }

    if( tierLevel === Constants.TIER_LEVEL_INPUT_BUTTONS_SHEET[0]) { extraAPY = 10}
    else if (tierLevel === Constants.TIER_LEVEL_INPUT_BUTTONS_SHEET[1]){extraAPY = 20}
    else if (tierLevel === Constants.TIER_LEVEL_INPUT_BUTTONS_SHEET[2]){extraAPY = 40}
    else if (tierLevel === Constants.TIER_LEVEL_INPUT_BUTTONS_SHEET[3]){extraAPY = 80}
    else {extraAPY = 100}

    return (APY + extraAPY) * inputAmountInUsd * (timeFrameInDayes/100*365);
}