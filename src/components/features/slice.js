import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const url = "https://www.omdbapi.com/?apikey=2d2c9b16&s=movie";

export const GetMovie = createAsyncThunk('GetMovie/movie',
        async(_,thunk)=>{
            try{
                const res =await fetch(url);
                const data =await res.json()
                return data
            }
            catch(error){
                console.log(error)
            }
        }
)

const initialState = {
        getdata:[],
        isLodding:false,
}

const GetMoviesSlice = createSlice(
    {
        name:"movie",
        initialState,
        extraReducers:{
        [GetMovie.pending]:(state,action)=>{
            state.isLodding =true;
        },
        [GetMovie.fulfilled]:(state,action)=>{
            state.isLodding =false;
            state.getdata =action.payload.Search;
        },
        [GetMovie.rejected]:(state,action)=>{
            state.isLodding =false;
        },
        }
    }
)

export default GetMoviesSlice.reducer
// export const {getdata,isLodding} =GetMoviesSlice.actions 