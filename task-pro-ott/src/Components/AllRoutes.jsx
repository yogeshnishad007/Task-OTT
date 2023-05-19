

import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Shows from '../Pages/Shows';
const AllRoutes = () => {
  return (
    <div>

           <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/shows' element={<Shows/>}/>
                
           </Routes>
    </div>
  )
}

export default AllRoutes