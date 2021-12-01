import React, { useEffect, useState } from 'react'

import './styles/Navbar.css'

const Navbar = props => {
    const [darkmode, setDarkmode] = useState('light')

    useEffect(() => {
        const main_style = document.getElementById('main')
        const body = document.getElementsByTagName('body')[0]

        main_style.classList.toggle('dark')
        body.classList.toggle('dark')
    }, [darkmode])

    function toggleDarkmode() {
        darkmode === 'light' ? setDarkmode('dark') : setDarkmode('light')
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