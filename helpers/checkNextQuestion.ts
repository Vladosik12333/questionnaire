import configQuestionnaire, { IQuestion, QuestionType } from "@/config-questionnaire";

const checkNextQuestion = (currentQuestion: IQuestion, answerId: string) => {
	const isBasicQuestion = currentQuestion.type === QuestionType.BASIC_QUESTION;
	let nextQuestion = null;

	if (isBasicQuestion) {
		nextQuestion = configQuestionnaire.find(
			question => question.id === currentQuestion.nextQuestionId,
		);
	} else {
		const answer = currentQuestion.variants.find(variant => variant.id === answerId);

		nextQuestion = configQuestionnaire.find(question => question.id === answer?.nextQuestionId);
	}

	return nextQuestion ? nextQuestion : null;
};

export default checkNextQuestion;
