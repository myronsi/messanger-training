storeindex.js
import { configureStore } from '@reduxjstoolkit';
import exampleReducer from '.slicesexampleSlice';

const store = configureStore({
  reducer {
    example exampleReducer,
  },
});

export default store;
