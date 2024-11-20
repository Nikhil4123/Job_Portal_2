/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel.jsx';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';


const Home = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar/>
        <HeroSection/>
       <CategoryCarousel/>
       <LatestJobs/>
       <Footer/>
    </div>
  )
}

export default Home