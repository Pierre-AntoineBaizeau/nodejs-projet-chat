import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import Chat from './components/Chat';

const App = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">login</Link>
                    </li>
                    <li>
                        <Link to="/chat">chat</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/chat" element={<Chat/>}/>
            </Routes>
        </div>
    </Router>
);

export default App;