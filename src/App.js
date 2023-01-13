import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './components/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import NavBar from './components/navBar/navBar'
import MovieDetils from './components/movieDetils/movieDetils'
import {GetMovie} from './components/features/slice'
import {useDispatch,useSelector} from 'react-redux'




function App() {

    const dispatch =useDispatch();
    const {isLodding}= useSelector(state=>state.getdata);
    React.useEffect(()=>{
        dispatch(GetMovie())
    },[dispatch])


  return (
    <BrowserRouter>
    <NavBar/>
    <Routes> 
      <Route  path="/"     element={<Home  isLodding={isLodding}/>}  />
      <Route  path="/:imdbID"     element={<MovieDetils />}  />
      <Route path="header" element={<Header/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
