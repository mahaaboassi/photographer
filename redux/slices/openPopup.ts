import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isOpen: boolean;
}

const initialState: PopupState = {
  isOpen: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.isOpen = false;
    },
    togglePopup: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openPopup, closePopup, togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
