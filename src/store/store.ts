import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addressSlice from "@store/reducers/addressSlice";

const rootReducer = combineReducers({
  address: addressSlice
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore