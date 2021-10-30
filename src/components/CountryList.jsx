import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Country from './Country'
import api from '../services/api'
import { v4 as uuidv4 } from 'uuid';
import './styles/CountryList.css'

const CountryList = props => {

    let [countries, setCountries] = useState()
    let [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        api
            .get('/all')
            .then(response => setCountries(response.data))
            .catch(error => console.log(error))
    }, [])

    const filteredCountries = countries?.filter(country => {
        return country.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    // const getBorderCountriesFullName = (country) => {
    //     let bordersList = [];

    //     country.borders?.forEach((i) => {
    //         bordersList.push({
    //             code: i,
    //             name: countries.find((c) => c.alpha3Code === i).name,
    //         })
    //     });

    //     countries.find((c) => c.alpha3Code === country.alpha3Code).borderList = bordersList

    //     console.log(country.borderList)

    //     return country;
    // };

    return (
        <div className="countryList">
            <input type="search" onChange={e => setSearchTerm(e.target.value)} />
            {filteredCountries?.map(item => {
                // item = getBorderCountriesFullName(item);
                return (<Link to={item.alpha3Code} key={uuidv4()} className="link" >
                    <Country data={item} />
                </Link>)
            })}
        </div>
    )
}

export default CountryList





// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import Country from "./Country";
// import api from "../services/api";
// import { v4 as uuidv4 } from "uuid";
// import "./styles/CountryList.css";

// const CountryList = (props) => {
//   let [countries, setCountries] = useState([]);

//   useEffect(() => {
//     api
//       .get("/all")
//       .then((response) => setCountries(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const getBorderCountriesFullName = (country) => {
//     let bordersList = [];

//     country.borders?.forEach((i) => {
//       bordersList.push({
//         code: i,
//         name: countries.find((c) => c.alpha3Code === i).name,
//       })
//     });

//     countries.find((c) => c.alpha3Code === country.alpha3Code).borderList = bordersList

//     return country;
//   };

//   return (
//     <div className="countryList">
//       {countries?.map((country) => {
//         country = getBorderCountriesFullName(country);

//         return (
//           <Link to={country.alpha3Code} key={uuidv4()} className="link">
//             <Country data={country} />
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default CountryList;
