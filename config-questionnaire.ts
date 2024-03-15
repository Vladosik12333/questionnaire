export enum QuestionType {
	SINGLE_CHOICE = "singleChoice",
	MULTIPLE_CHOICE = "multipleChoice",
}

interface IVariants {
	id: string;
	title: string;
}

export interface IConfigQuestionnaire {
	id: string;
	title: string;
	type: QuestionType;
	variants: IVariants[];
	rightAnswers: string | string[];
}

/*
	You may edit this variable to add, remove or edit questions.
	@id - unique identifier of the question
	@title - title of the question
	@type - type of the question (singleChoice or multipleChoice)
	@variants - array of possible answers
	@rightAnswers - array of indexes of right answers
*/
const configQuestionnaire: IConfigQuestionnaire[] = [
	{
		id: "bbd29db9-04d1-4a0b-8bcd-9c4c4020fb3d",
		title: "What is the capital of Ukraine?",
		type: QuestionType.SINGLE_CHOICE,
		variants: [
			{ id: "d85ce3de-e279-40a2-ad65-4ab0079f4303", title: "Kyiv" },
			{ id: "134344c9-2d5f-4853-b3cb-76d6bdf1c5a9", title: "Ternopil" },
			{ id: "47141605-47d8-4ac5-84f6-47bd54cde48f", title: "Lviv" },
		],
		rightAnswers: "Kyiv",
	},
];

export default configQuestionnaire;
