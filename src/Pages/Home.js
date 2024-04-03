/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import '../App.css';
import React, { useEffect, useMemo, useState } from 'react';
import twitter from '../assets/x.png';
import navbar from '../assets/navigation-bar.png';
import wrong from '../assets/wrong.png';
import logoPic from '../assets/logo.png';
import x from '../assets/twitter.png';
import tg from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import mail from '../assets/email.png';
import copy from '../assets/copy.png';
import video from '../assets/Under_the_Sea.mp4';
import Footer from '../components/footer';
import border from '../assets/border.png';

import $ from 'jquery';
import { Web3Button, Web3Modal, useWeb3Modal } from '@web3modal/react';
import { mainnet, useAccount, useContractRead, useContractReads, useContractWrite, useNetwork, usePublicClient, useSwitchNetwork } from 'wagmi';
import { createPublicClient, formatEther, http, parseEther } from 'viem';
import About from '../components/about';
import Countdown from 'react-countdown';
import Tokenomics from '../components/tokenomics';
import Team from '../components/team';
import Intro from '../components/intro';

var Scroll = require('react-scroll');

$(window).on('load', function () {
	setTimeout(function () { // allowing 3 secs to fade out loader
		$('.page-loader').fadeOut('slow');
	}, 2000);
});

const renderer = ({ days, hours, minutes, seconds, completed }) => {
	/*	if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {*/
	// Render a countdowns

	if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {

		window.location.reload(true);
		console.log("Mint Begins");
	}


	return <div class="counterBlock"><div class="days">{days}</div><div class="dots">:</div><div class="days">{hours}</div><div class="dots">:</div><div class="days">{minutes}</div><div class="dots">:</div><div class="sec">{seconds}</div></div>;
	/*	}*/
};

let signer;
var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const xLink = () => {
	window.open("https://x.com/mememon_io");
}

const insta = () => {
	window.open("https://www.instagram.com/mememon_io?");
}

const teleG = () => {
	window.open("https://t.me/mememon_io");
}

const email = () => {
	window.open("mailto:support@mememon.io");
}

const os = () => {
	window.open("https://opensea.io/collection/lola-s-dinodreams-a-magical-journey-with-lemon");
}

let ABI = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "receiver",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "quantity",
				"type": "uint256[]"
			}
		],
		"name": "airdrop",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_initBaseURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_initNotRevealedUri",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "ApprovalCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ApprovalToCurrentOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ApproveToCaller",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "BalanceQueryForZeroAddress",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MintToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "MintZeroQuantity",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "OperatorNotAllowed",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerIndexOutOfBounds",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "OwnerQueryForNonexistentToken",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TokenIndexOutOfBounds",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferCallerNotOwnerNorApproved",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferFromIncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToNonERC721ReceiverImplementer",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToZeroAddress",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "URIQueryForNonexistentToken",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"name": "setContractURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_max_per_wallet",
				"type": "uint256"
			}
		],
		"name": "setMax_per_wallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_MAX_SUPPLY",
				"type": "uint256"
			}
		],
		"name": "setMAX_SUPPLY",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_notRevealedURI",
				"type": "string"
			}
		],
		"name": "setNotRevealedURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_publicSaleCost",
				"type": "uint256"
			}
		],
		"name": "setPublicSaleCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint96",
				"name": "_royaltyFeesInBips",
				"type": "uint96"
			}
		],
		"name": "setRoyaltyInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_total_wl_limit",
				"type": "uint256"
			}
		],
		"name": "setTotal_wl_limit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_whitelistCost",
				"type": "uint256"
			}
		],
		"name": "setWhitelistCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_wl_per_wallet",
				"type": "uint256"
			}
		],
		"name": "setWl_per_wallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggle_public_mint_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggle_wl_mint_status",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleReveal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "wl",
				"type": "address[]"
			}
		],
		"name": "whitelistAddresses",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "whitelistMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBaseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "max_per_wallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "notRevealedUri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "OPERATOR_FILTER_REGISTRY",
		"outputs": [
			{
				"internalType": "contract IOperatorFilterRegistry",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "public_mint_status",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "publicMinted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "publicSaleCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "revealed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "royaltyInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_wl_count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_wl_limit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wl_mint_status",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wl_per_wallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "wlEligible",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "wlMinted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let address = "0xe0c491A65499d94B8E225c88258f56C4f093dd92";

const Home = () => {

	const { open } = useWeb3Modal()
	const { chain } = useNetwork()
	const { switchNetwork } = useSwitchNetwork()

	const { address: walletAddress } = useAccount({
		async onConnect() {
			handleConnect()
		}
	})

	const publicClient = createPublicClient({
		chain: mainnet,
		transport: http()
	})

	const [_totalSupply, settotalSupply] = useState(0)
	const [statusError, setstatusError] = useState("")
	const [statusLoading, setstatusLoading] = useState("")
	const [success, setsuccess] = useState("")
	const [nftMintingAmount, setnftMintingAmount] = useState(1)
	const [_publicMintMsg, set_publicMintMsg] = useState("Mint Here")
	const [_cost, set_publicSaleCost] = useState("")
	const [_wlcost, set_wlcost] = useState("")
	const [_max_per_wallet, set_max_per_wallet] = useState(10)
	const [_owner, set_owner] = useState("")
	const [myNFTWallet, setmyNFTWallet] = useState(0)
	const [_whitelist_mint_status, set_whitelist_mint_status] = useState("")
	const [_public_mint_status, set_public_mint_status] = useState("")
	const [_whitelistLimitPerWallet, set_whitelistLimitPerWallet] = useState("")
	const [_whitelistCount, set_whitelistCount] = useState("")
	const [_whitelistLimit, set_whitelistLimit] = useState("")
	const [_MAX_SUPPLY, set_MAX_SUPPLY] = useState("")
	const [_navbarOpen, set_navbarOpen] = useState(0)
	const [_connected, setConnected] = useState(false)
	const [_freeMinLimit, set_OverallFreeMintLimit] = useState(600);
	const [_stateNow, set_stateNow] = useState(Date.now());
	const [copied, setCopied] = useState(false);

	const handleCopyClick = () => {
		const inputElement = document.querySelector('.inputDiv input');
		if (inputElement) {
			inputElement.select();
			document.execCommand('copy');
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 2000); // Reset "Copied" text after 2 seconds
		}
	};

	async function closeNav() {
		set_navbarOpen(0);
		//this.setState({ _navbarOpen: 0 });
	}

	async function navbarOpen() {
		set_navbarOpen(1);
		//this.setState({ _navbarOpen: 0 });
	}
	//........................................//
	const contract = {
		address: address,
		abi: ABI
	}

	async function handleConnect() {
		if (chain.id !== 1) {
			switchNetwork(1)
		}

		var data = await getBalance();
		setmyNFTWallet(Number(data.data));
		console.log("myNFTWallet :" + data.data);
		setConnected(true);
	}

	const { refetch: getTotalSupply } = useContractRead({
		...contract,
		functionName: 'totalSupply',
	})

	const { refetch: getBalance } = useContractRead({
		...contract,
		functionName: 'balanceOf',
		args: [walletAddress ? walletAddress : '0x']
	})


	useEffect(() => {

		async function fetchData() {
			var data = await getTotalSupply();

			settotalSupply(Number(data.data))
			console.log("totalSupplyFromUseffect : " + data.data)

		}
		async function fetchData2() {

			var data1 = await getBalance();
			setmyNFTWallet(Number(data1.data));
			console.log("myNFTWallet :" + data1.data);
		}

		if (_connected) {
			fetchData();
			fetchData2();
		}

		// eslint-disable-next-line no-use-before-define
	}, [getBalance, getTotalSupply]);

	const { data, refetch, isSuccess } = useContractReads({
		contracts: [
			{ ...contract, functionName: 'totalSupply' },
			{ ...contract, functionName: 'max_per_wallet' },
			{ ...contract, functionName: 'wlCost' },
			{ ...contract, functionName: 'owner' },
			{ ...contract, functionName: 'publicSaleCost' },
			{ ...contract, functionName: 'whitelistCount' },
			{ ...contract, functionName: 'whitelistLimit' },
			{ ...contract, functionName: 'MAX_SUPPLY' },
			{ ...contract, functionName: 'whitelistLimitPerWallet' },
			{ ...contract, functionName: 'whitelist_mint_status' },
			{ ...contract, functionName: 'public_mint_status' },
			{ ...contract, functionName: 'overallFreeMintLimit' }

		]
	},)

	useMemo(() => {

		if (isSuccess === true) {
			settotalSupply(Number(data[0].result))
			set_max_per_wallet(Number(data[1].result))
			//set_wlcost(formatEther(data[2].result))
			set_wlcost(Number(data[2].result) / 10 ** 18); // Convert WEI to ETH
			set_owner(data[3].result)
			//set_publicSaleCost(formatEther(data[4].result))
			set_publicSaleCost(Number(data[4].result) / 10 ** 18); // Convert WEI to ETH
			set_whitelistCount(data[5].result)
			set_whitelistLimit(data[6].result)
			set_MAX_SUPPLY(data[7].result)
			set_whitelistLimitPerWallet(data[8].result)
			set_whitelist_mint_status(data[9].result)
			set_public_mint_status(data[10].result)
			set_OverallFreeMintLimit(data[11].result)

			console.log("_totalSupply: " + _totalSupply)
		}
	}, [isSuccess])



	const { writeAsync } = useContractWrite({
		...contract,
		functionName: 'mint',
		onError(error) {
			if (error.message.includes('balance')) {
				setstatusError(true)
				setstatusLoading(false)
			}
		}
	})
	//........................................//

	async function onPlus() {

		console.log("_whitelist_mint_status :" + _whitelist_mint_status);
		console.log("_public_mint_status :" + _public_mint_status);
		var nftIhave = nftMintingAmount + myNFTWallet;


		console.log("myNFTWallet : " + myNFTWallet);
		console.log("nftMintingAmount : " + nftMintingAmount);


		console.log("nftIhave : " + nftIhave);


		if (_whitelist_mint_status === true) {

			if (nftIhave < _whitelistLimitPerWallet) {

				setnftMintingAmount(nftMintingAmount + 1);

			}
		} else {
			console.log("1");
			if (_public_mint_status === true) {
				console.log("2");

				if (nftIhave < _max_per_wallet) {
					//if (nftIhave < 1) {
					console.log("3");

					setnftMintingAmount(nftMintingAmount + 1);
					console.log("4");


					//}
				}
			}

		}
	}

	async function onMinus() {
		if (nftMintingAmount != 1) {
			setnftMintingAmount(nftMintingAmount - 1)
		}
	}


	async function onMint() {
		try {
			var mintCost;
			var fullTotalSupply = 0;
			fullTotalSupply = (nftMintingAmount) + (_totalSupply);
			console.log("fullTotalSupply : " + fullTotalSupply);


			if (_owner === walletAddress) {

				mintCost = '0'

			} else {

				if (fullTotalSupply <= 0) {
					mintCost = '0'
				} else

					if (_whitelist_mint_status === true) {
						//mintCost = parseFloat(_cost)
						//mintCost = parseFloat(_wlcost)
						mintCost = _wlcost;

					} else {
						if (_public_mint_status === true) {
							//mintCost =  parseFloat(_cost)
							mintCost = _cost;
						}
					}
			}

			mintCost = (mintCost * nftMintingAmount).toString();
			console.log("mintCost : " + mintCost);


			setstatusLoading(true)
			setstatusError(false)

			var res = await writeAsync({
				args: [nftMintingAmount],
				value: parseEther(mintCost)// mintCost
			})
			var result = await publicClient.waitForTransactionReceipt(res)
			if (result.status === 'success') {
				setstatusError(false)
				setsuccess(true)
				setstatusLoading(false)
				await new Promise(resolve => setTimeout(resolve, 5000));
				window.location.reload(true);
			}
			else {
				setsuccess(false)
				setstatusError(true)
				setstatusLoading(false)

			}
		}
		catch (e) {
			console.log(e)
			setstatusError(true)
			setstatusLoading(false)

		}
	}


	return (
		<div class="allWrap">
			<div class="light">
				{_navbarOpen < 1 ?
					(<div class="miniBarMain">
						<div class="logoDiv"><img onClick={() => window.location.href = 'Mint'} src={logoPic} /></div>

						<div class="navbarMain"><img class="navbar" onClick={navbarOpen} src={navbar} /></div>
					</div>) :
					(<div class="miniBarMain">
						<div class="logoDiv"><img onClick={() => window.location.href = 'Mint'} src={logoPic} /></div>

						<div class="navbarMain"><img class="navbar" onClick={closeNav} src={wrong} /></div>
					</div>)}

				<div class="headers">

					<div class="h1">

						<div class="logoDiv"><img src={logoPic} /></div>

						<div class="right">

							<div class="connect">
								<div ><Link activeClass="" id="fontSize" to="about" spy={true} smooth={true} duration={550}>ABOUT</Link></div>
								<div ><Link activeClass="" id="fontSize" to="token" spy={true} smooth={true} duration={550}>$MMONOMIC</Link></div>
								<div ><Link activeClass="" id="fontSize" to="team" spy={true} smooth={true} duration={550}>TEAM</Link></div>

							</div>

							<button class="mintBtn" onClick={() => window.location.href = 'Mint'}>CONNECT</button>

						</div>

					</div>

				</div>

				<div class="cont">

					{_navbarOpen < 1 ?
						(<div class="miniBarMain">
							<div class="logoDiv"><img onClick={() => window.location.href = 'Mint'} src={logoPic} /></div>

							<div class="navbarMain"><img class="navbar" onClick={navbarOpen} src={navbar} /></div>
						</div>) :
						(<div class="miniBarMain">
							<div class="logoDiv"><img onClick={() => window.location.href = 'Mint'} src={logoPic} /></div>

							<div class="navbarMain"><img class="navbar" onClick={closeNav} src={wrong} /></div>
						</div>)}

					{_navbarOpen > 0 ?
						(<div class="littleNav">
							<div ><Link activeClass="" id="fontSize" to="about" spy={true} smooth={true} duration={550}>ABOUT</Link></div>
							<div ><Link activeClass="" id="fontSize" to="token" spy={true} smooth={true} duration={550}>$MMONOMIC</Link></div>
							<div ><Link activeClass="" id="fontSize" to="team" spy={true} smooth={true} duration={550}>TEAM</Link></div>

							<div><button class="mintBtn" onClick={() => window.location.href = 'Mint'}>CONNECT</button></div>

						</div>) : null}
					<div class="vidCont">
						<video class="videoBg" src={video} autobuffer autoPlay loop muted playsInline></video>
					</div>
					<div class="introduction">
						<div className='introduction-2'>
							<div className='title'>Welcome to the wild and whimsical world of</div>
							<div className='mememon'>MeMeMon</div>
							<div className='fontSize2'>Where finance meets fun in the innovative landscape of Solana! </div>

							<div className='social'>
								<div className='buy'>Buy MeMeMon</div>
								<div className='soocialDiv'><img onClick={teleG} src={tg} /></div>
								<div className='soocialDiv'><img onClick={xLink} src={x} /></div>
								<div className='soocialDiv'><img onClick={insta} src={instagram} /></div>
								<div className='soocialDiv'><img onClick={email} src={mail} /></div>
							</div>

							<div
								onClick={() => {
									// Copy address to clipboard and handle notification
									navigator.clipboard.writeText('4nmXysF2ptWvBbgYyZrLUB2eCZqcqgNJ5pkc8QApUMhJ')
										.then(() => {
											const notification = document.getElementById('copy-notification');
											notification.classList.add('show');
											setTimeout(() => notification.classList.remove('show'), 2000); // Hide after 2 seconds
										})
										.catch(error => console.error('Failed to copy address:', error));

									// Optional: Handle address selection
								}}
							>
								<div className="linkMain">
									<input class="inputDiv" readOnly placeholder='4nmXysF2ptWvBbgYyZrLUB2eCZqcqgNJ5pkc8QApUMhJ' />

									<img className="copy" src={copy} alt="Copy" />

								</div>

							</div>


						</div>

						<img className='introPic' src='https://gif2-c7y.pages.dev/gif/Transparent-GIF-coin.gif' />

					</div>

				</div>

				<div><img className='imgStone' src={border} /></div>

				<Intro />

				<Element name="about">
					<About />
				</Element>

				<Element name="token">
					<Tokenomics />
				</Element>

				<Element name="team">
					<Team />
				</Element>

				<Footer />

			</div >
		</div >
	)

}
export default Home;
