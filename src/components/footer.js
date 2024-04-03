import React, { Component, useEffect } from 'react';
import '../App.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import tg from '../assets/telegram.png';
import x from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import logo from '../assets/logo.png';
import stones from '../assets/stones.png';

const Stry = () => {
    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, [])
}

const xLink = () => {
    window.open("https://x.com/mememon_io");
}

const insta = () => {
    window.open("https://www.instagram.com/mememon_io?");
}

const teleG = () => {
    window.open("https://t.me/mememon_io");
}

class Footer extends Component {

    render() {
        return (

            <div>

                <img className='stones' src={stones} />

                <div class="boxWrap2Footer">

                    <div class="footer">

                        <img class="logoF" src={logo} />
                        <div class="iconsF">
                            <img onClick={teleG} src={tg} />
                            <img onClick={xLink} src={x} />
                            <img onClick={insta} src={instagram} />

                        </div>

                        <div class="copyright">Copyright © 2024 MEMEMON. All Rights Reserved</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer;

