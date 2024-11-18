import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import ListingView from './YourProduct/pages/ChooseListingView';

function App() {
    return (
        <Routes>
        <Route path="/Yourproducts" element={<ListingView></ListingView>} />
        <Route path="*" element={<h1>Not found</h1>} />

        </Routes>
    );

}

export default App;