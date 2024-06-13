import React from "react";
import {
    Card,
    CardTitle,
    CardText,
  } from "reactstrap";
import {Link, useNavigate} from 'react-router-dom';



const MenuTemplate = ({items, basePath, title}) => {
    const navigate = useNavigate();
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
                <button 
                style={{
                    margin:'10px'
                }}
                onClick={() => navigate("/")}>
                    Return Home
            </button>
            </div>
          </Card>
        </>
    );
}

export default MenuTemplate;