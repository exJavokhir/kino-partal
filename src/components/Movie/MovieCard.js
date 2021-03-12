import { Link } from 'react-router-dom'

import './main.scss'

const MovieCard = ({id, rating, imgLink, title, release,}) =>{
    return (
            <Link to={`/movie/${id}`} className="movie-card">
                <span className="movie-rating">{rating}</span>
                <div className="class">
                <img src={imgLink} alt="" className="movie-img"/>
                </div>
                <h2 className="movie-title">{title}</h2>
                <span className="movie-data">{release}</span>
            </Link>
    )
}

export default MovieCard;