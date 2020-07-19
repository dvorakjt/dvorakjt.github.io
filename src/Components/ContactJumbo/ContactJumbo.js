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

function ContactJumbo() {


    return (
        <div id="contactJumbo">
            <StyleRoot>
                <h4 style={styles.fadeIn}>Let's Build Something!</h4>
                <p style={styles.fadeIn2}><b>Email: </b>dvorakjt@gmail.com</p>
                <p style={styles.fadeIn2}><b>Phone: </b>(610) 809-9473</p>
                <p style={styles.fadeIn3}><b>Github: </b><a
                    href="https://github.com/dvorakjt" target="_blank">github.com/dvorakjt</a></p>
                <p style={styles.fadeIn3}><b>LinkedIn: </b><a
                    href="https://www.linkedin.com/in/joseph-dvorak-16b565157/" target="_blank">linkedin.com/in/joseph-dvorak-16b565157/</a></p>
                <p style={styles.fadeIn3}><b>Resume: </b>
                    <a href="https://drive.google.com/file/d/1WdQbfHX9xaWF_FT6vlOg4_xNR2xO-MzG/view?usp=sharing" target="_blank">Resume.pdf</a></p>
            </StyleRoot>
        </div>
    )
}

export default ContactJumbo;