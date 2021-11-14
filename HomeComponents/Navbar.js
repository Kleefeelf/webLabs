import React from "react";
import '../style/navbar.css'

function Nav() {
    return (
        <div id="navbar"> 
            <nav>
                <span className="logo">BEB</span>
                <ul className="navlist"> 
                    <li><a href="/home">Home</a></li>
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/cart">Cart</a></li>                    
                </ul>
            </nav>            
        </div>
    )
}

export default Nav