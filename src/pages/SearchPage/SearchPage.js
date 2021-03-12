import { useState, useEffect } from 'react'
import axios from 'axios'

import MovieCard from '../../components/Movie/MovieCard'

import '../../components/Movie/main.scss'

import 'antd/dist/antd.css'
import './main.scss'
import { Input, Space } from 'antd';

const SearchPage = ()=>{


    const [search, setSearch] = useState('')
    const [result, setResult] = useState({
        isFetched: false,
        data: [],
        error: null
    })


    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}`,{
            params: {
                api_key: '9c3eab726cd61f5987bf26a9e76a226c'
            }
        })

        .then(function (response) {
            setResult({
                isFetched: true,
                data: response.data.results,
                error: false
            })
            
        })
        .catch(function (error) {
            setResult({
                isFetched: true,
                data: [],
                error: error
            })
        })
    }, [search])
    
    console.log(result);

const { Search } = Input;

    return(
        <div className="wrapper-movie">

            <Search className="input" placeholder="input search text" allowClear onSearch={(value)=> setSearch(value)} style={{ width: 200 }} />
                <div className="form">
                        {
                            result.isFetched ? (
                                    result.data.map((movie, index) =>(
                                        <MovieCard
                                            id = {movie.id}
                                            key = {index}
                                            title = {movie.title}
                                            rating = {movie.vote_average}
                                            imgLink = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                            release = {movie.release_date}
                                            />
                                            ))
                        ) : (
                            <h1>Loading ...</h1>
                            )
                    }
                </div>
                    </div>
    )
}

export default SearchPage;