"use client";

import { useAppSelector, useAppDispatch } from "@/redux/store";
import List from "./List/List";
import styles from "./styles.module.scss";
import configQuestionnaire, { IQuestion } from "@/config-questionnaire";
import { useEffect, useState } from "react";
import { answersSelector } from "@/redux/answers/selectors";
import formatTemplate from "@/helpers/formatTemplate";
import checkNextQuestion from "@/helpers/checkNextQuestion";
import messageUserResults from "@/helpers/messageUserResults";
import { addAnswer, clearAnswers } from "@/redux/answers/actions";
import { useRouter } from "next/navigation";

interface IQuestionSection {
	currentQuestion: IQuestion;
}

const QuestionSection: React.FC<IQuestionSection> = ({ currentQuestion }) => {
	const answers = useAppSelector(answersSelector);
	const [title, setTitle] = useState(currentQuestion.title);
	const dispatch = useAppDispatch();
	const router = useRouter();

	useEffect(() => {
		if (!currentQuestion.template) return;

		const newTitle = formatTemplate(title, currentQuestion, answers);

		setTitle(newTitle);
	}, [answers, currentQuestion, title]);

	const handleClickButton = (answerId: string) => {
		if (answers.length === 0 && currentQuestion.id !== configQuestionnaire[0].id) {
			router.push(`/questions/${configQuestionnaire[0].id}`);
			dispatch(clearAnswers());
			return;
		}

		dispatch(addAnswer({ questionId: currentQuestion.id, answerId }));

		const nextQuestion = checkNextQuestion(currentQuestion, answerId);

		if (currentQuestion?.message) {
			router.push(`/questions/${currentQuestion.id}/message?answerId=${answerId}`);
			return;
		}

		if (nextQuestion) {
			router.push(`/questions/${nextQuestion.id}`);
		} else {
			messageUserResults(answers, currentQuestion, answerId);
			dispatch(clearAnswers());
		}
	};

	return (
		<section className={styles.section}>
			<div className={styles.contentBox}>
				<h1 className={styles.question}>{title}</h1>
				{currentQuestion?.statement && (
					<p className={styles.statement}>{currentQuestion.statement}</p>
				)}
				<List currentQuestion={currentQuestion} handleClickButton={handleClickButton} />
			</div>
		</section>
	);
};

export default QuestionSection;
