import { useEffect, useState } from 'react'

import api from '../services/api'

const CountryDetails = ({ match }) => {
    let [details, setDetails] = useState()

    useEffect(() => {
        api
            .get(`/alpha/${match.params.id}`)
            .then(response => setDetails(response.data))
            .catch(error => console.log(error))
    }, [match.params.id])

    return (
        <div>
            <h1>{details?.name}</h1>
            <h2>{details?.nativeName}</h2>
            <h2>{details?.population}</h2>
            <h2>{details?.region}</h2>
            <h2>{details?.subRegion}</h2>
            <h2>{details?.capital}</h2>
        </div>
    )
}

export default CountryDetails