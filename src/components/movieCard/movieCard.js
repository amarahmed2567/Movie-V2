/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './movieCatd.css'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function MovieCard() {

    const {getdata}= useSelector(state=>state.getdata);

    const data = getdata.map((itme)=>{
        const {Title,Type,Year,imdbID,Poster}= itme
        return(
            <div className="card" style={{width: "18rem",margin:'1rem'}} key={imdbID}>
                <img src={Poster} className="card-img-top" alt={Type}/>
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Type} = {Year}</p>
                <Link to={`/${imdbID}`} className="btn btn-primary" 
                >Go somewhere</Link>
            </div>
        </div> 
        )
        })
        
    return (
        <div className='contenar-movie'> 
        {data}
        </div>
    )
}

export default MovieCard