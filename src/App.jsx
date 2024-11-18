import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import ListingView from './YourProduct/pages/ChooseListingView';
import LearningResourcesPage from './YourProduct/pages/LearningResourcesPage';
import NotfundFunc from './NotFound/notfound';
import SchoolSupplyPage from './YourProduct/pages/SchoolSuppliespage';

function App() {
    return (
        <Routes>
            <Route path="/Yourproducts" element={<ListingView></ListingView>} />
            <Route path="/Learningresourcesview" element={<LearningResourcesPage />} />
            <Route path="/Schoolsuppliesview" element={<SchoolSupplyPage />} />
            <Route path="*" element={<NotfundFunc />} />

        </Routes>
    );

}

export default App;