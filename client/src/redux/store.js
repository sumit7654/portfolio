import { configureStore } from "@reduxjs/toolkit";
import { authSlice, alertSlice } from "./features";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    auth: authSlice.reducer,
  },
});
