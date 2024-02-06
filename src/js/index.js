//import react into the bundle
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
function App() {
    const [digito1, setDigito1] = useState(0);
    const [digito2, setDigito2] = useState(0);
    const [digito3, setDigito3] = useState(0);
    const [digito4, setDigito4] = useState(0);
    const [digito5, setDigito5] = useState(0);
    const [digito6, setDigito6] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (digito6 === 9) {
          setDigito6(0);
          if (digito5 === 9) {
            setDigito5(0);
            if (digito4 === 9) {
              setDigito4(0);
              if (digito3 === 9) {
                setDigito3(0);
                if (digito2 === 9) {
                  setDigito2(0);
                  if (digito1 === 9) {
                    setDigito1(0);
                  } else {
                    setDigito1(prevDigito1 => prevDigito1 + 1);
                  }
                } else {
                  setDigito2(prevDigito2 => prevDigito2 + 1);
                }
              } else {
                setDigito3(prevDigito3 => prevDigito3 + 1);
              }
            } else {
              setDigito4(prevDigito4 => prevDigito4 + 1);
            }
          } else {
            setDigito5(prevDigito5 => prevDigito5 + 1);
          }
        } else {
          setDigito6(prevDigito6 => prevDigito6 + 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [digito1, digito2, digito3, digito4, digito5, digito6]);
  
    return (
        <div className="container">
          <h1>
            <span className="digito">{digito1}</span>
            <span className="digito">{digito2}</span>
            <span className="digito">{digito3}</span>
            <span className="digito">{digito4}</span>
            <span className="digito">{digito5}</span>
            <span className="digito">{digito6}</span>
          </h1>
        </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));

  export default App