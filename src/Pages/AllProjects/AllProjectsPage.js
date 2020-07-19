import React from 'react';
import Header from '../../Components/Header/Header';
import AllProjectsView from '../../Components/AllProjectsView/AllProjectsView';
import TechJumbo from '../../Components/TechJumbo/TechJumbo';
import ContactJumbo from '../../Components/ContactJumbo/ContactJumbo';

function AllProjectsPage({ projects }) {
    return (
        <>
            <Header />
            <TechJumbo />
            <AllProjectsView projects={projects} />
            <ContactJumbo />
        </>
    )
}

export default AllProjectsPage;