import { configureStore } from "@reduxjs/toolkit";
import modals from "./slices/modals"
import joinUs from "./slices/join-us"
import trackApplication from "./slices/track-application"

export const store = configureStore({
  reducer: {
    modals,
    joinUs,
    trackApplication
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;