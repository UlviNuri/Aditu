import React from 'react'
import About from './About/About';
import Contact from './ContactMe/Contact';
import HomeBanner from './HomeBanner/HomeBanner';
import StyleGuide from './StyleGuide/StyleGuide';

const Home = () => {
    return (
        <>
        <HomeBanner/>
        <About/>
        <Contact/>
        <StyleGuide/>
        </>
    )
}

export default Home