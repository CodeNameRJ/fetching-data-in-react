import { useState } from 'react'  //object destructure


const WeatherSearch = (props) => {
    const {fetchData} = props  //instead of props.fetchData
    const [city, setCity] = useState('') // array destruction to refernce later
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(city)
        setCity('')


    }

    return (

        <section>

            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter a city </label>
                <input
                    id='city' // gets attached as key
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}

                />
                <button type='submit'>Search</button>

            </form>
        </section>



    )

}


export default WeatherSearch
