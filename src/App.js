import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import GetInfo from "./components/getCovidInfo";
import MrTVac from "./MrTVac.png";

const App = () => {

  const { data, loading, error } = GetInfo("https://api.covid19api.com/summary")

  if (loading) return <h1>LOADING...</h1>

  if (error) console.log(error);

  return (
    <div className="App">
      <h1 id="title">COVID-19 TRACKER</h1>
      <h1>New Confirmed: {data?.Global.NewConfirmed}</h1>
      <h1>Total Confirmed: {data?.Global.TotalConfirmed}</h1>
      <h1>New Deaths: {data?.Global.NewDeaths}</h1>
      <h1>Total Deaths: {data?.Global.TotalDeaths}</h1>
      <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/" target="_blank">
      <img className="image" src={MrTVac} alt="Mr T"/>
      </a>
    </div>
  );





// const covidInfo = async () => {
//   try {
//     const response = await fetch(`https://api.covid19api.com/summary`);
//   } catch (error) {
//     console.log(error);
//   }
// }





};

export default App;