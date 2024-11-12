import React from "react";

function Navigation(){
    return(
        <>
            <nav className="NavBar">
                <div className="NavList">
                    <ul className="NavLink">
                        <a href=""><li> Home</li></a>
                        <a href=""><li> About Us</li></a>
                        <a href=""><li> Treatments</li></a>
                        <a href=""><li> Destinations</li></a>
                        <a href=""><li> Hospitals</li></a>
                        <a href=""><li> FAQs</li></a>
                        <a href=""><li> Blog</li></a>
                        <a href=""><li> Request A Quote</li></a>
                    </ul>
                </div>
                <div className="input">
                    <input type="text" placeholder="search"></input>
                </div>
            </nav>
        
        </>
    )
}

export default Navigation