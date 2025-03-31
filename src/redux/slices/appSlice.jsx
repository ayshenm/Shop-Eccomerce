import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  showAlert: false, // Alert-i göstərmək üçün state
  message: "", // Alert mesajı
  severity: "success",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showAlert: (state, action) => {
        state.showAlert = true;
        state.message = action.payload.message;  // Mesajı Redux store-a göndəririk
        state.severity = action.payload.severity; // Şiddəti göndəririk
      },
      hideAlert: (state) => {
        state.showAlert = false; // Alert-i gizlətmək
      },
  
  },

//   extraReducers: (builder) => {},
});

export const {showAlert,hideAlert} = appSlice.actions;
export default appSlice.reducer;
