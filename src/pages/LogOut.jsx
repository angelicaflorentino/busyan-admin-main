import React from 'react';

const LogOut = () => {
    return (
        <div className="logout-container">
            <p className="logout-message">Are you sure you want to log out?</p>
            <div className="button-container">
                <button className="logout-button">Yes</button>
                <button className="cancel-button">No</button>
            </div>
        </div>
    );
};

export default LogOut;
