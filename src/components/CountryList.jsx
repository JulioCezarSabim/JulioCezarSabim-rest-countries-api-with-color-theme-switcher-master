import { useEffect, useState } from 'react'

import Country from './Country'
import api from '../services/api'
import { v4 as uuidv4 } from 'uuid';

const CountryList = props => {

    let [country, setCountry] = useState()

    useEffect(() => {
        api
            .get('/all')
            .then(response => setCountry(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            { country?.map(item => (
                <Country key={uuidv4()} data={item} />
            )) }
        </>
    )
}

export default CountryList