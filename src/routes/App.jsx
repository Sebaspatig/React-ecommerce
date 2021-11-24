import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Forgotpass from '../containers/Forgotpass';
import Home from '../pages/Home';
import MyOrder from '../pages/MyOrder';
import NotFound from '../pages/NotFound';
import "../styles/global.sass"

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" caseSensitive={false} element={<Home />}/>
                    <Route path="/login" caseSensitive={false} element={<Login />} />
                    <Route path="/myOrder" caseSensitive={false} element={<MyOrder />} />
                    <Route path="/forgotpass" caseSensitive={false} element={<Forgotpass />} />
			        <Route path="*" element={<NotFound />} />            
                </Routes>    
            </Layout>
        </BrowserRouter>
    );
}

export default App;
