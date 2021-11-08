import './App.css';
import React, {useEffect} from 'react'
import Wallet from './components/wallet/Wallet'
import { Navbar, Calculator, Footer} from './components';

 const App = () => {

   const [token, setToken] = React.useState({
     name: '',
     symbol: '',
     price: '',
     price_BNB: ''
    })
    const [userBalance, setUserBalance] = React.useState(null)
    const [walletAddress, setWalletAddress] = React.useState(null)


  useEffect( () => {
    const url = 'https://api.pancakeswap.info/api/v2/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82';
    fetch(url)
    .then(res => res.json())
      .then(res => {
        console.log(res.data)

        setToken( {token,
          name: res.data.name,
          symbol: res.data.symbol,
          price: Number(res.data.price).toFixed(3),
          price_BNB: res.data.price_BNB 
        })
      })
  },[]);
  
  const onUserBalance = (balance) => {
    setUserBalance(balance)
  }

  const onWalletAddress = (address) => {
    setWalletAddress(address)
  }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Wallet walletAddress={onWalletAddress} onUserBalance={ onUserBalance } />
        
        <Calculator walletAddress={walletAddress} userBalance={userBalance} cakeTokenPrice={ token.price } bnbTokenPrice={ token.price_BNB} />
      </div>
      <Footer />
    </div>
  )
}

export default App
