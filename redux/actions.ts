import { createAction } from '@reduxjs/toolkit';

export const setCurrentQuestion = createAction<string>(
    'questions/currentQuestion'
);
