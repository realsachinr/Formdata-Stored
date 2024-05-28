import React from 'react'
import Home from './components/Home'
import { Route, Routes } from'react-router-dom'
import StoredData from './components/StoredData'
import Navbar from './components/Navbar'
import { useState } from'react'

function App() {
  const [data, setData] = useState([]);

  const addData = (form) => {
    setData([...data, form]);
  };
  return (
    <div className='w-screen h-screen bg-slate-400 overflow-y-hidden'>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home addData={addData}/>}></Route>
      <Route path='/storedata' element={<StoredData data={data}/>}/>
    </Routes>
    </div>
  )
}

export default App