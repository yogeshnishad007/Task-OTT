 import React from "react";

import { Link } from "react-router-dom";
import "../style.css"
import SearchBar from "./SearchBar";
 const Navbar=()=>{

      return(

  
            <div className="navbar-main-div">

                <h2>
                     <Link className="links" to="/">PRO OTT</Link>
                 </h2>  
                
                <h2>
                     <Link className="links" to="/">Home</Link>
                 </h2>  

                <h2>
                      <Link className="links" to="/shows">Shows</Link>
                </h2>
              
                <h2>
                      <Link className="links" to="/movies">Movies</Link>
                </h2>

                <h2>
                      <Link className="links" to="/comedy">Comedy</Link>
                </h2>

                <h2>
                      <Link className="links" to="/news">News</Link>
                </h2>
                     
                      <div className="search-bar">
                                <SearchBar/> 
                      </div>

                <h2>
                      <Link className="links" to="/subscrib">Subscribe</Link>
                </h2>

                   <h2>
                      <Link className="links" to="/login">Login</Link>
                   </h2>

             </div>
          
 
      )
 }

 export default Navbar