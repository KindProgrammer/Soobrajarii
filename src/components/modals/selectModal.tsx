import { lazy } from "react";
// import AddPlayerModal from "./AddPlayerModal/AddPlayerModal";
// import CongratulationsWinnerModal from "./CongratulationsWinnerModal/CongratulationsWinnerModal";
// import SettingsModal from "./SettingsModal/SettingsModal";
import type { ComponentType } from "react";

export type ModalType = 'addPlayerModal' | 'congratulationsWinnerModal' | 'settingsModal';

const selectModal: Record<ModalType, ComponentType> = {
    addPlayerModal: lazy(() => import("./AddPlayerModal/AddPlayerModal")),
    congratulationsWinnerModal: lazy(() => import("./CongratulationsWinnerModal/CongratulationsWinnerModal")),
    settingsModal: lazy(() => import("./SettingsModal/SettingsModal")),
}

export default selectModal as Record<ModalType, React.LazyExoticComponent<React.ComponentType>>;