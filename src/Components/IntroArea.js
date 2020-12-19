import React from 'react'
import brain from '../images/Brain.svg'
import base from '../images/Base.svg'
import light from '../images/Light.svg'
import useWebAnimations from "@wellyshen/use-web-animations";

export const IntroArea = () => {
    const { ref } = useWebAnimations({
        keyframes: [
            {transform: 'translateY(0)'},
            {transform: 'translateY(-25px)'},
            {transform: 'translateY(15px)'},
            {transform: 'translateY(0px)'},
        ],
        timing: {
            duration: 5000, iterations: Infinity
        }
      });
    const frame1 = { opacity: 0.75 };
    const frame2 = { opacity: 0 };
    
    const lightAnimation = useWebAnimations({
        keyframes: [
            { ...frame1, offset: 0 },
            //band hui
            { ...frame2, offset: 0.15 },
            //khul gai
            { ...frame1, offset: 0.25 },
            //pause
            { ...frame1, offset: 0.35 },
            //ab bnd
            { ...frame2, offset: 0.40 },
            { ...frame1, offset: 0.45 },
        
            { ...frame1, offset: 0.55 },
        
            { ...frame2, offset: 0.70 },
            { ...frame1, offset: 0.85},
            { ...frame1, offset: 1 },
        ],
        timing: {
            duration: 1000, fill: "both", iterations: Infinity
        }
    })


    return (
        <div className="container-fluid bg-dark bg-gradient intro-container">
            {/* a grid of 6*6 with left for text and button and right for brain animation */}
            <div className="row">
                <div className="col-lg-5">
                    <div className="cortex-text text-center text-white">
                        CORTEX
                    </div>
                    <div className="copywriter-text text-center text-white">
                        COPYWRITER
                    </div>
                    <br />
                    <div className="description-text text-center text-white">
                        I wield wicked words wisely without wasting a single letter
                    </div>
                    <br />
                    <div className="text-center">
                        <button className="btn">Send Message</button>
                    </div>
                </div>
                <div className="col-lg-7 intro-anim">
                    <img src={brain} alt="brain" id="brain" ref={ref}/>
                    <img src={base} alt="base" id="base"/>
                    <img src={light} alt="light" id="light" ref={lightAnimation.ref}/>
                </div>
            </div>
        </div>
    )
}
