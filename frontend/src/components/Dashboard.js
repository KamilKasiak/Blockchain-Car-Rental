import "./Dashboard.scss";
import DashboardLogin from "./DashboardLogin";
import DashboardFleet from "./DashboardFleet";
import DashboardForm from "./DashboardForm";
import RentCar from "./RentCar";

export default function Dashboard() {
  const isConnected = true;
  const isRegistered = false;

  return (
    <div className='container dashboard-page'>
      <div className='dashboard-top'>
        {!isConnected || !isRegistered ? (
          <div className='dashboard-form-row'>
            <DashboardLogin />
            <DashboardForm />
          </div>
        ) : (
          <RentCar />
        )}
      </div>
      <div className='dashboard-fleet-row'>
        <DashboardFleet />
      </div>
    </div>
  );
}
