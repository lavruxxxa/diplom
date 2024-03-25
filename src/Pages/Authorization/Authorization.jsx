import React, { useState } from 'react';
import SignUp from '../../Components/SignUp/SignUp';
import LogIn from '../../Components/LogIn/LogIn';
import { useNavigate } from 'react-router-dom';
import './Authorization.css'

function Authorization() {
    const [showSignUp, setShowSignUp] = useState(false);
    const navigate = useNavigate();
    
    const handleShowSignUp = () => {
        setShowSignUp(true);
    };

    const handleShowLogIn = () => {
        setShowSignUp(false);
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        // Handle signup logic here
        console.log('Log in form submitted');

        navigate('/profile');
    };

    const handleLogIn = (event) => {
        event.preventDefault();
        // Handle signup logic here
        console.log('Sign up form submitted');

        navigate('/profile');
    };


    return (
        <div className='authorization-container'>
            <div className='authorization-form'>
                <div className='authorization-buttons'>
                    <button className='authorization-button' onClick={handleShowSignUp}>Sign Up</button>
                    <button className='authorization-button' onClick={handleShowLogIn}>Log In</button>  
                </div>
                {showSignUp ? <SignUp handleSignUp={handleSignUp}/> : <LogIn handleLogIn={handleLogIn} />}
            </div>  
        </div>
    );
}

export default Authorization;
