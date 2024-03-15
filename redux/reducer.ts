import { createSlice } from "@reduxjs/toolkit";
import { setCurrentQuestion } from "./actions";
import configQuestionnaire, { IConfigQuestionnaire } from "@/config-questionnaire";

interface IAnswer {
	id: string;
	answers: string[] | string;
}

export interface IQuestionState {
	current: IConfigQuestionnaire;
	answers: IAnswer[];
}

const initialState: IQuestionState = {
	current: configQuestionnaire[0],
	answers: [],
};

export const questionsSlice = createSlice({
	name: "questions",
	initialState,
	reducers: {
		[setCurrentQuestion.type]: (state, action) => ({
			...state,
			current: action.payload,
		}),
	},
});

export const questionsReducer = questionsSlice.reducer;
