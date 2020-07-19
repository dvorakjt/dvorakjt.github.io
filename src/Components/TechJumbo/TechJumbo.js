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
    }
}

function TechJumbo() {


    return (
        <div id="techJumbo">
            <StyleRoot>
                <h3 style={styles.fadeIn}>Please view my complete portfolio below!</h3>
                <p style={styles.fadeIn2}><b>Technologies used:</b> HTML, CSS, JavaScript, Bootstrap, Bulma, JQuery, Axios, MySql, Sequelize, MongoDB, Mongoose,
                React, and more!</p>
            </StyleRoot>
        </div>
    )
}

export default TechJumbo;