import earthImg from "../../../assets/img/earth.png";

function Hero() {
  return (
    <div className="hero-section">
      <div className="content">
        <h1>
          Explore <br />
          <span>THe magical Space </span>
        </h1>
        <p>
          Explore the secrets of space. NanoX helps you to check <br />
          space galactics.
        </p>
        <div className="center-btn">
          <button className="btn">
            <span> &gt; </span>Discover how it works
          </button>
        </div>
        <div className="earth-img">
          <img src={earthImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
