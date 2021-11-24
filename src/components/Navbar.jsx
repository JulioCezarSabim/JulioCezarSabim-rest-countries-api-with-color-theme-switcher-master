import React, { useEffect, useState } from 'react'

import './styles/Navbar.css'

const Navbar = props => {
    const [darkmode, setDarkmode] = useState('light')

    useEffect(() => {
        const main_style = document.getElementById('main')

        main_style.classList.toggle('dark')
    }, [darkmode])

    function toggleDarkmode() {
        if (darkmode === 'light') setDarkmode('dark')
        else setDarkmode('light')
    }

    return (
        <nav>
            <ul>
                <li>Where in the world?</li>
                <li><button className="btn-darkmode" onClick={toggleDarkmode}><i className="far fa-moon"></i> Dark Mode</button></li>
            </ul>
        </nav>
    )
}


export default Navbar