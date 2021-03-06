import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

import LandingImage from '../../assets/images/logo.png'
import WineImage from '../../assets/images/icons/wine.png'
import WineAndBottle from '../../assets/images/icons/glass-and-bottle-of-wine.png'

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

                <div className="buttons-container">
                    <Link to='/wineForm' className='get-tips'>
                        <img src={WineImage} alt="developer-icon" />
                        Add a new Wine
                    </Link>

                    <Link to='/list-wine' className='give-tips'>
                        <img src={WineAndBottle} alt="teacher-icon" />
                        List wines
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Landing;

