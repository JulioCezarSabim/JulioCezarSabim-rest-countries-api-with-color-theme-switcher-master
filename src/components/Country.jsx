import './styles/Country.css'

const Country = props => {

    return (
        <div className="country">
            <img src={props.data.flag} alt="Country Flag" />
            <div className="infos">
                <h2>{ props.data.name }</h2>
                <p><span>Population: </span>{ props.data.population }</p>
                <p><span>Region: </span>{ props.data.region }</p>
                <p><span>Capital: </span>{ props.data.capital }</p>
            </div>
        </div>
    )
}

export default Country