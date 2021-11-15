import React from 'react'

import './styles/Filters.css'

export default function Filters({ selectedRegion }) {

    function update() {
        const selectTag = document.getElementsByTagName('select')[0]
        const optionTag = selectTag.options[selectTag.selectedIndex]

        if (optionTag.value !== 'none')
            selectedRegion(optionTag.value)
    }

    return (
        <div className="custom-select">
            <select onChange={update}>
                <option value="all">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
            <i className="fas fa-chevron-down"></i>
        </div>
    )
}