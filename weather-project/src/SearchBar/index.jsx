import PropTypes from "prop-types";

const Search = ({ searchLocation, setLocation, location }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchLocation(event);
    }
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Chercher une ville"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </header>
  );
};

Search.propTypes = {
  searchLocation: PropTypes.func,
  setLocation: PropTypes.func,
  location: PropTypes.string,
};

export default Search;
