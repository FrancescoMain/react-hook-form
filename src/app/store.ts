import { configureStore } from '@reduxjs/toolkit'
import { nationsApi } from './api'

const store = configureStore({
  reducer: {
    [nationsApi.reducerPath]: nationsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(nationsApi.middleware),
})

export default store
