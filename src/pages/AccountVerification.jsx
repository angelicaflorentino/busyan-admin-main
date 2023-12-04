import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import accountVerificationPassengerJobseekerImage from './assets/accountVerificationpassengerJobseeker.png'; 
import accountVerificationBusOperatorImage from './assets/accountVerificationbusOperator.png'; 

const ManageUser = () => {
    const [showAccountVerificationPassengerJobseeker, setShowAccountVerificationPassengerJobseeker] = useState(true);
    const [showAccountVerificationBusOperator, setShowAccountVerificationBusOperator] = useState(false);

    const toggleAccountVerificationPassengerJobseeker = () => {
        setShowAccountVerificationPassengerJobseeker(true);
        setShowAccountVerificationBusOperator(false);
    };

    const toggleAccountVerificationBusOperator = () => {
        setShowAccountVerificationPassengerJobseeker(false);
        setShowAccountVerificationBusOperator(true);
    };

    return (
        <div>
            <p className="bus-heading">Account Verification</p>
            <p className="bus-heading2"></p>
            
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                    <FaSearch />
                </div>
            </div>
            <div className="button-container">
                <button
                    className={showAccountVerificationPassengerJobseeker ? 'active-button' : 'inactive-button'}
                    onClick={toggleAccountVerificationPassengerJobseeker}
                >
                    Passenger/Jobseeker
                </button>
                <button
                    className={showAccountVerificationBusOperator ? 'active-button' : 'inactive-button'}
                    onClick={toggleAccountVerificationBusOperator}
                >
                    Bus Operator
                </button>
            </div>
            <div className="image-container">
                {showAccountVerificationPassengerJobseeker && <img src={accountVerificationPassengerJobseekerImage} alt="Passenger/Jobseeker" className="image" />}
                {showAccountVerificationBusOperator && <img src={accountVerificationBusOperatorImage} alt="Bus Operator" className="image"/>}
            </div>
        </div>
    );
};

export default ManageUser;



