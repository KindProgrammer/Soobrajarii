import { questionsList } from "./questionsList";

export const getRandomLetter = () => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export const getRandomQuestion = () => {
    return questionsList[Math.floor(Math.random() * questionsList.length)];
}