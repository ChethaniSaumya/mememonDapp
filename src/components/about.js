import React, { Component, useEffect } from 'react';
import '../App.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import stone from '../assets/stoneSticky2.png';
import stone2 from '../assets/stoneSticky2.png';

const Stry = () => {
    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, [])
}

class About extends Component {

    render() {
        return (

            <div>
            <div class="aboutMain">
                <div>
                    <div class="conT">WTF IS MEMEMON?</div>
                    <p class="conT2"><span className='conT2-HL'>Unraveling the Mystery of MeMeMon: Where Laughter Becomes Currency</span> Ever pondered a universe where your laughter could be traded like currency and jokes serve as investments? Welcome to MeMeMon, where the power of turtles meets the innovation of blockchain in a riotous display of hilarity and lucrative returns!</p>
                    <p class="conT2">MeMeMon isn’t your run-of-the-mill meme coin; it’s your passport to an uproarious, shell-shocking bash on the Solana blockchain. Imagine yourself lounging on a virtual beach, indulging in digital piña coladas, all while your MeMeMon works its magic, transforming giggles into Solana – and Solana into $MMON.</p>
                    <p class="conT2">Are you ready to chuckle your way to financial gains? MeMeMon isn’t kidding around when it comes to blending fun with finance. Come join us, and let the laughter pave your path to wealth!</p>
                </div>
            </div>

            <div className='flexStone'>
            <img className='stoneS' src={stone}/>
            <img className='stoneS2' src={stone2}/>
            </div>
            </div>
        )
    }
}

export default About;