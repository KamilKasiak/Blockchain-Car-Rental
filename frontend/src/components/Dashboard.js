import "./Dashboard.scss";
import DashboardLogin from "./DashboardLogin";
import DashboardFleet from "./DashboardFleet";
import DashboardForm from "./DashboardForm";
import RentCar from "./RentCar";
import { useConnectedHook } from "../Hooks/useConnectedHook";
import { useRegisterededHook } from "../Hooks/useRegisteredHook";

export default function Dashboard() {
  const { isConnected } = useConnectedHook();
  const { isRegistered } = useRegisterededHook();

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
