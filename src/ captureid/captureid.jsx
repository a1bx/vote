import React, { useRef, useEffect, useState } from 'react';
import Logo from '../assets/logo.png'
// import { Navigate } from 'react-router-dom'

const IDPhotoCapture = () => {
    const videoRef = useRef(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        startCamera(); 

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const stream = videoRef.current.srcObject;
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const photoWidth = 856; 
        const photoHeight = 540; 

        canvas.width = photoWidth;
        canvas.height = photoHeight;

        const x = 0;
        const y = 0;
    
        context.drawImage(video, x, y, video.videoWidth, video.videoHeight, 0, 0, photoWidth, photoHeight);
    
        const dataURL = canvas.toDataURL('image/jpeg', 1.0);

        const a = document.createElement('a');
        a.href = dataURL;
        a.download = 'id_photo.jpg'; 
        a.click();

        setShowSuccessMessage(true);
    };
    
    return (
        <div className="min-h-screen bg-gray flex flex-col justify-center items-center">
            <img src= {Logo} alt="logo" className="mb-4 ml-4" />
            <form className="bg-gray">
                <h1 className='font-bold mt-2 text-center'>Capture ID</h1>
                <p className='text-center mb-4'>To continue, you have to capture your ID to confirm identity</p>
                <div className="mb-4 text-center">
                    <video ref={videoRef} autoPlay style={{width: '90.6mm', height: '54mm', margin: 'auto', marginTop: '10px', borderRadius: '30px' }} />
                </div>
                <div className="flex justify-center">
                    <button 
                        onClick={capturePhoto}
                        className="bg-red shadow-red text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Capture ID Photo
                    </button>
                </div>
                    {showSuccessMessage && (
                        <p className='font-bold mt-2 text-green text-center mb-4'>ID captured successfully!</p>
                    )}
            </form>
        </div>
    )
};

export default IDPhotoCapture;
