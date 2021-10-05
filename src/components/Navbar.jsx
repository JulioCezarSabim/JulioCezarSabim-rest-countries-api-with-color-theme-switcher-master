import react from 'react'

import './styles/Navbar.css'

const Navbar = props => {
    return (
        <nav>
            <ul>
                <li>Where in the world?</li>
                <li><button><i class="far fa-moon"></i> Dark Mode</button></li>
            </ul>
        </nav>
    )
}


export default Navbar