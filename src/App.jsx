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
import LandingPage from './LandingPage/LandingPage.jsx';
import SellListingView from './SellProducts/pages/CreateNewListing';
import SellProductsInListing from './SellProducts/pages/SellProductsInListing.jsx';
import YourCustomerPage from './YourCustomerPurchase/pages/YourCustomerPage.jsx';
import LogInPage from './LogInSignUp/pages/LogInPage.jsx';
import { useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();
    useEffect(() => {
        const body = document.body;
        if (location.pathname === "/") {
            body.classList.add("no-scroll-styles");
        } else {
            body.classList.remove("no-scroll-styles");
        }
    }, [location]);

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
            <Route path="/SellListingView" element={<SellListingView />} /> 
            <Route path="/SellProductsInListing" element={<SellProductsInListing />} />
            <Route path="/LogIn" element={<LogInPage />} /> 
            <Route path="/YourCustomerPurchase" element={<YourCustomerPage />} /> 
            <Route path="*" element={<NotfundFunc />} />
            <Route path="/" element={<LandingPage />} />
        </Routes>
    );

}

export default App;