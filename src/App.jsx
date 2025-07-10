import {  } from 'react'

import './App.css'
import CoinTable from './Components/CoinTable/CoinTable'
import Navbar from './Components/CoinTable/Navbar/Navbar'
import Banner from './Components/CoinTable/Banner/Banner'

function App() {

  return (
    <>
     <div className="min-h-screen bg-black ">

    <Navbar />
    <Banner />
    <CoinTable />

    </div>
    </>
  )
}

export default App
