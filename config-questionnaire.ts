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
	statement?: string;
	template?: string[];
	message?: IMessage;
	type: QuestionType;
	variants: IVariants[];
	nextQuestionId?: string;
}

/*
	You may edit this variable to add, remove or edit questions.

	@id (required) - unique identifier of the question.
	I do recommend using UUIDs to avoid collisions

	@title (required) - title of the question

	@type (required) - type of the question
	By default, questions is basic and will redirect to the next question as nextQuestionId
	However, in case of influence question, you should write the nextQuestionId for each variant
	Thus, user will be redirected to the next question based on the answer

	@variants (required) - array of possible answers, their ids
	And nextQuestionId if the question is influence

	@nextQuestionId (optional) - id of the next question if question is basic

	@statement (optional) - statement for the question if you ask whether user agrees with..

	@message (optional) - message for the user after the question. 

	@template (optional) - you may use template in your question's title
	Template currently supports two cases:
	1. You may use the title of the answer that user selected in the previous question
	2. You may insert custom text in case user selected a specific answer in the previous question
	For this, you should add {0}, {1}, {2}... to the title string of the question
	Then, to the template array, you should add the id of the previous question in case for first goal.
	It will show the title of the answer that user selected in the question's ID you added
	And in case for 2nd goal, you should add next string: "question's ID | answer's ID | your custom text"
	Then, it will show your custom text in case user selected the answer's ID in the question's ID you added
	You can find examples in the configQuestionnaire below
	*/
const configQuestionnaire: IQuestion[] = [
	{
		id: "bbd29db9-04d1-4a0b-8bcd-9c4c4020fb3d",
		title: "Select your gender:",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{ id: "54edc5ee-ad95-4445-8153-68afb07a975f", title: "Female" },
			{ id: "5c1a7f42-35e3-457c-964d-abb32d9a21ac", title: "Male" },
		],
		nextQuestionId: "137f7884-af5b-4591-a4e1-7b8b028818ab",
	},
	{
		id: "137f7884-af5b-4591-a4e1-7b8b028818ab",
		title: "So we can get to know you better, tell us about your relationship status.",
		type: QuestionType.INFLUENCE_QUESTION,
		variants: [
			{
				id: "79c83743-914f-481b-a8e4-d9aa21e34c0d",
				title: "Single",
				nextQuestionId: "dedffcc9-8d80-48b0-8327-5dc6d3d8208d",
			},
			{
				id: "db906244-1c3a-458a-b66c-248b0bcf5f6b",
				title: "In a relationship",
				nextQuestionId: "255e72c4-0cdf-49d2-a0af-ec86182348fd",
			},
		],
	},
	{
		id: "dedffcc9-8d80-48b0-8327-5dc6d3d8208d",
		title: "Are you a single parent?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{ id: "c7b20b29-2cbc-430e-b22f-b16dc3c4a04b", title: "Yes" },
			{ id: "77e77b44-8bf8-45e7-9008-0866e4f97681", title: "No" },
		],

		nextQuestionId: "ad086cdf-47bb-4728-a7a4-1fc0ab15782e",
	},
	{
		id: "ad086cdf-47bb-4728-a7a4-1fc0ab15782e",
		title: "Single {0} {1} need a slightly different approach to improve their relationship. Which statement best describes you?",
		template: [
			"bbd29db9-04d1-4a0b-8bcd-9c4c4020fb3d",
			"dedffcc9-8d80-48b0-8327-5dc6d3d8208d | c7b20b29-2cbc-430e-b22f-b16dc3c4a04b | who have children",
		],
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "5ef840c6-029c-42d9-b311-b28534d6688d",
				title: "I’m very unhappy with how things are going in my relationship",
			},
			{
				id: "9d9a9db7-cc83-4cd0-8566-01a2b60322a7",
				title: "I’m unhappy with parts of my relationship, but some things are working well",
			},
			{
				id: "8ece843f-125e-4cde-89b7-d3faeb44c763",
				title: "I’m generally happy in my relationship",
			},
		],

		nextQuestionId: "f431135b-4f85-4402-8b30-1027ffa516fc",
	},
	{
		id: "f431135b-4f85-4402-8b30-1027ffa516fc",
		title: "Do you tend to overthink?",
		message: {
			title: "So how does it work?",
			description:
				"We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
		},
		type: QuestionType.INFLUENCE_QUESTION,
		variants: [
			{
				id: "25c04c60-e8dc-4b0a-a10f-983821688c7f",
				title: "Yes",
				nextQuestionId: "88e25920-0758-493d-9e89-7fd4a45cd78e",
			},
			{
				id: "56ea9ae5-1522-4743-9d54-9099d4204c92",
				title: "No",
				nextQuestionId: "2458f794-e72b-4fc6-b0a7-ec2a09101f83",
			},
		],
	},
	{
		id: "88e25920-0758-493d-9e89-7fd4a45cd78e",
		title: "What is most important to you?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "ae79c5de-9063-461f-9c9d-20e2ca1bec7b",
				title: "Success",
			},
			{
				id: "c2999b91-71af-4fcc-9b06-45fb44fb0a34",
				title: "Romance",
			},
			{
				id: "90f28f3e-0e46-4fff-8905-3afd8efb6570",
				title: "Stability",
			},
			{
				id: "0c31d67b-070c-42e8-bcb3-b874af509619",
				title: "Freedom",
			},
		],
		nextQuestionId: "c7d86f7c-06bd-4dae-88c8-ed840b99caab",
	},
	{
		id: "2458f794-e72b-4fc6-b0a7-ec2a09101f83",
		title: "Is emotional control tricky for you?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "73f31029-1eed-41e2-951f-a8592c18c027",
				title: "Yes",
			},
			{
				id: "fbb26659-cf9f-4639-8e06-7b71ecccb4a0",
				title: "Sometimes",
			},
			{
				id: "2a9365bf-8b65-4a42-96b0-d9c254257cf4",
				title: "Rarely",
			},
			{
				id: "8a70aaf8-0a94-4307-8d80-c72cdfedcf76",
				title: "Not at all",
			},
		],
		nextQuestionId: "c7d86f7c-06bd-4dae-88c8-ed840b99caab",
	},
	{
		id: "255e72c4-0cdf-49d2-a0af-ec86182348fd",
		title: "Are you a parent?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{ id: "ffe1a4f6-2c8a-42ef-9a3a-b12cbd29dc8a", title: "Yes" },
			{ id: "7c067112-9e4b-4e2c-8b72-b49a65899c8e", title: "No" },
		],

		nextQuestionId: "a6d5f734-7497-4ec7-baea-f0ec0a56db26",
	},
	{
		id: "a6d5f734-7497-4ec7-baea-f0ec0a56db26",
		title: "{0} {1} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?",
		template: [
			"bbd29db9-04d1-4a0b-8bcd-9c4c4020fb3d",
			"255e72c4-0cdf-49d2-a0af-ec86182348fd | ffe1a4f6-2c8a-42ef-9a3a-b12cbd29dc8a | who have children",
		],
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "509485ef-a470-49e4-bb7d-0e0924b048e1",
				title: "I was unhappy with low things were going in my relationship",
			},
			{
				id: "bbdfc600-e1be-407c-8226-31411fe49d4a",
				title: "I was unhappy with parts of my relationship, but some thing were working",
			},
			{
				id: "27efc967-966a-4842-97bd-08dc14ae3353",
				title: "I was generally happy with my relationship",
			},
			{
				id: "cdc94353-9e78-4ac0-9420-bb00a1af5f4a",
				title: "I’ve never been in a relationship",
			},
		],

		nextQuestionId: "e59c6766-96c3-4361-b5ca-58044ba251fb",
	},
	{
		id: "e59c6766-96c3-4361-b5ca-58044ba251fb",
		title: "Is your partner an introvert or extrovert?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "1060319c-2390-42dd-9711-a1401d22bd6b",
				title: "Introvert",
			},
			{
				id: "9cfda40e-6db5-490c-abb6-59ef3fe79294",
				title: "Extrovert",
			},
			{
				id: "0d357960-5da5-48d5-a65e-3828a22a9711",
				title: "A bit of both",
			},
		],

		nextQuestionId: "72504a89-3fb6-4b43-ada3-127c74b98e9e",
	},
	{
		id: "72504a89-3fb6-4b43-ada3-127c74b98e9e",
		title: "What is your partner’s gender?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "2566372a-32db-4592-a566-64e5861654e4",
				title: "Male",
			},
			{
				id: "ce6a20f7-8235-43ae-9e00-7300a8e06e28",
				title: "Female",
			},
		],

		nextQuestionId: "95fe6c03-bc2e-476b-8cb7-1465e233cb2e",
	},
	{
		id: "95fe6c03-bc2e-476b-8cb7-1465e233cb2e",
		title: "Do you agree with the statement below?",
		statement: "“My partner and I make sex a priority in our relationship”",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "063e42b0-fe5b-4bfc-b6f3-1a433a193f8d",
				title: "Strongly agree",
			},
			{
				id: "815ef99e-634a-4433-a581-65d258c91887",
				title: "Agree",
			},
			{
				id: "5d653446-4ec8-48e0-be00-e4e0f7b66466",
				title: "Neutral",
			},
			{
				id: "5a40c227-19cd-4abb-863e-de34167ae550",
				title: "Disagee",
			},
			{
				id: "72853303-2eb5-43ce-ad47-85a2cf1fd577",
				title: "Strongly disagree",
			},
		],

		nextQuestionId: "bc54a0f2-7e48-40b2-9e50-8c203641e440",
	},
	{
		id: "bc54a0f2-7e48-40b2-9e50-8c203641e440",
		title: "When you think about your relationship goals, you feel...?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "d33e4580-7004-4eff-a6be-8b55c93966f2",
				title: "Optimistic! They are totally doable, with some guidance.",
			},
			{
				id: "81c5dd6b-0529-4d42-ae48-107f35cc1e5a",
				title: "Cautious. I’ve struggled before, but I’m hopeful.",
			},
			{
				id: "65ed12bf-4a51-4140-8e1d-b630001f55a8",
				title: "I’m feeling a little anxious, honestly.",
			},
		],
		nextQuestionId: "c7d86f7c-06bd-4dae-88c8-ed840b99caab",
	},
	{
		id: "c7d86f7c-06bd-4dae-88c8-ed840b99caab",
		title: "Where did you hear about us?",
		type: QuestionType.BASIC_QUESTION,
		variants: [
			{
				id: "89406d93-743a-42a8-8546-05b7fcc940b0",
				title: "Poster or Billboard",
			},
			{
				id: "c3695ea0-0e57-4744-8948-b7ba63c6ce6a",
				title: "Friend or Family",
			},
			{
				id: "6cbb89ac-12eb-4496-9f65-821798f0e230",
				title: "Instagram",
			},
			{
				id: "5514f019-d312-421c-9e3e-12cd0340ee98",
				title: "Direct Mail or Package Insert",
			},
			{
				id: "5da329b4-de77-4bd7-9a5a-e4a51c95e74b",
				title: "Online TV or Streaming TV",
			},
			{
				id: "992edcb6-5fff-4381-aa00-33dfc4f75317",
				title: "TV",
			},
			{
				id: "ad5d587b-9efd-49a7-993c-6140700dcfc1",
				title: "Radio",
			},
			{
				id: "2bc2c08f-ac85-4265-afb1-71efd3ca19b9",
				title: "Search Engine (Google, Bing, etc.)",
			},
			{
				id: "5056f23d-dfe1-41b8-bbe1-0831b55e2a79",
				title: "Newspaper or Magazine",
			},
			{
				id: "2bbd0366-577b-4da1-8ec0-477459f122cc",
				title: "Facebook",
			},
			{
				id: "75f18159-11e9-41ef-8098-aad6889c4aa6",
				title: "Blog Post or Website Review",
			},
			{
				id: "55f77937-7e1b-4ea8-a7fe-979565a869b5",
				title: "Podcast",
			},
			{
				id: "27bdbf92-f8dd-456d-b5e2-8d1c7acee2cc",
				title: "Influencer",
			},
			{
				id: "fc8c9ff9-82e7-4f81-98f8-221b5950a04f",
				title: "Youtube",
			},
			{
				id: "0560e990-8ca9-4647-bf09-dbfd770ab2ec",
				title: "Pinterest",
			},
			{
				id: "c3a90a5d-df99-492c-a0a9-efead81aa2c9",
				title: "Other",
			},
		],
	},
];

// Host it on Vercel
// Write good README.md

export default configQuestionnaire;
