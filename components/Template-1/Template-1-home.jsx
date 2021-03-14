import React from 'react';
import ContactSection from './component/ContactSection';
import Enroll from './component/Enroll';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
// import NavBar from './component/Navbar';
import Newsletter from './component/Newsletter';
import OnlineLearn from './component/OnlineLearn';
import PopuClass from './component/PopuClass';
import Slider from './component/Slider';
import TeacherCard from './component/TeacherCard';

export default function HomeTemplate1() {
    return (
        <div>
            {/* <NavBar /> */}
            <Slider/>
            <OnlineLearn/>
            <PopuClass heading="Recent Activities"/>
            <ContactSection/>
            <Gallery/>
            <Enroll/>
            <TeacherCard/>
            <PopuClass heading="Our Blog"/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
