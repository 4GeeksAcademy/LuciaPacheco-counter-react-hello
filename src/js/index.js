//import react into the bundle
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digits: [0, 0, 0, 0, 0, 0]
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        const newDigits = [...prevState.digits];
        for (let i = newDigits.length - 1; i >= 0; i--) {
          if (newDigits[i] === 9) {
            newDigits[i] = 0;
          } else {
            newDigits[i]++;
            break;
          }
        }
        return { digits: newDigits };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { digits } = this.state;
    return (
      <div className="container">
        <h1>
          {digits.map((digit, index) => (
            <span key={index} className="digito">{digit}</span>
          ))}
        </h1>
      </div>
    );
  }
}

  ReactDOM.render(<App />, document.getElementById('app'));

  export default App