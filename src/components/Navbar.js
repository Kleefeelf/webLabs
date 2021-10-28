import React from "react";
import './style/navbar.css'

function Nav() {
    return (
        <div id="navbar"> 
            <nav>
                <span className="logo">BEB</span>
                <ul className="navlist"> 
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">Cart</a></li>                    
                </ul>
            </nav>            
        </div>
    )
}

export default Nav