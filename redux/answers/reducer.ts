import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addAnswer, clearAnswers, removeAnswer } from "./actions";

export interface IAnswer {
	questionId: string;
	answerId: string;
}

const initialState: IAnswer[] = [];

const answersSlice = createSlice({
	name: "answers",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(addAnswer.type, (state, action: PayloadAction<IAnswer>) => {
			const newState = [...state];

			const index = newState.findIndex(
				answer => answer.questionId === action.payload.questionId,
			);

			if (index !== -1) {
				newState[index] = action.payload;
			} else {
				newState.push(action.payload);
			}

			return newState;
		});

		builder.addCase(removeAnswer.type, (state, _) => {
			const newState = [...state];

			newState.pop();

			return newState;
		});

		builder.addCase(clearAnswers.type, (_, __) => initialState);
	},
});

export const answersReducer = answersSlice.reducer;
