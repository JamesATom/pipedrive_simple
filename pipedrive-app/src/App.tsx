import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './auth';
import Callback from './Callback';
import PipedriveApp from './PipedriveApp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/callback" element={<Callback />} />
                <Route path="/pipedrive" element={<PipedriveApp />} />
            </Routes>
        </Router>
    );
}

export default App;
