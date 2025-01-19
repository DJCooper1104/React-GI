import React from "react";

const BasicInfo = ({ person }) => {
  return (
    <div className="person-card">
      <p>
        <strong>Name:</strong> {person.name}
      </p>
      <p>
        <strong>Number:</strong> {person.number}
      </p>
      <p>
        <strong>Date of Birth:</strong> {person.dob}
      </p>
    </div>
  );
};

export default BasicInfo;
