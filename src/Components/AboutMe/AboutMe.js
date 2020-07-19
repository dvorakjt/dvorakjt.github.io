import React from 'react';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './style.css'

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    fadeIn2: {
        animation: 'x 2s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    fadeIn3: {
        animation: 'x 3s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

function AboutMe() {


    return (
        <div id="aboutMeJumbo">
            <StyleRoot>
                <h3 style={styles.fadeIn}>Hi, I'm Joe. It's nice to meet you!</h3>
                <p style={styles.fadeIn2}>I'm a full-stack web developer, a classical clarinetist and educator, and a forward-thinking, problem-solving creative.</p>
                <p style={styles.fadeIn3}>I am currently studying full-stack web development through the Penn LPS Full-stack Coding Bootcamp. Prior to this I earned degrees in
                clarinet performance, and have been teaching and freelancing on the clarinet in and around Philadelphia for the past 6 years. Both music and technology
have been lifelong passions. I started playing the clarinet when I was 9, and when I was in high school I taught myself how to program simple computer games.</p>
            </StyleRoot>
        </div>
    )
}

export default AboutMe;