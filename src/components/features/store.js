import { configureStore } from "@reduxjs/toolkit";
import getdata from './slice';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    } from 'redux-persist'
    import storage from 'redux-persist/lib/storage'


    const persistConfig = {
        key: 'root',
        version: 1,
        storage,
    }

    const persistedReducer = persistReducer(persistConfig, getdata);

    //store 
    console.log(persistedReducer)
    
    export const store = configureStore(
        {
        reducer:{getdata:persistedReducer},
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
        }
    )
    

    