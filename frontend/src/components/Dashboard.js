import "./Dashboard.scss";
import DashboardLogin from "./DashboardLogin";
import DashboardFleet from "./DashboardFleet";

export default function Dashboard() {
  return (
    <div className="container dashboard-page">
      <div className="dashboard-login">
        <DashboardLogin />
      </div>
      <div className="dashboard-form"></div>
      <div className="dashboard-fleet-row">
        <DashboardFleet />
      </div>
    </div>
  );
}
