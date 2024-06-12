import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import DrinkMenu from "./DrinkMenu";
import DrinkItem from "./DrinkItem";
import NewDrinkForm from "./NewDrinkForm";
import NewSnackForm from "./NewSnackForm";

import "./App.css";



const drinksDefaults = [
  {
    name: 'drinkOne',
    description: 'this is the drinks description',
    price: '5'
  },
  {
    name: 'drinkTwo',
    description: 'this is the drinks description',
    price: '6'
  },
  {
    name: 'drinkThree',
    description: 'this is the drinks description',
    price: '3'
  },
  {
    name: 'drinkFour',
    description: 'this is the drinks description',
    price: '9'
  }
]

const snacksDefaults = [
  {
    name: 'snackOne',
    description: 'this is the snack description',
    price: '5'
  },
  {
    name: 'snackTwo',
    description: 'this is the snack description',
    price: '6'
  }
]

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState(snacksDefaults);
  const [drinks, setDrinks] = useState(drinksDefaults);

  const createDrinks = newDrink => (
    setDrinks(drinks => [...drinks, newDrink])
  )
  const createSnacks = newSnack => (
    setSnacks(snacks => [...snacks, newSnack])
  )

  useEffect(() => {
    async function fetchData() {
      try {
        const snacksResponse = await SnackOrBoozeApi.getSnacks();
        const drinksResponse = await SnackOrBoozeApi.getDrinks();
  
        if (Array.isArray(snacksResponse) && snacksResponse.length > 0) {
          setSnacks(snacksResponse);
        }
  
        if (Array.isArray(drinksResponse) && drinksResponse.length > 0) {
          setDrinks(drinksResponse);
        }
  
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }
  
    fetchData();
  }, []);
  

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} />
            <Route path="/snacks" element={<FoodMenu items={snacks} title="Snacks" basePath="snacks" />} />
            <Route path="/snacks/:name" element={ <FoodItem items={snacks} />} />
            <Route path="/snacks/new" element={ <NewSnackForm items={snacks} createItem={createSnacks} basePath="Snacks" />} />
            <Route path="/drinks" element={ <DrinkMenu items={drinks} title="Drinks" basePath="drinks" />} />
            <Route path="/drinks/:name" element={ <DrinkItem items={drinks} />} />
            <Route path="/drinks/new" element={ <NewDrinkForm items={drinks} createItem={createDrinks} basePath="Drinks" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
