import React from "react";
import img1 from "./img/AAFIYA_MEDIRETREATS_PRIVATE_LIMITED_435194.webp"
import img2 from "./img/dr.symbol.jpg"
import { IoPeopleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";


function Header (){
    return(
        <>
        <div className="container">
            <header className="main-header">
                <div>
                    <img src={img1} className="logo-lg" alt="company_logo"/>
                </div>
                <div>
                    <img src={img2} className="logo-sm" alt="symbol"/>
                </div>

                <div className="icon-box">
                <IoPeopleOutline className="header-icon"/>
                <div class="header-info">
            <span>people-outline</span>
            <p>book consultation</p>
                </div>
                </div>

                <div className="icon-box">
                    <IoCallOutline className="header-icon"/>
                    <div className="header-info">
            <span>call-outline</span>
            <p>call 987784654</p>
            </div>
                </div>

                <div className="icon-box">
                    <IoMailOpenOutline className="header-icon" aria-hidden="true"/>
                    <div className="header-info">
                    <span>mail-outline</span>
                    <p>mail:info@medi.com</p>    
                    </div>    
                </div>

                <div>
                  <select>
                      <option>U.K</option>
                      <option>U.S.A</option>
                      <option>U.S.S.R</option>
                  </select>
                </div>

            </header>
            </div>    
        </>
    )
}

export default Header