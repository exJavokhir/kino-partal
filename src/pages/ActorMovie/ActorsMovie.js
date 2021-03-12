import axios from 'axios'
import { useState, useEffect } from 'react'

import MovieCard from '../../components/Movie/MovieCard'




const ActorsMovie = ({ match }) => {


    const [movieActor, setActorList] = useState({
        isFetched: false,
        data: {},
        error: null
    })

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/${match.params.id}/movie_credits`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })

            .then(function (response) {
                setActorList({
                    isFetched: true,
                    data: response.data,
                    error: null
                })
            })
            .catch(function (error) {
                setActorList({
                    isFetched: true,
                    data: [],
                    error: error
                })
            })
    }, [])

    console.log(movieActor);

    return (
        <div className="content">
            {
                movieActor.isFetched ? (
                    movieActor.data.cast.map(item => (
                        <div className="movie-card">
                            <MovieCard
                            id = {item.id}
                            title = {item.title}
                            rating = {item.vote_average}
                            imgLink = {`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            release = {item.release_date}
                        />
                        </div>
                    ))
                ) : (
                    <h1>Fucking</h1>
                    )
            }
        </div>
    )
}

export default ActorsMovie;
