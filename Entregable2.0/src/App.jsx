import './App.css'
import'./Loading.css'
import {useEffect, useState} from 'react'
import WeatherCard from './assets/WeatherCard'
import axios from 'axios'
import Loading from './Loading'

function App() {

const [coords, setCoords] = useState()
const [weather, setWeather] = useState()
const [temperature, setTemperature] = useState()

  const success = (pos) => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj)
  }

    useEffect(()=>{
      navigator.geolocation.getCurrentPosition(success)
    }, [])

    useEffect(() => {
    if(coords){
      const ApiKey = `5d24178d2c7f4bb8e987d648d129ae43`
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`
      axios.get(URL)
      .then(res =>{ 
        const celsius = (res.data.main.temp - 273.15).toFixed(0)
        const farenheit = celsius * 9/5 + 32
        setTemperature({celsius, farenheit})
        setWeather(res.data)})

      .catch(err => console.log(err))
    }
    }, [coords])

  return (
    
    <div className="App">
      {
        weather?
      <WeatherCard weather={weather} temperature ={temperature} />
      :
      <Loading/>
      }
      </div>
  )
}

export default App
