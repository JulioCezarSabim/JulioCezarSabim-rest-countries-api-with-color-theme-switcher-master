import React from 'react'

export default function FiltersBar({ filterFunction }) {
    return (
        <input type="search" onChange={e => filterFunction(e.target.value)} />
    )
}
