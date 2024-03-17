import configQuestionnaire, { IQuestion } from "@/config-questionnaire";
import { IAnswer } from "@/redux/answers/reducer";
import format from "string-template";

const formatTemplate = (title: string, currentQuestion: IQuestion, answers: IAnswer[]): string => {
	const toChange: string[] = [];

	if (!currentQuestion.template) return "";

	currentQuestion.template.forEach(variable => {
		if (variable.includes(" | ")) {
			const [questionId, answerId, text] = variable.split(" | ");

			const foundAnswer = answers.find(answer => answer.questionId === questionId);

			if (foundAnswer?.answerId === answerId) {
				toChange.push(text);
			} else {
				toChange.push("");
			}
		} else {
			const foundQuestion = configQuestionnaire.find(question => question.id === variable);

			const foundAnswer = answers.find(answer => answer.questionId === foundQuestion?.id);

			const answerToUse = foundQuestion?.variants.find(
				variant => variant.id === foundAnswer?.answerId,
			);

			toChange.push(answerToUse?.title ?? "");
		}
	});

	const newTitle = format(title, toChange);

	return newTitle;
};

export default formatTemplate;
