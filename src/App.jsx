import React from 'react';
import './App.scss'
import { Routes, Route,} from 'react-router-dom'
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Lookbook from './pages/Lookbook/Lookbook';
import Features from './pages/Features/Features';
import Pages from './pages/Pages/Pages';
import Blog from './pages/Blog/Blog';



const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                   <Route path='/' element={<Home/>}/> 
                   <Route path='/Shop' element={<Shop/>}/>
                   <Route path='/Lookbook' element={<Lookbook/>}/>
                   <Route path='/Features' element={<Features/>}/>
                   <Route path='/Pages' element={<Pages/>}/>
                   <Route path='/Blog' element={<Blog/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;