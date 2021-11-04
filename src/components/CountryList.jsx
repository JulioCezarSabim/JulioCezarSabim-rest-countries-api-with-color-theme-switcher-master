import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Country from './Country'
import FiltersBar from './FiltersBar'
import api from '../services/api'
import { v4 as uuidv4 } from 'uuid';
import './styles/CountryList.css'

const CountryList = props => {

    const [countries, setCountries] = useState()
    const [filteredCountries, setFilteredCountries] = useState()

    useEffect(() => {
        api
            .get('/all')
            .then(response => setCountries(response.data))
            .catch(error => console.log(error))
    }, [])

    function filterFunction(filter){
        const filtered = countries?.filter(country => {
            return country.name.toLowerCase().includes(filter.toLowerCase())
        })
        setFilteredCountries(filtered)
    }

    const listCountries = filteredCountries ? filteredCountries : countries

    return (
        <div className="countryList">
            <FiltersBar filterFunction={filterFunction} />
            {listCountries?.map(item => (
                <Link to={item.alpha3Code} key={uuidv4()} className="link" >
                    <Country data={item} />
                </Link>
            ))}
        </div>
    )
}

export default CountryList