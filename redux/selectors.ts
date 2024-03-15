import { RootState } from "./store";

export const currentQuestionSelector = (state: RootState) => state.questions.current;
