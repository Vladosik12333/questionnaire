import { IAnswer } from "@/redux/answers/reducer";
import configQuestionnaire, { IQuestion } from "@/config-questionnaire";

const messageUserResults = (answers: IAnswer[], currentQuestion: IQuestion, answerId: string) => {
	let answersWithLast = [...answers];

	if (answersWithLast[answersWithLast.length - 1].questionId !== currentQuestion.id)
		answersWithLast = [...answers, { questionId: currentQuestion.id, answerId }];

	let responses = "";

	answersWithLast.forEach((answer, idx) => {
		const questionNumber = idx + 1;

		const question = configQuestionnaire.find(question => question.id === answer.questionId);

		if (!question) {
			responses += `${questionNumber}. Error: question not found\n`;
			return;
		}

		const variant = question.variants.find(variant => variant.id === answer.answerId);

		if (!variant) {
			responses += `${questionNumber}. Error: variant not found\n`;
			return;
		}

		responses += `${questionNumber}. ${variant.title}\n`;
	});

	alert("Thank you for taking the survey! Here are your responses:\n" + responses);
};

export default messageUserResults;
