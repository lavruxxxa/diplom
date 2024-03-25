import React from 'react';
import './SignUp.css'

function SignUp({handleSignUp}) {

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input className='form-input' type="email" placeholder="Email" required />
                <input className='form-input' type="password" placeholder="Password" required />
                <button className='form-button' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;
