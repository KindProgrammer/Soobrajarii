import { questionsList } from "./questionsList";

export const getRandomLetter = (): string => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ';

    return  alphabet[Math.floor(Math.random() * alphabet.length)];
}

export const getRandomQuestion = (): string => {
    return questionsList[Math.floor(Math.random() * questionsList.length)];
}