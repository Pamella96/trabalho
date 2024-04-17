    import React from 'react';

    import './components/Registrar';
    import {BrowserRouter, Routes, Route} from 'react-router-dom';
    import Home from './components/Home';
    import Login from './components/Login';

    function AppRoutes() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/registrar' element={<Registrar />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        );
    }

    export default AppRoutes;