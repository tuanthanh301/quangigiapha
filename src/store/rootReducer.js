import { combineReducers } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import localStorage from 'redux-persist/es/storage'
import authReducer from './auth-reducer'
import databaseReducer from './database-reducer'

export const databasePersistConfig = {
    key: 'database',
    storage: localStorage,
    whitelist: ["database","dataCollect", "dataRevenue"],
}
export const authPersistConfig = {
    key: 'auth',
    storage: localStorage,
    whitelist: ["userInfor", "listAccount"],
}
const rootReducer = combineReducers({
    database: persistReducer(databasePersistConfig, databaseReducer),
    auth: persistReducer(authPersistConfig, authReducer),
})

export default rootReducer