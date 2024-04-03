import React, { Component, useEffect } from 'react';
import '../App.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import img1 from '../assets/1m.jpg'
import img2 from '../assets/2m.jpg'
import img3 from '../assets/3m.jpg';


const Stry = () => {
    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, [])
}

class Team extends Component {

    render() {
        return (

            <div class="aboutMain">
                <div class="conT">$MMON TURTLE TEAM </div>

                <div className='boxMain'>
                    <div className='box2Main'>
                        <div class="boxAbout">
                            <img src={img1} />
                            <div>Nolan Mercer</div>
                            <p>Former Blockchain Lead at ChainCrafters, Nolan Mercer developed bespoke blockchain solutions for fintech startups, enhancing their security and transparency. His work contributed to ChainCrafters' reputation as an innovator in blockchain technology for finance</p>
                        </div>

                        <div class="boxAbout">
                            <img src={img2} />
                            <div>Sofia Martinez</div>
                            <p>At PixelPerfect Studios, as the Creative Director, Sofia Martinez was instrumental in crafting user-centric designs for mobile applications, significantly improving user engagement and client satisfaction. Her design philosophy helped PixelPerfect stand out in a crowded app market.</p>
                        </div>
                    </div>

                    <div className='box2Main'>
                        <div class="boxAbout">
                            <img src={img3} />
                            <div>Julian Knight</div>
                            <p>As a Product Manager at CloudNet Innovations, Julian Knight led the launch of cutting-edge SaaS products that helped startups scale operations securely in the cloud. His strategic vision and execution helped position CloudNet as a go-to for cloud solutions.</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Team;

