import React from 'react';
import './LogIn.css'

function LogIn({handleLogIn}) {

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <input className='form-input' type="email" placeholder="Email" required />
                <input className='form-input' type="password" placeholder="Password" required />
                <button className='form-button' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LogIn;
