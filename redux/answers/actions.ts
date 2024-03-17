import { createAction } from "@reduxjs/toolkit";
import { IAnswer } from "./reducer";

export const addAnswer = createAction<IAnswer>("addAnswer");

export const removeAnswer = createAction("removeAnswer");

export const clearAnswers = createAction("clearAnswers");
