import { createSlice } from "@reduxjs/toolkit";
import { api } from "../config/config"
import axios from 'axios';

export const loginslice = createSlice({
  name: 'cricnoteinfo',

  initialState: {
    recentnews: [],
    trendvideos: [],
    slotpic: [],
    categories: []

  },
  reducers: {

    setPost: (state, action) => {
      state.recentnews = action.payload
    },

    setVideo: (state, action) => {

      state.trendvideos = action.payload;
    },
    setSlot: (state, action) => {

      state.slotpic = action.payload;
    },
    setCategories: (state, action) => {

      state.categories = action.payload;
    }
  }
})
export const { setPost } = loginslice.actions
export const { setVideo } = loginslice.actions
export const { setSlot } = loginslice.actions
export const { setCategories } = loginslice.actions

export const getRecentNews = (details) => (dispatch) => {

  axios.get(api.post)
    .then(function (response) {
      // handle success  
      dispatch(setPost(response))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
export const trendvideo = (details) => (dispatch) => {

  axios.get(api.trendvideo)
    .then(function (response) {
      // handle success
      dispatch(setVideo(response))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export const slotpic = (details) => (dispatch) => {

  axios.get(api.slotpic)
    .then(function (response) {
      // handle success
      dispatch(setSlot(response))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}


export const categories = (details) => (dispatch) => {

  axios.get(api.categories)
    .then(function (response) {
      // handle success
      dispatch(setCategories(response))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export default loginslice.reducer


