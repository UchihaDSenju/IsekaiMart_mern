import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// we need to import the reducer function from the  userSlice and add it to our store(by naming it user). By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state(as defined in the initialState State).