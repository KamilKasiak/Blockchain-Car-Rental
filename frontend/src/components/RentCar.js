import "./RentCar.scss";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function RentCar() {
  return (
    <div className="container rent-car-page">
      <div className="welcome-text">
        <h1> Hey Kamil! Here are your pulpit:</h1>
      </div>
      <div className="pulpit-stats">
        <div className="pulpit-box">
          <p>Balance</p>
          <pre>0.0</pre>
          <AccountBalanceWalletIcon className="pulpit-icon" />
        </div>
        <div className="pulpit-box">
          <p>Eth Due</p>
          <pre>0.0</pre>
          <AttachMoneyIcon className="pulpit-icon" />
        </div>
        <div className="pulpit-box">
          <p>Rent time</p>
          <pre>0 min</pre>
          <AccessTimeIcon className="pulpit-icon" />
        </div>
      </div>
      <div className="pulpit-payments"></div>
    </div>
  );
}
