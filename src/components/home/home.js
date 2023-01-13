import React from 'react'
import './home.css'
import MovieCard from '../movieCard/movieCard'
import {useSelector} from 'react-redux'
import Search from "../Search/search";
function Home() {

    const {isLodding}= useSelector(state=>state.getdata);
        return (
            <>
    <Search/>

            {!isLodding ?
            <MovieCard />
            :
                <div>Loddding</div>
            }
            </>
    )
}

export default Home