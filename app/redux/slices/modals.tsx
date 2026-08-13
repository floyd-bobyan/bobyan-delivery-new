import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType = "JOIN_US" | "PARTNER_US" | null;

interface ModalState {
  activeModal: ModalType;
}

const initialState: ModalState = {
  activeModal: null,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;