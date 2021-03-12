import { useState, useEffect } from 'react'
import axios from 'axios'

import Actors from '../../components/Actors'
import './main2.scss'

import MovieCard from '../../components/Movie/MovieCard'

const SingleMovies = ({ match })=>{
    const [movieInfo, setMovieInfo] = useState({
        isFetched: false,
        data: {},
        error: null
    })

    const [actorInfo, setActorInfo] = useState({
        isFetched: false,
        data: {},
        error: null
    })

    const [ recomen, setRecomen ] = useState({
        isFetched: false,
        data: {},
        error: null
    })

    useEffect(()=>{


        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })
        .then(function (response) {
            setMovieInfo({
                isFetched: true,
                data: response.data,
                error: false
            })
        })
        .catch(function (error) {
            setMovieInfo({
                isFetched: true,
                data: [],
                error: error
            })
        })

        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })
        .then(function (response) {
            setActorInfo({
                isFetched: true,
                data: response.data,
                error: false
            })
        })
        .catch(function (error) {
            setActorInfo({
                isFetched: true,
                data: [],
                error: error
            })
        })


        axios.get (`https://api.themoviedb.org/3/movie/${match.params.id}/recommendations`,{
            params:{
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })

        .then(function(response){
            setRecomen({
                isFetched: true,
                data: response.data.results,
                error: false
            })
        })

        .catch(function(error){
            setRecomen({
                isFetched: true,
                data: [],
                error: error
            })
        })
    }, [match]);

    const Actor = actorInfo.data.cast
    console.log(recomen);

    return(
        <div className="container">
            {
                movieInfo.isFetched ? (
                    <div className="movie-info-card">
                        <img className="back-img" src={`https://image.tmdb.org/t/p/w500/${movieInfo.data.backdrop_path}`} alt=""/>
                        <h1 className="movie-info-title">{movieInfo.data.title}</h1>
                        <p className="movie-info-overview">{movieInfo.data.overview}</p>
                        <div className="vote">
                            <span className="display">FULLHD</span>
                            {
                                movieInfo.data.genres.map((genre, index)=>(
                                    <button key={index}>{genre.name}</button>
                                ))
                            }
                        </div>
                        <div className="date">
                            <h4 className="movie-info-date">{movieInfo.data.release_date}</h4>
                            <h4 className="movie-info-budget">{'$',movieInfo.data.budget}</h4>
                        </div>
                        <h2 className="movie-info-vote">{movieInfo.data.vote_average}</h2>

                        <div className="actors-list">
                            {
                                actorInfo.isFetched ? (
                                    <div className="actor-card">
                                        {
                                            actorInfo.data.cast.map((actor, index)=>(
                                                <Actors
                                                id = {actor.id}
                                                key = {index}
                                                name = {actor.name}
                                                charname = {actor.character}
                                                imgLink = {`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                            />
                                            ))

                                        }
                                    </div>
                                ) : (
                                    <h1>Loading...</h1>
                                )
                            }
                        </div>
                    </div>
                    
                ) : (
                    <h1>Loading...</h1>
                )

            }

            <div className="recomen-movie">
                {
                    recomen.isFetched ? (
                        <div className="wrapper-recomen">
                            {
                                recomen.data.map(item =>(
                                    <MovieCard
                                        id = {item.id}
                                        imgLink = {`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                        rating = {item.vote_average}
                                        title = {item.title}
                                        release = {item.release_date}
                                    />
                                ))
                            }
                        </div>
                    ):(
                        <h1>Fuck you bitch !!!</h1>
                    )
                }
            </div>
        </div>
        
    )
}

export default SingleMovies;