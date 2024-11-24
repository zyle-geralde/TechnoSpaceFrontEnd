import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import ListingView from './YourProduct/pages/ChooseListingView';
import LearningResourcesPage from './YourProduct/pages/LearningResourcesPage';
import NotfundFunc from './NotFound/notfound';
import SchoolSupplyPage from './YourProduct/pages/SchoolSuppliespage';
import GadgetsPage from './YourProduct/pages/GadgetView';
import OthersPage from './YourProduct/pages/OthersViewPage';
import EditLearningResourcesPage from './EditYourProducts/pages/EditLearningResourcesPage';
import EditSchoolSuplliesPage from './EditYourProducts/pages/EditSchoolSupplies';
import EditGadgets from './EditYourProducts/pages/EditGadgets';
import EditOthers from './EditYourProducts/pages/EditOthers';
import LandingPage  from './LandingPage/LandingPage.jsx';
function App() {
    return (
        <Routes>
            <Route path="/Yourproducts" element={<ListingView></ListingView>} />
            <Route path="/Learningresourcesview" element={<LearningResourcesPage />} />
            <Route path="/Schoolsuppliesview" element={<SchoolSupplyPage />} />
            <Route path="/Gadgetsview" element={<GadgetsPage />} />
            <Route path="/Othersview" element={<OthersPage />} />
            <Route path="/EditLearningResources" element={<EditLearningResourcesPage />} /> 
            <Route path="/EditSchoolSupplies" element={<EditSchoolSuplliesPage />} /> 
            <Route path="/EditGadgets" element={<EditGadgets />} /> 
            <Route path="/EditOthers" element={<EditOthers />} /> 
            <Route path="*" element={<NotfundFunc />} />
            <Route path="/" element={<LandingPage />} />
        </Routes>
    );

}

export default App;