
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Modal from './Modal';

const placeholderImages = [
    "https://images.unsplash.com/photo-1577912889823-a54b491a3365?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512163143279-df8323050d62?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605744344320-a3883b65b3e3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576073663324-72117f291242?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544890225-2fde04a04d32?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513299228243-f6491a483315?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606964910932-9d699659489c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-157333555 संभवतः-488483a55e?q=80&w=800&auto=format&fit=crop",
];


const ImageGallery = () => {
    const { theme } = useTheme();
    const [images] = useState<string[]>(placeholderImages);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className={`text-4xl md:text-5xl font-bold text-center ${theme.textPrimary} mb-4`} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Holiday Photo Gallery
            </h1>
            <p className={`text-center ${theme.textSecondary} mb-8`}>A collection of festive moments to inspire holiday cheer.</p>

            {images.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
