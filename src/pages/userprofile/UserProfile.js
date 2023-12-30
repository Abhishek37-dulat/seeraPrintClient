import React, { useState } from "react";
import "./userprofile.css";
import Dashboard from "../../components/UserProfile/Dashboard";
import MyProject from "../../components/UserProfile/MyProject";
import OrderHistory from "../../components/UserProfile/OrderHistory";
import MyUploads from "../../components/UserProfile/MyUploads";
import MyDesigns from "../../components/UserProfile/MyDesigns";
import MyDigitalMarketing from "../../components/UserProfile/MyDigitalMarketing";
import PaymentDelivery from "../../components/UserProfile/PaymentDelivery";
import AccountSettings from "../../components/UserProfile/AccountSettings";
import MySubscription from "../../components/UserProfile/MySubscription";
import FavTemplate from "../../components/UserProfile/FavTemplate";

const UserProfile = () => {
  const [isDashboard, setIsDashboard] = useState(true);
  const [isMyProject, setIsMyProject] = useState(false);
  const [isOrderHistory, setIsOrderHistory] = useState(false);
  const [isMyUploads, setIsMyUploads] = useState(false);
  const [isMyDesign, setIsMyDesign] = useState(false);
  const [isMyDigitalMarketing, setIsDigitalMarketing] = useState(false);
  const [isPaymentDelivery, setIsPaymentDelivery] = useState(false);
  const [isAccountSettings, setIsAccountSettings] = useState(false);
  const [isMySubscription, setIsMySubscription] = useState(false);
  const [isFavTemplate, setIsFavTemplate] = useState(false);

  const handleDashboard = (event) => {
    setIsDashboard(true);
    setIsMyProject(false);
    setIsOrderHistory(false);
    setIsMyUploads(false);
    setIsMyDesign(false);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(false);
    setIsAccountSettings(false);
    setIsMySubscription(false);
    setIsFavTemplate(false);
  };
  const handleMyProject = (event) => {
    setIsDashboard(false);
    setIsMyProject(true);
    setIsOrderHistory(false);
    setIsMyUploads(false);
    setIsMyDesign(false);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(false);
    setIsAccountSettings(false);
    setIsMySubscription(false);
    setIsFavTemplate(false);
  };
  const handleOrderHistory = (event) => {
    setIsDashboard(false);
    setIsMyProject(false);
    setIsOrderHistory(true);
    setIsMyUploads(false);
    setIsMyDesign(false);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(false);
    setIsAccountSettings(false);
    setIsMySubscription(false);
    setIsFavTemplate(false);
  };
  const handleMyUploads = (event) => {
    setIsDashboard(false);
    setIsMyProject(false);
    setIsOrderHistory(false);
    setIsMyUploads(true);
    setIsMyDesign(false);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(false);
    setIsAccountSettings(false);
    setIsMySubscription(false);
    setIsFavTemplate(false);
  };
  const handleMyDesign = (event) => {
    setIsDashboard(false);
    setIsMyProject(false);
    setIsOrderHistory(false);
    setIsMyUploads(false);
    setIsMyDesign(true);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(false);
    setIsAccountSettings(false);
    setIsMySubscription(false);
    setIsFavTemplate(false);
  };
  const handleMyDigitalMarketing = (event) => {
    setIsDashboard(false);
    setIsMyProject(false);
    setIsOrderHistory(false);
    setIsMyUploads(false);
    setIsMyDesign(false);
    setIsDigitalMarketing(true);
    setIsPaymentDelivery(false);
    setIsAccountSettings(false);
    setIsMySubscription(false);
    setIsFavTemplate(false);
  };
  const handlePaymentDelivery = (event) => {
    setIsDashboard(false);
    setIsMyProject(false);
    setIsOrderHistory(false);
    setIsMyUploads(false);
    setIsMyDesign(false);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(true);
    setIsAccountSettings(false);
    setIsMySubscription(false);
    setIsFavTemplate(false);
  };
  const handleAccountSettings = (event) => {
    setIsDashboard(false);
    setIsMyProject(false);
    setIsOrderHistory(false);
    setIsMyUploads(false);
    setIsMyDesign(false);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(false);
    setIsAccountSettings(true);
    setIsMySubscription(false);
    setIsFavTemplate(false);
  };
  const handleMySubscription = (event) => {
    setIsDashboard(false);
    setIsMyProject(false);
    setIsOrderHistory(false);
    setIsMyUploads(false);
    setIsMyDesign(false);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(false);
    setIsAccountSettings(false);
    setIsMySubscription(true);
    setIsFavTemplate(false);
  };
  const handleFavTemplate = (event) => {
    setIsDashboard(false);
    setIsMyProject(false);
    setIsOrderHistory(false);
    setIsMyUploads(false);
    setIsMyDesign(false);
    setIsDigitalMarketing(false);
    setIsPaymentDelivery(false);
    setIsAccountSettings(false);
    setIsMySubscription(false);
    setIsFavTemplate(true);
  };

  return (
    <div className="container-fluid">
      <div className="row py-4">
        <div className="col-12 col-sx-12 col-md-12 col-lg-3 col-xl-3">
          <div className="mx-4">
            <h4 className="py-4">Account</h4>
            <div className="user-profile-title" onClick={handleDashboard}>
              <p>Dashboard</p>
            </div>
            <div className="user-profile-title" onClick={handleMyProject}>
              <p>My Project</p>
            </div>
            <div className="user-profile-title" onClick={handleOrderHistory}>
              <p>Order History & Record</p>
            </div>
            <div className="user-profile-title" onClick={handleMyUploads}>
              <p>My Uploads</p>
            </div>
            <div className="user-profile-title" onClick={handleMyDesign}>
              <p>My Design Services</p>
            </div>
            <div
              className="user-profile-title"
              onClick={handleMyDigitalMarketing}
            >
              <p>My Digital Marketing Services</p>
            </div>
            <div className="user-profile-title" onClick={handlePaymentDelivery}>
              <p>Payment & Delivery</p>
            </div>
            <div className="user-profile-title" onClick={handleAccountSettings}>
              <p>Account Settings</p>
            </div>
            <div className="user-profile-title" nClick={handleMySubscription}>
              <p>My Subscriptions</p>
            </div>
            <div className="user-profile-title" onClick={handleFavTemplate}>
              <p>Favourite Template</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sx-12 col-md-12 col-lg-9 col-xl-9">
          {isDashboard ? <Dashboard /> : null}
          {isMyProject ? <MyProject /> : null}
          {isOrderHistory ? <OrderHistory /> : null}
          {isMyUploads ? <MyUploads /> : null}
          {isMyDesign ? <MyDesigns /> : null}
          {isMyDigitalMarketing ? <MyDigitalMarketing /> : null}
          {isPaymentDelivery ? <PaymentDelivery /> : null}
          {isAccountSettings ? <AccountSettings /> : null}
          {isMySubscription ? <MySubscription /> : null}
          {isFavTemplate ? <FavTemplate /> : null}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
