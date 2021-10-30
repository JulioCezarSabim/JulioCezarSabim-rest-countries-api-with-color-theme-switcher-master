import React from 'react'

export default function FilterBar({filter_function}) {
    
    return (
        <>
            <input type="search"  onChange={e => filter_function(e.target.value)} />
        </>
    )
}