import { configureStore } from '@reduxjs/toolkit';
import artworksReducer from '../reducer/reducer';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    artworks: artworksReducer
  }
});

export default store;

// Types de stores y dispatchs
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

