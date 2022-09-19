import "./DashboardFleet.scss";
import vwPolo from "../assets/vwPolo.png";
import tucson from "../assets/tucson.png";
import corolla from "../assets/corolla.png";

export default function DashboardFleet() {
  return (
    <div className='container dashboard-fleet'>
      <div className='fleet-container'>
        <div className='car-container car1'>
          <img className='car-img' src={vwPolo} alt='vw Polo' />
          <div className='car-description'>
            <ul>
              <li>5 seats</li>
              <li>manual gear</li>
              <li> 1 big bag</li>
            </ul>
          </div>
          <div className='button-box'>
            <button className='button-class rent-car-button' type='submit'>
              Pick Up
            </button>
            <button className='button-class rent-car-button' type='submit'>
              Drop off
            </button>
          </div>
        </div>
        <div className='car-container car2'>
          <img className='car-img' src={tucson} alt='hyundai tucson' />
          <div className='car-description'>
            <ul>
              <li>5 seats</li>
              <li>manual gear</li>
              <li>2 big bag</li>
            </ul>
          </div>
          <div className='button-box'>
            <button className='button-class form-deposit-button' type='submit'>
              Pick Up
            </button>
            <button className='button-class form-deposit-button' type='submit'>
              Drop off
            </button>
          </div>
        </div>
        <div className='car-container car3'>
          <img className='car-img smaller' src={corolla} alt='toyota corolla' />

          <div className='car-description'>
            <ul>
              <li>5 seats</li>
              <li>automate gear</li>
              <li>1 big bag</li>
            </ul>
          </div>
          <div className='button-box'>
            <button className='button-class form-deposit-button' type='submit'>
              Pick Up
            </button>
            <button className='button-class form-deposit-button' type='submit'>
              Drop off
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
