import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import News from './Pages/News';
import About from './Pages/About';
import Timeline from './Pages/Timeline';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Timeline />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
