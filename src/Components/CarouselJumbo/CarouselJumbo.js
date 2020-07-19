import React from 'react';
import Carousel from '../Carousel/Carousel';
import { pulse, rollIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './style.css'

const styles = {
    rollIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(rollIn, 'fadeIn')
    },
    pulse: {
        animation: 'x 2s',
        animationName: Radium.keyframes(pulse, 'fadeIn')
    }
}

function CarouselJumbo({ projects }) {
    return (
        <>
            <div id="carouselJumbo">
                <StyleRoot>
                    <h3 style={styles.rollIn}>My designs are sleek, energetic, and functional.</h3>
                    <p style={styles.pulse}>Check out some of my projects here!</p>
                </StyleRoot>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <Carousel projects={projects} />
                </div>
            </div>
        </>
    )
}

export default CarouselJumbo;