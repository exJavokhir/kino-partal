import { Link } from 'react-router-dom'

import './main.scss'

const Actors = ({id, name, charname, imgLink})=>{

    return(
        <Link to={`/person/${id}`} className="actor-info">
            <img src={imgLink} alt=""/>
            <h3 className="actor-name">{name}</h3>
            <h4 className="actor-charname">{charname}</h4>
        </Link>
    )
}

export default Actors;