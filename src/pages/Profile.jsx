import React from 'react';


const Profile = () => {
    return (
        <div>
            <p className="bus-heading">Profile</p>
            <div className="profile-form-container">
                <div className="profile-form-left">
                    <form>
                        <div className="profile-form-group">
                            <label htmlFor="first-name">First Name:</label>
                            <input type="text" id="full-name" />
                        </div>
                        <div className="profile-form-group">
                            <label htmlFor="middle-name">Middle Name:</label>
                            <input type="text" id="middle-name" />
                        </div>
                        <div className="profile-form-group">
                            <label htmlFor="last-name">Last Name:</label>
                            <input type="text" id="last-name" />
                        </div>
                    </form>
                </div>
                <div className="profile-form-right">
                    <form>
                    <div className="profile-form-group">
                            <label htmlFor="company-name">Contact number:</label>
                            <input type="text" id="company-name" />
                        </div>
                        <div className="profile-form-group">
                            <label htmlFor="company-name">Company Name:</label>
                            <input type="text" id="company-name" />
                        </div>
                    </form>
                </div>
            </div>
            <p className="password-form-label">Password</p>
            <div className="password-form-container">
                <div className="password-form">
                
                    <form>
                        <div className="password-form-group">
                            <label htmlFor="old-password">Old Password:</label>
                            <input type="password" id="old-password" />
                        </div>
                        <div className="password-form-group">
                            <label htmlFor="new-password">New Password:</label>
                            <input type="password" id="new-password" />
                        </div>
                        <div className="password-form-group">
                            <label htmlFor="confirm-password">Confirm New Password:</label>
                            <input type="password" id="confirm-password" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="update-button-container">
                            <button className="update-button">Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;

