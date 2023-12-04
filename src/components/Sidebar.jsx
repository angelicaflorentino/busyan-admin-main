import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUsers ,
    FaUserLock ,
    FaBell ,
    FaUser,
    FaSignOutAlt 
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import profileImage from './assets/profile-image.png';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/People",
            name:"Manage User",
            icon:<FaUsers/>
        },
        {
            path:"/Job",
            name:"Account Verification",
            icon:<FaUserLock  />
        },
        {
            path:"/Notification",
            name:"Notification",
            icon:<FaBell  />
        },
        {
            path:"/Profile",
            name:"Profile",
            icon:<FaUser  />
        },
        
        
    ];
    
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div className="profile-section">
                        {isOpen && (
                            <>
                                <div style={{ width: isOpen ? "100px" : "0px"}} className="profile-image">
                                    <img src={profileImage} alt="Profile" />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="logo-bars">
                        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                            BusYan
                        </h1>
                        <div style={{ marginLeft: isOpen ? "20px" : "0px" }} className="bars">
                            <FaBars onClick={toggle} />
                        </div>
                    </div>
                </div>
                <div style={{ width: isOpen ? "150px" : "50px" }} className="profile-name">Monkey D. Luffy</div>
                <div className="menu-items">
                    {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                {item.name}
                            </div>
                        </NavLink>
                    ))}
                    <div style={{ marginTop: "160px" }} /> {/* Add margin after Profile */}
                    {/* Log Out Button */}
                    <NavLink to="/LogOut" className="link" activeClassName="active">
                        <div className="menu-item">
                            <div className="icon">
                                <FaSignOutAlt />
                            </div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                                Log Out
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;