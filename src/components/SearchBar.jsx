import React from 'react'

export default function SearchBar({ filterFunction }) {
    return (
        <input className="search_bar" type="search" placeholder="Search for a country..." onChange={e => filterFunction(e.target.value)} />
    )
}
