import("./Home.scss");

export default function () {
  return (
    <div className="container home-page">
      <div className="home-title-box">
        <h1 className="title">Rent your car</h1>
        <h1 className="title-prefix">with Crypto!</h1>
      </div>
      <div className="home-description-box">
        <p className="title-description">
          Connect your wallet and rent a car. Ride as far as you like. When you
          return it, you can easily pay with cryptocurrency
        </p>
      </div>
      <button className="button-class choose-car">Our fleet</button>
    </div>
  );
}
