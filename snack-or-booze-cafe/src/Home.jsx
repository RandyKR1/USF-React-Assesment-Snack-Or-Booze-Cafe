import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./Home.css"

function Home({snacks, drinks}) {


  return (
    <>
      <div className="card-container home-container">
        <div className="card home-card">
          <div className="card-title">
            <h2>
              Welcome to the Lofi Dive Cafe!
            </h2>
          </div>

          <div className="card-text">
              <p>Pick from {snacks.length} snacks and {drinks.length} drinks using the nav bar!</p>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Home;
