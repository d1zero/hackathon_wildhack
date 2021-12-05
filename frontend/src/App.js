import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import News from './Pages/News';
import About from './Pages/About';
import Timeline from './Pages/Timeline';

const App = () => {
    return (
        <div
            className="App"
            style={{
                backgroundImage: `url("https://3djungle.ru/upload/resize_cache/iblock/0f2/400_400_1/0f2b0e74304e25fe01bbc29cd0bd960f.jpg")`,
                backgroundRepeat: 'repeat',
                minHeight: '100vh',
            }}
        >
            <Header />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Timeline />} />
                    <Route path="/news/" element={<News />} />
                    <Route path="/about/" element={<About />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
