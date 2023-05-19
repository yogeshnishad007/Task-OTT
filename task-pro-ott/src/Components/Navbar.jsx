 import React from "react";

import { Link } from "react-router-dom";

 const Navbar=()=>{

      return(

         <div>
            <div className="navbar-link">
                <h2>
                     <Link className="links" to="/">Home</Link>
                 </h2>  

                <h2>
                      <Link className="links" to="/shows">Shows</Link>
                </h2>
              

             </div>
          
            
         </div>
      )
 }

 export default Navbar