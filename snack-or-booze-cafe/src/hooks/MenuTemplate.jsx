import React from "react";
import {
    Card,
    CardTitle,
    CardText,
  } from "reactstrap";
import {Link} from 'react-router-dom';

const MenuTemplate = ({items, basePath, title}) => {
    return (
        <>
          <Card>
            <div className="card-body">
                <CardTitle className="font-weight-bold text-center">
                    {title} Menu
                </CardTitle>
                
                <CardText>
                    Below is our {title} Menu. 
                        <br/>
                    Click on any item to see details!
                </CardText>
                <ul className="item-list">
                    {Array.isArray(items) && items.map(item => (
                        <Link to={`/${basePath}/${item.name}`} key={item.name}>
                            <li>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
          </Card>
        </>
    );
}

export default MenuTemplate;