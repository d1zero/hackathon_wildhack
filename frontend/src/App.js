import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Container } from '@mui/material';
import Header from './components/Header/Header';
import News from './pages/News';
import About from './pages/About';
import Timeline from './pages/Timeline';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<Timeline />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/news" element={<News />} />
                <Route path="/about" element={<About />} />
            </Routes>
            {/* </Container> */}
        </div>
    );
};

export default App;
