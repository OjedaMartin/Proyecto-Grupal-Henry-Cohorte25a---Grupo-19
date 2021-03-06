import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing.jsx";
import SearchDetail from "./Components/SearchDetail";
import Detail from "./Components/Detail.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Admin from "./Admin/Admin";
import Header from "./Components/Header.jsx";
import Footer from "./Components/footer.jsx";
import Faq from "./Components/FAQ.jsx";
import Returns from "./Components/Returns.jsx";
import TermsandC from "./Components/TermsandC.jsx";
import TermsOfUse from "./Components/TermsOfUse.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import { Settings } from "./Users/Settings.jsx";
import { MyOrders } from "./Users/Orders.jsx";
import CartCard from "../src/Components/CartCard.jsx";
import ReviewForm from "./Components/reviewForm.jsx";
import Profile from "./Users/Profile.jsx";
import Stripe from "./Stripe/Stripe"
import { OrderGral } from "./Users/OrderGral.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/SearchDetail/collection/:category" element={<SearchDetail />} />
        <Route exact path="/SearchDetail/shopall/:allProducts" element={<SearchDetail />} />
        <Route exact path="/SearchDetail/search/:name" element={<SearchDetail />} />
        <Route exact path="/details/:id" element={<Detail />} />        
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/returns" element={<Returns />} />
        <Route exact path="/termsandconditions" element={<TermsandC />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/orders" element={<OrderGral />} />
        <Route path="/user/settings" element={<Settings />} />
        <Route path="/user/myorders/:id" element={<MyOrders />} />
        <Route exact path="/cart" element={<CartCard />} />
        <Route exact path="/addreview" element={<ReviewForm />} />
        <Route exact path="/stripe" element={<Stripe />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
