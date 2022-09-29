import "./RentCar.scss";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSelector } from "react-redux";

export default function RentCar({ contract }) {
  const [ethDepositAmount, setEthDepositAmount] = useState("");
  const [repayAmount, setRepayAmount] = useState("");
  const [balance, setBalance] = useState("");

  const currentAddress = useSelector((state) => state.currentAddress.address);

  useEffect(() => {
    getBalanceOfRenter().catch(console.error);
  });

  const getBalanceOfRenter = async () => {
    const balance = await contract.balanceOfRenter(currentAddress);
    const balanceFormated = ethers.utils.formatEther(balance);
    setBalance(balanceFormated);
  };

  const handleDepositEth = async (e) => {
    e.preventDefault();
    console.log(ethDepositAmount);
  };

  return (
    <div className='container rent-car-page'>
      <div className='welcome-text'>
        <h1> Hey Kamil! Here are your pulpit:</h1>
      </div>
      <div className='pulpit-stats'>
        <div className='pulpit-box'>
          <p>Balance</p>
          <pre>{balance}</pre>
          <AccountBalanceWalletIcon className='pulpit-icon' />
        </div>
        <div className='pulpit-box'>
          <p>Eth Due</p>
          <pre>0.0</pre>
          <AttachMoneyIcon className='pulpit-icon' />
        </div>
        <div className='pulpit-box'>
          <p>Rent time</p>
          <pre>0 min</pre>
          <AccessTimeIcon className='pulpit-icon' />
        </div>
      </div>
      <div className='pulpit-payments'>
        <div className='deposit-eth-box'>
          <form
            onSubmit={(e) => {
              handleDepositEth();
            }}
          >
            <h2>Credit Your Account</h2>
            <input
              className='payment-input'
              type='number'
              placeholder='eth amount'
              required
              onChange={(e) => {
                setEthDepositAmount(e.target.value);
              }}
              value={ethDepositAmount}
            ></input>
            <button className='button-class form-deposit-button' type='submit'>
              Deposit
            </button>
          </form>
        </div>
        <div className='deposit-eth-box'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(repayAmount);
            }}
          >
            <h2>Repay Your Due</h2>
            <input
              className='payment-input'
              type='number'
              placeholder='eth amount'
              required
              onChange={(e) => {
                setRepayAmount(e.target.value);
              }}
              value={repayAmount}
            ></input>
            <button className='button-class form-deposit-button' type='submit'>
              Deposit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
