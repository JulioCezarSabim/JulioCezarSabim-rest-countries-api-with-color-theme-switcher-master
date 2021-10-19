import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Country from './Country'
import api from '../services/api'
import { v4 as uuidv4 } from 'uuid';
import './styles/CountryList.css'

const CountryList = props => {

    let [countries, setCountries] = useState()

    useEffect(() => {
        api
            .get('/all')
            .then(response => setCountries(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="countryList">
            {countries?.map(item => (
                <Link to={item.alpha3Code} key={uuidv4()} className="link" >
                    <Country data={item} />
                </Link>
            ))}
        </div>
    )
}

export default CountryList