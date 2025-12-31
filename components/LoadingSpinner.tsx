
import React from 'react';

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center space-y-4" aria-label="Loading jokes">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-amber-400 rounded-full animate-spin"></div>
        <p className="text-white text-lg">Stirring up some holiday cheer...</p>
    </div>
);

export default LoadingSpinner;
