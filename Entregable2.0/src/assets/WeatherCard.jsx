import React from 'react'
import { useState } from 'react'

const WeatherCard= ({weather, temperature}) => {

const [isCelsius, setisCelsius] = useState(true)

const changeTemperature = () => setisCelsius(!isCelsius)


    return (
        <article className='card'>
            <h1 className='card__title'>Weather App</h1>
            <h2 className='card__weather'>{weather?.name}, {weather?.sys.country}</h2>
        <section className='card__icon-container'>
            <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}alt=""/>
            <h3 className='card__temp'>{weather?.main.temp} K</h3>
        </section>

        <section className='card__info' >

            <h3 className='card__description' >"{weather?.weather[0].description}"</h3>

            <ul className='card__list'>
                <li className='card__item'><span className='card__span'><i className="fa-solid fa-wind"></i> Wind Speed</span> {weather?.wind.speed}m/s</li>
                <li className='card__item'><span className='card__span'><i className="fa-solid fa-cloud"></i> Clouds</span> {weather?.clouds.all}%</li>
                <li className='card__item'><span className='card__span'><i className="fa-solid fa-temperature-low"></i>Pressure</span> {weather?.main.pressure} hPa</li>
            </ul>
        </section>

        <footer className='card__footer'></footer>
        <h2 className='card__temperature' >{isCelsius ? `${temperature?.celsius} °C`: `${temperature?.farenheit} °F`}</h2>
        <button className='card__button' onClick={changeTemperature}>Change {isCelsius?`°Farenheit`:`°Celsius`}</button>
        </article>
)
}

export default WeatherCard