
import React from 'react';
import CardDeck from './CardDeck';
import ImageGallery from './ImageGallery';

const ActivitiesView = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 space-y-24">
            <CardDeck />
            <ImageGallery />
        </div>
    );
};

export default ActivitiesView;
