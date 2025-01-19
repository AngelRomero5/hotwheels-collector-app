import './App.css';
import React from 'react';
import Homescreen from './Home/Homescreen';
import Card from './Home/Components/CarCard';
import NavBar from './Home/NavBar';
import NewCarForm from './Home/Components/NewCarForm';

function App() {
  return (
    <>
      <NavBar />
      {/* <Homescreen /> */}
      <NewCarForm/>
      {/* <Card /> */}
    </>
  );
}

export default App;
