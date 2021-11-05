import './App.css';
import React from 'react'
import Button from '@mui/material/Button';

import { Navbar, Calculator, Footer} from './components';

 const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Calculator />
        <Button variant="contained">Connect Meta Mask</Button>
      </div>
      <Footer />
    </div>
  )
}

export default App
//options = [{value: 1, label: '1 Day'}, {value: 7, label: '7 Days'}, ...]
//onChange=(selectedItem) => {...}