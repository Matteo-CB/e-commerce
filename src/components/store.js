

import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
  devTools: true, // Activation des DevTools seulement en développement
});

export default store;