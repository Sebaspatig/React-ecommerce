import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Forgotpass from '../containers/Forgotpass';
import Home from '../pages/Home';
import MyOrder from '../containers/MyOrder';
import NotFound from '../pages/NotFound';
import "../styles/global.sass"
import AppContext from '../context/AppContext';
import useinitialState from '../hooks/useinitialState';


const App = () => {
    const initialState = useinitialState();
    return (
        <AppContext.Provider value = {initialState}>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" caseSensitive={false} element={<Home />}/>
                    <Route path="/login" caseSensitive={false} element={<Login />} />
                    {/* <Route path="/myOrder" caseSensitive={false} element={<MyOrder />} /> */}
                    <Route path="/forgotpass" caseSensitive={false} element={<Forgotpass />} />
			        <Route path="*" element={<NotFound />} />            
                </Routes>    
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
