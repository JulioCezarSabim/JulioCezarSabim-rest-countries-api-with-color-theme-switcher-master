import React from 'react'

import SearchBar from './SearchBar'

import './styles/FiltersBar.css'

export default function FiltersBar({ filterFunction }) {
    return (
        <div className="filters_bar">
            <SearchBar filterFunction={filterFunction} />
        </div>
    )
}
