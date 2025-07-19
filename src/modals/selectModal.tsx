import AddPlayerModal from "./AddPlayerModal/AddPlayerModal";
import CongratulationsWinnerModal from "./CongratulationsWinnerModal/CongratulationsWinnerModal";
import type { ComponentType } from "react";

export type ModalType = 'addPlayerModal' | 'congratulationsWinnerModal';

const selectModal: Record<ModalType, ComponentType> = {
    addPlayerModal: AddPlayerModal,
    congratulationsWinnerModal: CongratulationsWinnerModal,
}

export default selectModal;