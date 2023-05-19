 import React from "react";

import { Link } from "react-router-dom";
import "../style.css"
import SearchBar from "./SearchBar";
 const Navbar=()=>{

      return(

  
            <div className="navbar-main-div">

                <h2>
                     <Link className="logo" to="/">PRO OTT</Link>
                 </h2>  
                
                <h3>
                     <Link className="links" to="/">Home</Link>
                 </h3>  

                <h3>
                      <Link className="links" to="/shows">Shows</Link>
                </h3>
              
                <h3>
                      <Link className="links" to="/movies">Movies</Link>
                </h3>

                <h3>
                      <Link className="links" to="/comedy">Comedy</Link>
                </h3>

                <h3>
                      <Link className="links" to="/news">News</Link>
                </h3>
                     
                      <div className="search-bar">
                                <SearchBar/> 
                      </div>

                <h3>
                      <Link className="links" to="/subscrib">Subscribe</Link>
                </h3>

                   <h3>
                      <Link className="links" to="/login">Login</Link>
                   </h3>

             </div>
          
 
      )
 }

 export default Navbar