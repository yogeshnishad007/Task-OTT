import React from 'react'
import Image1 from "../assest/images1.jpg"
import Image2 from "../assest/images.jpg"

const MenuBar = () => {

  return (
    <div className='menu-bar-con'>

               <div className='menu-bar-single-con'>
                      <img className='image' src={Image1} alt="recomanded" />

                      <div>
                            <button  className='menu-bar-btn'>Recommended for you</button>
                      </div>
                  
                       
               </div>

               <div className='menu-bar-single-con'>
                      <img className='image' src={Image2} alt="recomanded" />

                      <div>
                          <button  className='menu-bar-btn'>Animated Adventures</button>
                      </div>
                      
                      
               </div>

               <div className='menu-bar-single-con'>
                      <img className='image' src={Image1} alt="recomanded" />

                      <div>
                            <button  className='menu-bar-btn'>New & Upcoming </button>
                      </div>
                  
                       
               </div>



               <div className='menu-bar-single-con'>
                      <img className='image' src={Image2} alt="recomanded" />

                      <div>
                          <button className='menu-bar-btn'>Popular Shows/Drama</button>
                      </div>
                      
                      
               </div>
    </div>
  )
}

export default MenuBar