import React, { useEffect } from 'react'
import about from '../images/about.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const About = () => {
    useEffect(() => {
        AOS.init({duration: 3000});
    }, [])
    return (
        <div className="container-fluid bg-dark text-center bg-gradient text-white">
            <br />
            <div data-aos='zoom-in' className="border border-5 rounded-circle img-container">
                <div className="inner-img-container border border-5 rounded-circle">
                    <img src={about} alt="aboutPerson" width="300px" className="ms-auto" style={{display: 'block'}}/>
                </div>
            </div>
            <div data-aos='fade' className="about-img-container">
                <span style={{fontWeight: 'bold'}}>Nathan Mudaliar</span>
                <span style={{fontStyle: 'italic', fontWeight: 'light'}}>, the Cortex Copywriter</span>
            </div>
            <br />

            <div data-aos='fade' className="about-heading-block">
                <h3 className="about-heading bg-dark bg-gradient">About</h3>
                <p>What’s next after next level? Moi. That’s who!</p>
                <br />
                <p>My superpower is conjuring crystal-clear copy that hacks your users' brains to guide their clicks and make them buy your shit.</p>
            </div>
        </div>
    )
}
