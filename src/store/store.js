
import { configureStore } from '@reduxjs/toolkit'
import cricnoteinfoRender from '../Reducer/Reducer'

export const store = configureStore({
  reducer:{
    cricnoteinfo:cricnoteinfoRender
  },
 
});




