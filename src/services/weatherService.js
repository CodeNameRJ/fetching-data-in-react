const API_KEY = '0acfcb75551a469c84e220520250503 '
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`


const show = async(city) => {
    try {
        const queryString = `&q=${city}`
        const res = await fetch(BASE_URL + queryString)
        // console.log(res)
        const data = await res.json()
        // console.log(data)
        return data

    } catch (error) {
        console.log(error)

    }

}


// show('New York')

export {
    show
}
