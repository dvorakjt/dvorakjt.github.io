import React from 'react';
import './style.css'
import globePlotter from '../../Images/globePlotter.jpg'
import noteTaker from '../../Images/noteTaker.png'
import weatherDashboard from '../../Images/weatherDashboard.png'
import songInTheLife from '../../Images/songInTheLife.png'
import teamBuilder from '../../Images/teamBuilder.jpg'
import employeeDirectory from '../../Images/employeeDirectory.png'

const images = {
    globePlotter: globePlotter,
    noteTaker: noteTaker,
    weatherDashboard: weatherDashboard,
    songInTheLife: songInTheLife,
    teamBuilder: teamBuilder,
    employeeDirectory: employeeDirectory
}


function Project({ title, deployedUrl, repoUrl, description, imgSrc }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={images[imgSrc]} alt={"Image of " + title} />
            <p>{description}</p>
            <a target="_blank" href={deployedUrl}>Application</a><br />
            <a href={repoUrl}>Repository</a>
        </div>
    )
}

export default Project;