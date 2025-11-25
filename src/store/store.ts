import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Placeholder reducer to avoid empty reducer error
    app: (state = {}) => state,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
