import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import News from './Pages/News';
import About from './Pages/About';
import Timeline from './Pages/Timeline';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<News />} />
                <Route path="/About" element={<About />} />
                <Route path="/Timeline" element={<Timeline />} />
            </Routes>
        </div>
    );
};

export default App;
