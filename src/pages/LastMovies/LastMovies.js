import { useState, useEffect} from 'react'
import axios from 'axios'

import MovieCard from '../../components/Movie'

const LastMovies = ()=>{

    const [latest, setLatest] = useState({
        isFetched: false,
        data: {},
        error: null
    })

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/latest`, {
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })

        .then(function (response){
            setLatest({
                isFetched: true,
                data: response.data,
                error: false
            })
        })

        .catch(function (error) {
            setLatest({
                isFetched: true,
                data:[],
                error: error
            })
        })
        
    },[])

    console.log('salom',latest.data);



    return(
        latest.isFetched ? (
            <div className="movie-list">
                <MovieCard
                    id = {latest.data.id}
                    rating = {latest.data.vote_average}
                    imgLink = {`https://image.tmdb.org/t/p/w500/${latest.data.poster_path}`}
                    title  = {latest.data.title}
                    release = {latest.data.release_date}
                />
            </div>
        ):(
            <h1>Loading ...</h1>
        )
    )
}

export default LastMovies;