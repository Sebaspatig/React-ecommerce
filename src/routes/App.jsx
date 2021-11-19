import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import "../styles/global.sass"

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" caseSensitive={false} element={<Home />}/>
                    <Route path="/login" caseSensitive={false} element={<Login />} />
			        <Route path="*" element={<NotFound />} />
                            
                </Routes>    
            </Layout>
        </BrowserRouter>
    );
}

export default App;
