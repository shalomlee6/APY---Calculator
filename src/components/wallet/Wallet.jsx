import React, { useState } from 'react'
import {ethers} from 'ethers';
import Button from '@mui/material/Button';

const Wallet = (props) => {

    const [userBalance, setUserBalance] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);

    const connectWalletHandler = () => {
        if(window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then( res => {
                accountChangeHandler(res[0]);
            })
        } 
    }

    const accountChangeHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount)
        props.walletAddress(newAccount)
    }

    const getUserBalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance',params: [address,'latest']})
        .then( balance => {
            setUserBalance(ethers.utils.formatEther(balance) );
            props.onUserBalance(balance)
        })
    }

    return (
        <div>
            <div className="walletCard">
                <Button onClick={connectWalletHandler } variant="contained">Connect Meta Mask</Button>
                <div className="displayAccount" >
                    <h3>AccountAddress: {defaultAccount}</h3>
                </div>
                <div className="displayAccountBalance" >
                    <h3>User Balance: {userBalance}</h3>
                </div>
            </div>

        </div>
    )
}

export default Wallet
