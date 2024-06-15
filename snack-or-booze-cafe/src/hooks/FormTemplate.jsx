import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import {
    Card,
    CardTitle,
    CardBody,
  } from "reactstrap";


const FormTemplate = ({ createItem, basePath, items }) => {
  const INITIAL_STATE = {
    name: '',
    description: '',
    price: ''
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const inputData = (e) => {
    e.preventDefault();
    createItem({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE)
    navigate(`/${basePath}`);
  }

  return (
    <div className="card-container">

    <div className="card">

        <div className="card-title">
            Add your own {basePath} below!
        </div>

      <form onSubmit={inputData}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            id='name'
            required='True'
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={formData.description}
            id='description'
            required='True'
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="price"
            value={formData.price}
            id='price'
            required='True'
          />
        </div>
        <button>Add to {basePath} Menu!</button>
      </form>

      </div>

    </div>
  )
}

export default FormTemplate