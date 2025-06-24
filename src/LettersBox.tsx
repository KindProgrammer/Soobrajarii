import './LettersBox.css';
import { getRandomLetter } from "./utils";

const LetterBox = () => {
    return (
        <div>
            <p>Буква</p>
            <p>
                {getRandomLetter()}
            </p>
        </div>
    )
}

export default LetterBox;