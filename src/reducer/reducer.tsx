import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

export const artworksSlice = createSlice({
  name: "artworks",
  initialState: {
    favs: [],
    inDetails: {
      id: "",
    },
  },
  reducers: {
    addFavsForDetails: (state, action) => {
      if (state.favs.find((f) => f === action.payload)) {
        state.favs = state.favs.filter((f) => f !== action.payload);
      } else {
        state.favs = state.favs.concat(action.payload);
      }
    },
    inDetailsArtworks: (state, action) => {
      state.inDetails = {
        id: action.payload,
      };
    },
    addFavsStorage: (state, action) => {
      state.favs= action.payload
    }
  },
});

export const { addFavsForDetails, inDetailsArtworks, addFavsStorage } = artworksSlice.actions;

export default artworksSlice.reducer;
