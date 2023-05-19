

import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Shows from '../Pages/Shows';
import Movies from "../Pages/Movies"
import Comedy from "../Pages/Comedy";
import News from "../Pages/News"
const AllRoutes = () => {
  return (
    <div>

           <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/shows' element={<Shows/>}/>
                      <Route path='/movies' element={<Movies/>}/>
                      <Route path='/comedy' element={<Comedy/>}/>
                      <Route path='/news' element={<News/>}/>
                
           </Routes>
    </div>
  )
}

export default AllRoutes