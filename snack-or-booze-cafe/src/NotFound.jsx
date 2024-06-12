import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
} from "reactstrap";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <div className="card-body">
          <CardTitle className="font-weight-bold text-center">
            404
          </CardTitle>
          <CardText>
            <p 
                style={{
                fontSize: '2em'
            }}>
                Page Not Found :/
            </p>
                <br/>
            <button 
                style={{
                    margin:'10px'
                }}
                onClick={() => navigate("/")}>
                    Return Home
            </button>
          </CardText>
        </div>
      </Card>
    </>
  );
}

export default NotFound;
