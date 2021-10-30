import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'
import './styles/reset.css'
import './styles/CountryDetails.css'

const CountryDetails = ({ match }) => {
    let [details, setDetails] = useState()


    const getBorderCountriesFullName = async (country) => {

        const ret = await api.get('/all')
        const countries = ret.data

        let bordersList = [];

        country.borders?.forEach((i) => {
            bordersList.push({
                code: i,
                name: countries.find((c) => c.alpha3Code === i).name,
            })
        });

        country.bordersList = bordersList

        return country;
    };


    useEffect(async () => {
        
        const country_info = await api.get(`/alpha/${match.params.id}`)
        const new_details = await getBorderCountriesFullName(country_info.data)
        console.log(new_details)
        setDetails(new_details)

    }, [match.params.id])

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
                            <p><span>Currencies: </span>{
                                details?.currencies.map(item => {
                                    return item.name
                                }).join(', ')
                            }</p>
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
                            details?.bordersList &&

                            // ...then render this
                            <div className="borders">
                                <p><span>Border Countries: </span></p>
                                <div className="btns">
                                    {
                                        details?.bordersList.map(country => {
                                            return <Link to={country.code} key={country.code}>
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