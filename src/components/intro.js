import React, { Component, useEffect } from 'react';
import '../App.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import shell1 from '../assets/shell1.png';
import shell2 from '../assets/shell2.png';


const Stry = () => {
    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, [])
}

class Intro extends Component {

    render() {
        return (

            <div className='blueBg'>
            <div class="aboutMain--2">
                <p class="conT2">Welcome to MeMeMon, the thrilling intersection of finance and fun within the innovative landscape of Solana! Our delightful turtles are not only here to bring laughter but also to offer you an exciting opportunity to expand your portfolio on the swift and efficient Solana blockchain.</p>
                <p class="conT2">Step into our community of jesters and geniuses where you can utilize your $SOL to secure your stake of $MMON tokens. Buckle up for an exhilarating journey through the realm of cryptocurrency – where the memes are as robust as the technology driving them forward!</p>
                <p class="conT2">Are you prepared for a good laugh and a chance to grow your investments? Delve into the captivating world of MeMeMon and let the laughter and profits flow!</p>
            </div>

            <div className='shells2'>

            <img className='shell1' src={shell1}/>
            <img className='shell2' src={shell2}/>

            </div>
            </div>
        )
    }
}

export default Intro;

