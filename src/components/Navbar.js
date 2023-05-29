// import React from 'react'
import { useState } from 'react';
import './NavbarStyles.css'
// import { AnimatePresence, motion } from 'framer-motion';
// import { useState } from 'react';
import { FaBars,  FaHome, FaInfoCircle,  FaPhone, FaSearch, FaSign, FaTimes, FaUser } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';




const Menuitems = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />
  },
  {
    path: "/about",
    name: "About",
    icon: <FaUser />
  },
  {
    path: "/service",
    name: "Service",
    icon: <FaInfoCircle />
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <FaPhone />
  },
  {
    path: "/signup",
    name: "Signup",
    icon: <FaSign />
  }
  
]

const Navbar = () => {
//  const navigate=useNavigate();
//  const navigateSignup=()=>{
//   navigate('/signup');
//  }
 const[isMobile,setIsMobile]=useState(false);

  return (
    <div className="main-container">
      <div className='navbar'>
        <div className='logo'>
          <h1>TRAVEL</h1>
          <div className='bars-times' onClick={()=>setIsMobile(!isMobile)}>
           {isMobile?<FaTimes/>:<FaBars/>}
          </div>
        </div>
        <div className='search'>
        <input  type='text' placeholder='Search...' />
          <div className='search-icon'><FaSearch /></div>
  {/* <button onClick={navigateSignup} className='btn'>Signup</button> */}
        </div>

        <div className={isMobile?"nav-links-mobile":"Menus"}
        onClick={()=>setIsMobile(false)}
        >
          {  
            Menuitems.map((item) => {
              return (
                <NavLink activeClassName="active" to={item.path} key={item.name} className='links'>
                  <div className='icon'>{item.icon}</div>
               
                  <div className='text'>{item.name}</div>
                  
                </NavLink> 
              )}
            )
          }
        </div>

      </div>
      {/* <main>{children}</main> */}
    </div>

  )}


export default Navbar;