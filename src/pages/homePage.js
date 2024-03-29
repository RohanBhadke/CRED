import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/common/Header';
import ProductShowcase from '../components/productShowcase';
import FeelSpecial from '../components/FeelSpecial';
import BrandsLove from '../components/BrandsLove';
import CredExperience from '../components/CredExperience';
import MobileScroll from '../components/MobileScroll';
import WindowPeak from '../components/WindowPeak';
import CredSecurity from '../components/credSecurity';
import CredStory from '../components/credStory';
import AppRating from '../components/AppRating';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
     <Header/>
    <HeroSection />
    <ProductShowcase />
    < FeelSpecial/>
    <BrandsLove/>
    <CredExperience/>
    <MobileScroll />
    <div className="non-mobile">
    <WindowPeak/>
    </div>
    <CredSecurity/>
    <CredStory/>
    <AppRating/>
    <Footer/>
    
    </>
  );
}

export default HomePage;