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
          <div className="card-container">
            <div className="card">
                <div className="card-title">
                    {title} Menu
                </div>
                
                <div className="card-text">
                    Below is our {title} Menu. 
                        <br/>
                    Click on any item to see details!
                </div>
                <ul className="item-list">
                    {Array.isArray(items) && items.map(item => (
                        <Link to={`/${basePath}/${item.name}`} key={item.name}>
                            <li>{item.name} ${item.price}</li>
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
          </div>
        </>
    );
}

export default MenuTemplate;