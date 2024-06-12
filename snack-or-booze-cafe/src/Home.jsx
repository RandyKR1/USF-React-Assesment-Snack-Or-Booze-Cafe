import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Home.css"

function Home({snacks, drinks}) {


  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center home">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <div className="snack-booze-count-container">

            <span className="text">
              <p>Pick from {snacks.length} snacks and {drinks.length} drinks using the nav bar!</p>
            </span>
            

          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
