import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./homepage.jsx";
import Items from "./items.jsx";
import Login from "./login.jsx";
import Register from "./register.jsx";
import MangaTable from "./mangatable.jsx";
import { AuthProvider } from './components/authentication.jsx';
import { MangacontextProvider } from './components/Mangacontext.jsx';

function App() {
    return (
        <AuthProvider>
            <MangacontextProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/items" element={<Items />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        <Route path="/mangatable" element={<MangaTable />} />
                    </Routes>
                    <Footer />
                </Router>
            </MangacontextProvider>
        </AuthProvider>
    );
}

export default App;
