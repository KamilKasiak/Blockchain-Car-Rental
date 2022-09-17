import "./DashboardFleet.scss";
import vwPolo from "../assets/vwPolo.png";
import tucson from "../assets/tucson.png";
import corolla from "../assets/corolla.png";

export default function DashboardFleet() {
  return (
    <div className="container dashboard-fleet">
      <div className="fleet-container">
        <div className="car-container car1">
          <img className="car-img" src={vwPolo} alt="vw Polo" />
          <div className="car-description">
            <p>description</p>
          </div>
        </div>
        <div className="car-container car2">
          <img className="car-img" src={tucson} alt="hyundai tucson" />

          <div className="car-description">
            <p>description</p>
          </div>
        </div>
        <div className="car-container car3">
          <img className="car-img smaller" src={corolla} alt="toyota corolla" />

          <div className="car-description">
            <p>description</p>
          </div>
        </div>
      </div>
    </div>
  );
}
