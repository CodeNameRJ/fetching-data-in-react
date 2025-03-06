const WeatherDetails = (props) => {
    const {weather} = props
    return (

        <section>
            <h2>Weather details</h2>
            <p>Location: {weather?.location} </p>
            <p>Temperature: {weather?.temperature} </p>
            <p>Condition: {weather?.condition} </p>
        </section>



    )

}

// use the ? mark above to force undefined error 


export default WeatherDetails
