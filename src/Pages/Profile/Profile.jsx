import React, {useState} from 'react';
import Navigation from '../../Components/Nаvigation/Navigation'; 
import Details from '../../Components/Details/Details'; 
import BooksList from '../../Components/BooksList/BooksList';
import FeedbackList from '../../Components/FeedbackList/FeedbackList';
import './Profile.css'; 

function Profile() {
    const [showContent, setShowContent] = useState('0');

    const handleShowDetails = () => {

        setShowContent('1');

    }

    const handleShowBooks = () => {

        setShowContent('2');

    }

    const handleShowFeedback = () => {

        setShowContent('3');

    }

    const renderContent = () => {
        switch (showContent) {
            case '1':
                return <Details />;
            case '2':
                return <BooksList />;
            case '3':
                return <FeedbackList />;
            default:
                return null;
        }
    }

    return (
        <div className="profile-container">
            <Navigation />
            <div className="profile-content">
                <img className="profile-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10c73CKrPb2e9GKqfRsmf3SKh6YC9QHpRJGkK9wNtvw&s" alt="Profile" />
                <h1 className="profile-name">John Doe</h1>
                <p className="profile-nickname">@johndoe123</p>
                <p className="profile-rating">Rating: 5 stars</p>
                <div className='content-change-buttons'>
                    <button className='content-change-button' onClick={handleShowDetails}>details</button>
                    <button className='content-change-button' onClick={handleShowBooks}>books</button>
                    <button className='content-change-button' onClick={handleShowFeedback}>feedback</button>
                </div>
                {renderContent()}
            </div>
        </div>
    );
}

export default Profile;
