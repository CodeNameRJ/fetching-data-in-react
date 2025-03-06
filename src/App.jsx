import { useEffect, useState } from 'react'
import './App.css'
import WeatherSearch from './components/WeatherSearch'
// import {show} from './services/weatherService'

//to import everything
import * as weatherService from './services/weatherService'
import WeatherDetails from './components/WeatherDetails'

const App = () => {

  const [weather, setWeather] = useState()


  const fetchData = async (city) => {
    const data = await weatherService.show(city)
    console.log(city)
    console.log(data)
    const weatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,

    }
    // setWeather(data)
    setWeather(weatherState)
    console.log(weatherState)

  }

  useEffect(() => { // mthod accepts two args
    fetchData('Boston') // first time page loads it fetch boston

  }, []) // empty array to avoid infinite loop 

  return (

    <main>
      <h1>Weather API </h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />


    </main>


  );
}

export default App
