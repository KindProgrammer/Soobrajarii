import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';

export interface ModalState {
  isOpened: boolean;
  type: string | null;
  cross: boolean;
}

const initialState: ModalState = {
    isOpened: false,
    type: null,
    cross: true
  }

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      openModal(state, action) {
        state.type = action.payload.type;
        state.cross = action.payload.cross;
        state.isOpened = true;
      },
      closeModal(state) {
        state.type = null
        state.isOpened = false
      }
    }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
export const isOpenedSelector = (state: RootState) => state.modal.isOpened;
export const typeSelector = (state: RootState) => state.modal.type;
export const crossSelector = (state: RootState) => state.modal.cross;

