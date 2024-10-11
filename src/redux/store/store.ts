import { configureStore } from '@reduxjs/toolkit'
import { visibledSlice } from './poc-button/buttonChangeVisible/visibleSlice'
import { buttonXSlice } from './poc-button/buttonChangeColor/buttonX'
import { buttonYSlice } from './poc-button/buttonChangeName/buttonY'
// ...

export const store = configureStore({
  reducer: {
    visibleButton: visibledSlice.reducer,
    buttonX: buttonXSlice.reducer,
    buttonY: buttonYSlice.reducer,
  }
});
