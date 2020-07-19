import React from 'react';
import Header from '../../Components/Header/Header';
import AllProjectsView from '../../Components/AllProjectsView/AllProjectsView';
import TechJumbo from '../../Components/TechJumbo/TechJumbo';

function AllProjectsPage({ projects }) {
    return (
        <>
            <Header />
            <TechJumbo />
            <AllProjectsView projects={projects} />
        </>
    )
}

export default AllProjectsPage;