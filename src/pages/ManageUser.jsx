import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import passengerJobseekerImage from './assets/passengerJobseeker.png'; 
import busOperatorImage from './assets/busOperator.png'; 

const ManageUser = () => {
    const [showPassengerJobseeker, setShowPassengerJobseeker] = useState(true);
    const [showBusOperator, setShowBusOperator] = useState(false);

    const togglePassengerJobseeker = () => {
        setShowPassengerJobseeker(true);
        setShowBusOperator(false);
    };

    const toggleBusOperator = () => {
        setShowPassengerJobseeker(false);
        setShowBusOperator(true);
    };

    return (
        <div>
            <p className="bus-heading">Manage User</p>
            <p className="bus-heading2"></p>
            
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <FaSearch />
                </div>
            </div>
            <div className="button-container">
                <button
                    className={showPassengerJobseeker ? 'active-button' : 'inactive-button'}
                    onClick={togglePassengerJobseeker}
                >
                    Passenger/Jobseeker
                </button>
                <button
                    className={showBusOperator ? 'active-button' : 'inactive-button'}
                    onClick={toggleBusOperator}
                >
                    Bus Operator
                </button>
            </div>
            <div className="image-container">
                {showPassengerJobseeker && <img src={passengerJobseekerImage} alt="Passenger/Jobseeker" className="image" />}
                {showBusOperator && <img src={busOperatorImage} alt="Bus Operator" className="image"/>}
            </div>
        </div>
    );
};

export default ManageUser;
