export const getRandomLetter = () => {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}