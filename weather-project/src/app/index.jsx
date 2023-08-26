import axios from "axios";
import { useState } from "react";
import Search from "../SearchBar";
import Content from "../Content";

const App = () => {
  const [datas, setDatas] = useState({});
  const [location, setLocation] = useState("");

  const [animationTrigger, setAnimationTrigger] = useState(false);

  const handleAnimation = () => {
    setAnimationTrigger(true);
    setTimeout(() => {
      setAnimationTrigger(false);
    }, 600); // Durée de l'animation en millisecondes
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=`;
      axios.get(url).then((response) => {
        handleAnimation();
        setDatas(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div className="app">
      <Search
        searchLocation={searchLocation}
        setLocation={setLocation}
        location={location}
      />
      <Content data={datas} animationTrigger={animationTrigger} setAnimationTrigger={setAnimationTrigger} />
    </div>
  );
};

export default App;