import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="  bg-white text-gray-800 p-8">
                <h1 className="text-3xl font-bold mb-4">About LankaQuest</h1>
                <p className="text-lg mb-4">
                    LankaQuest is your travel partner, helping you plan and book tours across Sri Lanka.
                    Currently, we focus only on tour services to make your journeys easy and enjoyable.
                </p>

                <h2 className="text-3xl font-semibold mb-3">Why Choose LankaQuest?</h2>
                <ul className="  .text-3xl list-disc list-inside mb-4">
                    <li>Easy tour bookings</li>
                    <li>Trusted travel guides</li>
                    <li>Convenient and reliable service</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-3">Our Goal</h2>
                <p>
                    We aim to offer the best tour experiences, so you can explore Sri Lanka without any hassle.
                </p>
            </div>
        </div>

    );
};

export default About;

