// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-indigo-950 to-purple-800 text-white py-4 px-5">
            <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-1">CryptoMania</h2>
                    <p className="mb-2">Stay updated with the latest trends in cryptocurrency.</p>
                   
                </div>
                <div className='hidden md:block'>
                    <h2 className="text-xl font-bold mb-1">Navigation</h2>
                    <ul className="flex justify-center space-x-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Market</a></li>
                        <li><a href="#" className="hover:underline">News</a></li>
                        
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-1">Follow Us</h2>
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
               
            </div>
            <p className='flex text-center justify-center mt-2'>&copy; 2024 Md Saquib Hussain. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
