import { useState, useEffect } from 'react'
import axios from 'axios'

import MovieCard from '../../components/Movie'

const UpComing = ()=>{

    const [movieList, setMovieList] = useState({
        isFetched: false,
        data: {},
        error: null
    })

    useEffect(()=>{


        axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })
        .then(function (response) {
            setMovieList({
                isFetched: true,
                data: response.data,
                error: false
            })
        })
        .catch(function (error) {
            setMovieList({
                isFetched: true,
                data: [],
                error: error
            })
        })
    }, []);

    console.log(movieList.data);

    return(
        <div className="container">
            {
                movieList.isFetched ? (
                    <div className="movie-list"> 
                        {
                            movieList.data.results.map((movie, index) =>(
                                <MovieCard
                                    id = {movie.id}
                                    key = {index}
                                    title = {movie.title}
                                    rating = {movie.vote_average}
                                    imgLink = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    release = {movie.release_date}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <h1>Loading ...</h1>
                )
            }
        </div>

    )
}

export default UpComing;