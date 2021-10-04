import { useEffect, useState } from 'react'

import api from '../services/api'

const CountryDetails = ({ match }) => {
    let [details, setDetails] = useState()

    useEffect(() => {
        api
            .get(`/alpha/${match.params.id}`)
            .then(response => setDetails(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>{details?.name}</h1>
            {details?.nativeName}
            {details?.population}
            {details?.region}
            {details?.subRegion}
            {details?.capital}
        </div>
    )
}

export default CountryDetails