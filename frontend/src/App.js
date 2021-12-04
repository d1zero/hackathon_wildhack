import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import fetchData from './utils/fetchData';

const App = () => {
    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/news/`, {
            headers: {
                'Content-Type': 'Application/json',
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
        </div>
    );
};

export default App;
