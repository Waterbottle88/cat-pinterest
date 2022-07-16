import { configureStore } from '@reduxjs/toolkit'
import savedSlice from './savedSlice'

export default configureStore({
    reducer:{
        saved: savedSlice,
    }
})