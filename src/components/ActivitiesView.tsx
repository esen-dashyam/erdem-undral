
import React from 'react';
import CardDeck from './CardDeck';
import ImageGallery from './ImageGallery';

const ActivitiesView = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 space-y-14 md:space-y-24">
            <CardDeck />
            <ImageGallery />
        </div>
    );
};

export default ActivitiesView;
