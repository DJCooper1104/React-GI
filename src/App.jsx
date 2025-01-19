import React, { Component } from "react";
import BasicInfo from "./BasicInfo.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "DJ Cooper",
          number: "123-456-7890",
          dob: "11/04/1997",
        },
        {
          name: "Russell Westbrook",
          number: "987-654-3210",
          dob: "07/20/2024",
        },
        {
          name: "Lebron James",
          number: "555-555-5555",
          dob: "03/29/2018",
        },
      ],
    };
  }

  render() {
    return (
      <div className="app-container">
        <h1>Contact Information</h1>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
