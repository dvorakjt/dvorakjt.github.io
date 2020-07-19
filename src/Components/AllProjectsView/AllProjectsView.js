import React from 'react';
import Project from '../Project/Project';


function AllProjectsView({ projects }) {
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <Project title={projects[0].title} imgSrc={projects[0].imgSrc} description={projects[0].description} deployedUrl={projects[0].deployedUrl}
                        repoUrl={projects[0].repoUrl} />
                </div>
                <div className="col-md-4">
                    <Project title={projects[1].title} imgSrc={projects[1].imgSrc} description={projects[1].description} deployedUrl={projects[1].deployedUrl}
                        repoUrl={projects[1].repoUrl} />
                </div>
                <div className="col-md-4">
                    <Project title={projects[2].title} imgSrc={projects[2].imgSrc} description={projects[2].description} deployedUrl={projects[2].deployedUrl}
                        repoUrl={projects[2].repoUrl} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Project title={projects[3].title} imgSrc={projects[3].imgSrc} description={projects[3].description} deployedUrl={projects[3].deployedUrl}
                        repoUrl={projects[3].repoUrl} />
                </div>
                <div className="col-md-4">
                    <Project title={projects[4].title} imgSrc={projects[4].imgSrc} description={projects[4].description} deployedUrl={projects[4].deployedUrl}
                        repoUrl={projects[1].repoUrl} />
                </div>
                <div className="col-md-4">
                    <Project title={projects[5].title} imgSrc={projects[5].imgSrc} description={projects[5].description} deployedUrl={projects[5].deployedUrl}
                        repoUrl={projects[5].repoUrl} />
                </div>
            </div>
        </>
    )
}

export default AllProjectsView;