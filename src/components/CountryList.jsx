import { useEffect, useState } from 'react'

import Country from './Country'
import api from '../services/api'
import { v4 as uuidv4 } from 'uuid';
import './styles/CountryList.css'

const CountryList = props => {

    let [country, setCountry] = useState()

    useEffect(() => {
        api
            .get('/all')
            .then(response => setCountry(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="countryList">
            { country?.map(item => (
                <Country key={uuidv4()} data={item} />
            )) }
        </div>
    )
}

export default CountryList