import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";


const ItemTemplate = ({items}) => {
  const { name } = useParams();

  const item = items.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (!item) return <Navigate to="/" />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>

          <CardText className="font-italic">
            <p>
              {item.description}
            </p>
            <p>
              <b>price:</b> 
                  <br/>
              ${item.price}
            </p>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemTemplate;
