import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";


const ItemTemplate = ({items}) => {
  const { name } = useParams();

  const item = items.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (!item) return <Navigate to="/" />;

  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-title">
            {item.name}
          </div>

          <div className="card-text">
            <p>
              {item.description}
            </p>
            <p>
              <b>price:</b> 
                  <br/>
              ${item.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemTemplate;
