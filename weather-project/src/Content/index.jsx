import PropTypes from "prop-types";

const Content = ({ data, animationTrigger, setAnimationTrigger }) => {
  
  return (
    <div className="container">
      <main>
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="country">
            {data.sys ? <p>{data.sys.country} </p> : null}
          </div>
          <div className="temp">
            {data.main ? <p>{data.main.temp.toFixed()}°</p> : null}
          </div>
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        {data.name !== undefined && (
          <div className={`middle ${animationTrigger ? "slideDown" : ""}`}
          onAnimationEnd={() => setAnimationTrigger(false)}
          >
            <div className="feels">
              {data.main ? (
                <p>Ressenti {data.main.feels_like.toFixed()}°</p>
              ) : null}
            </div>
            <div className="humidity">
              {data.main ? <p>Humidité {data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              {data.wind ? (
                <p>Vitesse du vent {data.wind.speed.toFixed()}kmh</p>
              ) : null}
            </div>
          </div>
        )}
      </main>
      <footer>
        <p>Created with OpenWeatherApp API</p>
      </footer>
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
      humidity: PropTypes.number,
    }),
    sys: PropTypes.shape({
        country: PropTypes.string,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string,
      })
    ),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
  }),
  animationTrigger: PropTypes.bool,
  setAnimationTrigger: PropTypes.func
};

export default Content;
