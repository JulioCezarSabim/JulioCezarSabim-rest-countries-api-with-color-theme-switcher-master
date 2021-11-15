import React from 'react'

import SearchBar from './SearchBar'
import Filters from './Filters'

import './styles/FiltersBar.css'

export default function FiltersBar({ filterFunction, selectedRegion }) {
    return (
        <div className="filters_bar">
            <SearchBar filterFunction={filterFunction} />
            <Filters selectedRegion={selectedRegion} />
        </div>
    )
}
