import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Form, FormGroup } from "reactstrap";
import "./search-bar.css";

const SearchBar = ({ tours }) => {
  const [location, setLocation] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    if (value && Array.isArray(tours)) {
      const filteredSuggestions = tours
        .filter(
          (tour) =>
            tour.city &&
            tour.city.toLowerCase().startsWith(value.toLowerCase())
        )
        .map((tour) => tour.city);

      setSuggestions([...new Set(filteredSuggestions)]);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (place) => {
    setLocation(place);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredTours = tours.filter((tour) => {
      const locationMatch =
        tour.city &&
        tour.city.toLowerCase() === location.toLowerCase();

      const groupSizeMatch = maxGroupSize
        ? tour.maxGroupSize >= parseInt(maxGroupSize)
        : true;

      return locationMatch && groupSizeMatch;
    });

    navigate("/tours/search", { state: filteredTours });
    console.log(filteredTours, "filterTours")
  };

  // if (!Array.isArray(tours)) {
  //   return <p>Loading tours...</p>;
  // }

  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4" onSubmit={handleSubmit}>
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div className="position-relative">
              <h6>Places</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={handleLocationChange}
              />
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((place, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(place)}>
                      {place}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FormGroup>


          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
