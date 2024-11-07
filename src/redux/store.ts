import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { WebStorage ,persistReducer} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";


function createPersistStorage(): WebStorage {
    const isServer = typeof window === 'undefined'
    if(isServer) {
        return {
            getItem() {return Promise.resolve(null)},
            setItem() {return Promise.resolve()},
            removeItem() {return Promise.resolve()}
        }
    }

    return createWebStorage('local')
}

const storage = createPersistStorage()

const persistedConfig = {
    key : 'rootPersist',
    storage
}

const rootReducer = combineReducers({cartSlice})
const reduxPersistedReducer = persistReducer(persistedConfig,rootReducer)

export const store = configureStore({
    reducer: reduxPersistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector