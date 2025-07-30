import ModalLayout from "../ModalLayout/ModalLayout";
import VictoryPointsSetting from "../../SettingsController/VictoryPointsSetting";

const SettingsModal = () => {
    return (
        <ModalLayout>
            <div>
                <h3>Настройки</h3>
                <div>
                    <VictoryPointsSetting />
                </div>
            </div>
        </ModalLayout>
    );
}

export default SettingsModal;