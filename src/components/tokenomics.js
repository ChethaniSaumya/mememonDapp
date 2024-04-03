import React, { Component, useEffect } from 'react';
import '../App.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import shell1 from '../assets/Asset 1@3x.png'

const Stry = () => {
    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, [])
}

class Tokenomics extends Component {

    render() {
        return (

            <div>
                <div class="aboutMain--2">
                    <div class="conT">$MMONOMIC</div>

                    <div className='boxMain'>
                        <div class="boxAbout2">
                            <div>SEND #SOL TO: <span className='hlF'>4nmXysF2ptWvBbgYyZrLUB2eCZqcqgNJ5pkc8QApUMhJ</span></div>
                        </div>

                        <div class="boxAbout2">
                            <div>Hardcap: <span className='hlF'>2000 SOL</span></div>
                        </div>

                        <div class="boxAbout2">
                            <div>Min Deposit: <span className='hlF'>0.1 SOL</span></div>
                        </div>

                        <div class="boxAbout2">
                            <div><span className='hlF'>40%</span> of tokens to <span className='hlF'>LP</span></div>
                        </div>

                        <div class="boxAbout2">
                            <div><span className='hlF'>40%</span> of tokens to <span className='hlF'>Presale</span></div>
                        </div>

                        <div class="boxAbout2">
                            <div><span className='hlF'>10% AIRDROP</span> to all of early & active $MMON members + ANGELS </div>
                        </div>

                        <div class="boxAbout2">
                            <div><span className='hlF'>5%</span> for <span className='hlF'>Marketing</span></div>
                        </div>

                        <div class="boxAbout2">
                            <div><span className='hlF'>5%</span> for <span className='hlF'>CEXS</span></div>
                        </div>

                        <div class="boxAbout2">
                            <div>Presale Vesting:
                                <span className='hlF'>50%</span> on TGE, 1 month cliff then <span className='hlF'>4 months</span> linear
                            </div>
                        </div>
                    </div>

                    <div className='tierMain'>
                        <div className='tierSection1'>
                            <div className='tierH'>GOLDEN TIER ANGELS</div>
                            <p>1000 early wallets that deposit >= 5 $SOL will get extra 10% $MMON</p>
                            <p>500 early Wallets that deposit >= 10 $SOL will get extra 15% $MMON + 1 RARE Mememon NFT</p>
                        </div>

                        <div className='tierSection2'>
                        <div className='tierSection2-2'>
                            <div className='tierH'>WHALE TIER ANGELS</div>
                            <p>ONLY 10 Wallets that deposit >= 100 $SOL will get extra 20% $MMON + 1 LEGENDARY Mememon NFT</p>
                        </div>
                        </div>

                    </div>
                </div>
                <div className='shells2'>

                    <img className='shell1' src={shell1} />

                </div>
            </div>
        )
    }
}

export default Tokenomics;