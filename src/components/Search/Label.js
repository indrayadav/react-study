import React from "react";

const Label = () => {
  const location = "Kathmandu";

  return (
    <label htmlFor="location">
      Location
      <input
        id="location"
        value={location}
        placeholder="Location"
      />
    </label>
  );
};

export default Label;
