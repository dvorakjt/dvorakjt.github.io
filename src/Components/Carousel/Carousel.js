import React from 'react';
import Project from '../Project/Project';
import './style.css'

function Carousel({ projects }) {
    return (
        <figure id="carouselIndicators" className="carousel slide" data-ride="carousel"
            data-interval="3500">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
                <li data-target="#carouselIndicators" data-slide-to="3"></li>
                <li data-target="#carouselIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                {projects.map(({ title, imgSrc, description, deployedUrl, repoUrl }, index) => {
                    return (
                        <div class={index === 0 ? "carousel-item active" : "carousel-item"}>
                            <Project title={title} imgSrc={imgSrc} description={description} deployedUrl={deployedUrl} repoUrl={repoUrl} />
                        </div>)
                })}
            </div>
        </figure>
    )
}

export default Carousel;