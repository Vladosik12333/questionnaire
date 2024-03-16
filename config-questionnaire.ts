export enum QuestionType {
	BASIC_QUESTION = "basic",
	INFLUENCE_QUESTION = "influence",
}

interface IVariants {
	id: string;
	title: string;
	nextQuestionId?: string;
}

interface IMessage {
	title: string;
	description: string;
}

export interface IQuestion {
	id: string;
	title: string;
	message?: IMessage;
	type: QuestionType;
	variants: IVariants[];
	previousQuestionId?: string;
	nextQuestionId?: string;
}

/*
	You may edit this variable to add, remove or edit questions.
	@id - unique identifier of the question
	@title - title of the question
	@type - type of the question (singleChoice or multipleChoice)
	@variants - array of possible answers
	@rightAnswers - array of indexes of right answers
*/
const configQuestionnaire: IQuestion[] = [
	{
		id: "bbd29db9-04d1-4a0b-8bcd-9c4c4020fb3d",
		title: "What is the capital of Ukraine?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{ id: "54edc5ee-ad95-4445-8153-68afb07a975f", title: "Kyiv" },
			{ id: "5c1a7f42-35e3-457c-964d-abb32d9a21ac", title: "Ternopil" },
			{ id: "5db39976-5042-4608-8ad4-d125c35f4426", title: "Lviv" },
		],
		message: {
			title: "You are right! Kyiv is the capital of Ukraine.",
			description:
				"Kyiv is the capital and the largest city of Ukraine, located in the north-central part of the country on the Dnieper River.",
		},
		nextQuestionId: "137f7884-af5b-4591-a4e1-7b8b028818ab",
	},
	{
		id: "137f7884-af5b-4591-a4e1-7b8b028818ab",
		title: "What is the capital of Poland?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{ id: "79c83743-914f-481b-a8e4-d9aa21e34c0d", title: "Warsaw" },
			{ id: "db906244-1c3a-458a-b66c-248b0bcf5f6b", title: "Krakow" },
			{ id: "17a481e3-6718-4eba-9c6a-f1ab8c3a0d96", title: "Gdansk" },
		],
		previousQuestionId: "bbd29db9-04d1-4a0b-8bcd-9c4c4020fb3d",
	},
];

export default configQuestionnaire;
