import React from 'react';
import { FaSearch } from 'react-icons/fa';
import busImage from './assets/busScheduleImage.png'; 

const BusSchedule = () => {
    return (
        <div>
            <p className="bus-heading">Bus Schedule</p>
            <p className="bus-heading2">Set the bus schedule</p>
            
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <FaSearch />
                </div>
            </div>
            <div className="bus-image">
                <img src={busImage} alt="Bus" />
            </div>
        </div>
    );
};

export default BusSchedule;
