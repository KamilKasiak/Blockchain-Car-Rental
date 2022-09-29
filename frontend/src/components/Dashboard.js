import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect, disconnect } from "../features/connect/checkConnectionSlice";
import { updateAddress } from "../features/currentAddress/currentAddresSlice";
import "./Dashboard.scss";
import DashboardLogin from "./DashboardLogin";
import DashboardFleet from "./DashboardFleet";
import DashboardForm from "./DashboardForm";
import RentCar from "./RentCar";
import { ethers } from "ethers";
import contractAbi from "../assets/CarChain.json";
require("dotenv").config();

export default function Dashboard() {
  const [address, setAddress] = useState("");
  const [chainId, setChainId] = useState("");
  const connected = useSelector((state) => state.connector.connected);
  const registered = useSelector((state) => state.registrator.registered);
  const currentAddress = useSelector((state) => state.currentAddress.address);
  const dispatch = useDispatch();
  const contractAddress = "0x930021ba0D8cfF4dd03d3064dF71889674c47077";

  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();

  useEffect(() => {
    connectWallet().catch(console.error);
    // getBalance().catch(console.error);
    console.log("Is connected: " + connected);
  });

  const connectWallet = async () => {
    //client side code
    if (!window.ethereum) {
      console.log("please install MetaMask");
      return;
    }
    // MetaMask requires requesting permission to connect users accounts
    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];
    const address = await signer.getAddress();
    const chainId = await signer.getChainId();
    if (address.length > 0) {
      setAddress(address);
    }
    setChainId(chainId);
    console.log("address: " + currentAddress + " network id: " + chainId);
  };

  dispatch(connect());
  dispatch(updateAddress(address));

  const contract = new ethers.Contract(
    contractAddress,
    contractAbi.abi,
    signer
  );

  return (
    <div className='container dashboard-page'>
      <div className='dashboard-top'>
        {!connected || !registered ? (
          <div className='dashboard-form-row'>
            <DashboardLogin />
            <DashboardForm contract={contract} provider={provider} />
          </div>
        ) : (
          <RentCar contract={contract} />
        )}
      </div>
      <div className='dashboard-fleet-row'>
        <DashboardFleet />
      </div>
    </div>
  );
}
