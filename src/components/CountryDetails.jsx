import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'
import './styles/reset.css'
import './styles/CountryDetails.css'

const CountryDetails = ({ match }) => {
    let [details, setDetails] = useState()
    const [bordersFullNames, setBordersFullNames] = useState()

    useEffect(() => {
        api
            .get(`/alpha/${match.params.id}`)
            .then(response => setDetails(response.data))
            .catch(error => console.log(error))
    }, [match.params.id])

    useEffect(() => {
        details &&
        api
            .get(`alpha?codes=${details?.borders.join(',')}`)
            .then(response => setBordersFullNames(response.data))
    }, [details?.borders])

    return (
        <div className="countryDetails">
            <Link to="/">
                <button className="btn-back"><i className="fas fa-long-arrow-alt-left"></i>Back</button>
            </Link>

            <div className="main-container">

                <div className="flag-container">
                    <img src={details?.flag} alt="Flag" className="img-flag" />
                </div>

                <div className="info-container">
                    <div className="first-line">
                        <h1 className="h1-name">{details?.name}</h1>
                    </div>

                    <div className="second-line">
                        <div className='info-1'>
                            <p><span>Native Name: </span>{details?.nativeName}</p>
                            <p><span>Population: </span>{details?.population}</p>
                            <p><span>Region: </span>{details?.region}</p>
                            <p><span>Sub Region: </span>{details?.subregion}</p>
                            <p><span>Capital: </span>{details?.capital}</p>
                        </div>

                        <div className="info-2">
                            <p><span>Top Level Domain: </span>{details?.topLevelDomain}</p>

                            { 
                                // If the Country has currencies ...
                                details?.currencies &&

                                // ...render this
                                <p><span>Currencies: </span>{
                                    details?.currencies.map(item => {
                                        return item.name
                                    }).join(', ')
                                }</p>
                            }


                            <p><span>Languages: </span>{
                                details?.languages.map(item => {
                                    return item.name
                                }).join(', ')
                            }</p>
                        </div>
                    </div>

                    <div className="info-3">
                        {
                            // If a country has borders with another country...
                            details?.borders &&

                            // ...then render this
                            <div className="borders">
                                <p><span>Border Countries: </span></p>
                                <div className="btns">
                                    {
                                        bordersFullNames?.map(country => {
                                            return <Link to={country.alpha3Code} key={country.alpha3Code}>
                                                <button className="btn-borders">{country.name}</button>
                                            </Link>
                                        })
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails