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
        const btn_darkmode = document.getElementsByClassName('btn-darkmode')[0]
        const icon_darkmode = document.getElementById('icon-darkmode')

        if (darkmode === 'light') {
            setDarkmode('dark')
            icon_darkmode.classList.add('far')
            icon_darkmode.classList.remove('fas')
        }
        else {
            setDarkmode('light')
            icon_darkmode.classList.remove('far')
            icon_darkmode.classList.add('fas')
        }
    }

    return (
        <nav>
            <ul>
                <li>Where in the world?</li>
                <li>
                    <i className="fas fa-moon" id="icon-darkmode"></i>
                    <button className="btn-darkmode" onClick={toggleDarkmode}>Dark Mode</button>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar