import words from "./words.json";

export const MAX_GUESSES = 6;
export const WORD_SIZE = 5;
export const VICTORY_MESSAGE = "You Won!";
export const DEFEAT_MESSAGE = "You Lost!";
export let GUESS_WORD = "";

export const setGuessWord = () => { GUESS_WORD = words[Math.floor(Math.random() * words.length)]; };
setGuessWord();
