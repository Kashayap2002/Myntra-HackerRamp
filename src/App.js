// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import Streak from './components/Streak';
import shoesImage from './assets/shoes.png';
import dressesImage from './assets/dresses.png';
import handbagsImage from './assets/handbags.png';

function App() {
    // Mock streak data
    const mockStreak = 19; // This would be fetched from the backend or local storage in a real app

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="streak-container">
                    <Streak streak={mockStreak} /> {/* */}
                </div>
                <main className="main">
                    <Card title="Shoes" time="10:00 am - 10:05 am" imageUrl={shoesImage} link="/shoes" />
                    <Card title="Dresses" time="01:00 pm - 01:05 pm" imageUrl={dressesImage} />
                    <Card title="Handbags" time="05:00 pm - 05:05 pm" imageUrl={handbagsImage} />
                </main>
                <Routes>
                    {/* routes*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
