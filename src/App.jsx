import React from 'react';
import MainIndex from './layout'
import './App.css'
// import { NotFound } from './views/err/notFound';
import { Routes, Route } from "react-router-dom";

const App = () => (
  <Routes>
    {/* <Route path='/404' element={<NotFound />}></Route> */}
    <Route path='/*' element={ <MainIndex />} ></Route>
  </Routes>
);

export default App;