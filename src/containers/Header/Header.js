import { Link }from 'react-router-dom'
import './main.scss'

import Logo from '../../assets/images/icons/logo.png'

const Header = ()=>{
    return(
        <div className="header">
            <div className="container">

                <Link to="/" className="header-logo">
                    <img src={Logo} alt="Logo"/>
                </Link>

                <div className="header-links">
                    <Link to="/movies" className="header-link">Movies</Link>
                    <Link to="/tv-show" className="header-link">TVShows</Link>
                    <Link to="/top-rating" className="header-link">Top Rating</Link>
                    <Link to="/last-movie" className="header-link">Last Movies</Link>
                    <Link to="/up-coming" className="header-link">Up Coming</Link>
                    <Link to="/search" className="header-link">Search</Link>
                </div>

                
            </div>
        </div>
    )
}

export default Header;