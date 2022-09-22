import "./Navbar.scss";
import metamaskLogo from "../assets/metamask.png";
import { Link } from "react-router-dom";
import ethereum from "../assets/ethereum.png";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useConnectedHook } from "../Hooks/useConnectedHook.js";
import contractAbi from "../assets/CarChain.json";
require("dotenv").config();

export default function Navbar() {
  const [chainId, setChainId] = useState("");
  // const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const { isConnected, setIsConnected } = useConnectedHook();

  // const slicedAddress = address.slice(0, 5) + "..." + address.slice(38, 44);
  const slicedAddress = " 0xtest";
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();

  const contractAddress = "0x930021ba0D8cfF4dd03d3064dF71889674c47077";

  // useEffect(() => {
  //   connectWallet().catch(console.error);
  //   createContract().catch(console.error);
  //   getBalance().catch(console.error);
  //   // console.log("Is connected: " + isConnected);
  // });

  // const connectWallet = async () => {
  //   //client side code
  //   if (!window.ethereum) {
  //     console.log("please install MetaMask");
  //     return;
  //   }
  //   // MetaMask requires requesting permission to connect users accounts
  //   let accounts = await provider.send("eth_requestAccounts", []);
  //   let account = accounts[0];
  //   const address = await signer.getAddress();
  //   const chainId = await signer.getChainId();
  //   setAddress(address);
  //   setChainId(chainId);
  //   if (address) {
  //     setIsConnected(true);
  //   }
  // console.log("address: " + address + " network id: " + chainId);
  //};

  // const createContract = async () => {
  //   const contract = await new ethers.Contract(
  //     contractAddress,
  //     contractAbi.abi,
  //     signer
  //   );
  //   console.log(contract);
  // };

  // const getBalance = async () => {
  //   const balance = await provider.getBalance(contractAddress);
  //   const balanceFormated = ethers.utils.formatEther(balance);
  //   setBalance(balanceFormated);
  // };

  const onClickConnect = () => {
    // connectWallet();
  };
  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <div className='left'>
          <Link to='/' className='left-logo'>
            <img className='logo-img' src={ethereum} alt='ethereumLogo' />
          </Link>
        </div>
        <div className='middle'></div>
        <div className='right' onClick={onClickConnect}>
          <img src={metamaskLogo} alt='metamaskLog'></img>
          {!isConnected ? <p>connect wallet</p> : <p>{slicedAddress}</p>}
        </div>
      </div>
    </div>
  );
}
