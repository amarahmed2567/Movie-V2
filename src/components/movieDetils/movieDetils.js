import React from 'react'
import './movieDetils.css'
import { useSelector } from 'react-redux';
import {useParams}from 'react-router-dom'


function MovieDetils() {

    const {imdbID} = useParams();

    const {getdata}= useSelector(state=>state.getdata);
    // const {Title,Type,Year,imdbID,Poster}= filterData
    const filterData = getdata.find((itme)=>itme.imdbID === imdbID)
    
    return (
    <>
        <div className="card mb-3" style={{maxWidth: "50%",height:"80vh"}} key={imdbID}>
    <div className="row g-0">
        <div className="col-md-4">
        <img src={filterData.Poster} className="img-fluid rounded-start" style={{height:"100%"}} alt={filterData.Type}/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{filterData.Title}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">{filterData.Year}</small></p>
        </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default MovieDetils