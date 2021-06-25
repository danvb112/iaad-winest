import React from 'react'

import './styles.css'

import LandingImage from '../../assets/images/logo.png'

function Landing() {

    const nameProject = "Winest"
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h1>{nameProject}</h1>
                    <h2>Your Digital Cellar Plataform</h2>
                </div>

                <img
                    src={LandingImage}
                    alt="Landing-image"
                    className='hero-image'
                />
            </div>
        </div>
    )
}

export default Landing;

