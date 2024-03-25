import React from 'react';
import './Details.css'

function Details() {
    return (
        <div className="details-container">
            <h2>Personal Information</h2>
            <ul>
                <li><strong>Full Name:</strong> John Doe</li>
                <li><strong>Date of Birth:</strong> January 1, 1990</li>
                <li><strong>Gender:</strong> Male</li>
                <li><strong>Address:</strong> 123 Main St, Anytown</li>
                <li><strong>Email:</strong> johndoe@example.com</li>
                <li><strong>Phone Number:</strong> +1234567890</li>
            </ul>
            <h2>Social Contacts</h2>
            <ul>
                <li><strong>Facebook:</strong> <a href="https://www.facebook.com/johndoe" target="_blank" rel="noopener noreferrer">johndoe</a></li>
                <li><strong>Twitter:</strong> <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">@johndoe</a></li>
                <li><strong>Instagram:</strong> <a href="https://www.instagram.com/johndoe" target="_blank" rel="noopener noreferrer">@johndoe</a></li>
            </ul>
        </div>
    );
}

export default Details;
