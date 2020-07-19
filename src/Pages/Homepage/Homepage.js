import React from 'react';
import Header from '../../Components/Header/Header';
import CarouselJumbo from '../../Components/CarouselJumbo/CarouselJumbo';
import AboutMe from '../../Components/AboutMe/AboutMe';
import ContactJumbo from '../../Components/ContactJumbo/ContactJumbo';

function Homepage({ projects }) {
    return (
        <>
            <Header />
            <AboutMe />
            <CarouselJumbo projects={projects} />
            <ContactJumbo />
        </>
    )
}

export default Homepage;