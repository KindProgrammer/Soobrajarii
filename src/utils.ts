import { questionsList } from "./questionsList";

export const getRandomLetter = (prevLetter: string): string => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ';

    while (true) {
        const newLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (newLetter !== prevLetter) {
            return newLetter;
        }
    }
}

export const getRandomQuestion = (prevQuestion: string): string => {
    // Цикл зависнет, если список вопросов будет состоять из одного вопроса
    while (true) {
        const newQuestion = questionsList[Math.floor(Math.random() * questionsList.length)];
        if (newQuestion !== prevQuestion) {
            return newQuestion;
        }
    }
}