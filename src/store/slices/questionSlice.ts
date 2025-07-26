import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { getRandomQuestion } from '../../utils';


export interface QuestionState {
    question: string
}

const initialState: QuestionState = {
    question: '?'
}

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        resetQuestion: (state) => {
            state.question = '?';
          },
        generateQuestion: (state) => {
            state.question = getRandomQuestion(state.question);
          },
    }
})

export const { resetQuestion, generateQuestion } = questionSlice.actions;
export default questionSlice.reducer;
export const questionSelector = (state: RootState) => state.question.question;