import './App.css';
import React from 'react';

// Pages and components
// import Homescreen from './Home/Homescreen';
import Login from './Home/Login/index';
import Card from './Home/Components/CarCard';
import NavBar from './Home/NavBar';
import NewCarForm from './Home/Components/NewCarForm';

function App() {
  return (
    <>
    <Login /> 
      {/* <NavBar /> */}
      {/* <Homescreen /> */}
      {/* <NewCarForm/> */}
      {/* <Card /> */}
    </>
  );
}

export default App;
