import React from "react";
import { useState, useEffect } from "react";
import Arrived from "../components/Arrived";
import AsideMenu from "../components/AsideMenu";
import Browse from "../components/Browse";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offline from "../components/Offline";
import SplashScreen from "./SplashScreen";

export default function LandingPage({ cart }) {
  const [OfflineStatus, setOflineStatus] = useState(!navigator.onLine);
  const [isSplasScreen, setIsSplasScreen] = useState(true);

  // jika status online
  function handleOfflineStatus() {
    setOflineStatus(!navigator.onLine);
  }

  useEffect(() => {
    handleOfflineStatus();
    window.addEventListener("online", handleOfflineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    // ketika dalam 1,5 detik splash screen menghidden
    setTimeout(() => {
      setIsSplasScreen(false);
    }, 1500);

    // remove event
    return function () {
      window.removeEventListener("online", handleOfflineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, [OfflineStatus]);

  return (
    <>
      {OfflineStatus && <Offline />}
      {isSplasScreen === true ? (
        <SplashScreen />
      ) : (
        <>
          <Header mode="light" cart={cart} />
          <Hero />
          <Browse />
          <Arrived />
          <Clients />
          <AsideMenu />
          <Footer />
        </>
      )}
    </>
  );
}
