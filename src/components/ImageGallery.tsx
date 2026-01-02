
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Modal from './Modal';

import whatsappImg from '../pictures/WhatsApp Image 2026-01-01 at 6.54.00 PM.jpeg';
import catanImg from '../pictures/catan.jpeg';
import imageCopyImg from '../pictures/image copy.png';
import imageImg from '../pictures/image.png';
import savingImg from '../pictures/saving_me_from_drowning.jpg';

const galleryImages = [whatsappImg, catanImg, imageCopyImg, imageImg, savingImg];


const ImageGallery = () => {
    const { theme } = useTheme();
    const [images] = useState<string[]>(galleryImages);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-center ${theme.textPrimary} mb-4`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Holiday Photo Gallery
            </h1>
            <p className={`text-center ${theme.textSecondary} mb-8`}>A collection of festive moments to inspire holiday cheer.</p>

            {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Festive moment ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className={`w-full text-center p-10 border-2 border-dashed ${theme.accent} rounded-lg ${theme.textSecondary}`}>
                    <p>This gallery is currently empty.</p>
                </div>
            )}

            {selectedImage && (
                <Modal onClose={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Selected holiday moment" className="max-w-full max-h-[80vh] rounded-lg" />
                </Modal>
            )}
        </div>
    );
};

export default ImageGallery;
