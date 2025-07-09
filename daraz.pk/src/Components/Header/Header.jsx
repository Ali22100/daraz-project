import React from "react";
import "./Header.css"

const Header = () =>{
    return(
        <>    
        
    <div className="top-bar">
    <div className="contact-info">
      <span><i className="fas fa-phone"></i></span>
      <span><i className="fas fa-envelope"></i> </span>
    </div>
    <div className="social-icons">
      <a href="#"><span><i className="fas fa-phone">Save More on App</i></span></a>
    <a href="#"><span><i className="fas fa-phone">Sell On Daraz</i></span></a>
     <a href="#"><span><i className="fas fa-phone">Login</i></span></a>
     <a href="#"><span><i className="fas fa-phone">Sign up</i></span></a>
      <a href="#"><span><i className="fas fa-phone">زبان تبدیل کریں</i></span></a>
    </div>
  </div>
  </>
    )
}



export default Header