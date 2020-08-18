import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        {name.firstName} {name.lastName}
      </h1>
      <input
        type="text"
        name="firstName"
        value={name.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={name.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
    </div>
  );
};

export default HookCounterThree;
