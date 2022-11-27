import React from 'react'
import First from './components/First'

import {Routes,Route} from 'react-router-dom'
import page2 from './Page2'
export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element ={<First/>} />
        <Route path="/second" element ={<page2/>} />
      </Routes>
    </div>
  )
}
