// src/TryOnPage.js
import React from 'react';
import './tryonpage.css'; // Import your CSS for styling

const tryonpage = () => {
    return (
        <div className="try-on-container">
            <h2>Try On Your Outfits</h2>
            <div className="outfit-gallery">
                {/* Example outfits, replace with actual outfits */}
                <div className="outfit-item">Outfit 1</div>
                <div className="outfit-item">Outfit 2</div>
                <div className="outfit-item">Outfit 3</div>
            </div>
            <input type="file" accept="image/*" className="upload-button" />
            <button className="try-on-button">Try This On</button>
        </div>
    );
};

export default tryonpage;
