"use client";

import { useAppSelector } from "@/redux/store";
import List from "./List/List";
import styles from "./styles.module.scss";
import { IQuestion } from "@/config-questionnaire";
import { useEffect, useState } from "react";
import { answersSelector } from "@/redux/answers/selectors";
import formatTemplate from "@/helpers/formatTemplate";

interface IQuestionSection {
	currentQuestion: IQuestion;
}

const QuestionSection: React.FC<IQuestionSection> = ({ currentQuestion }) => {
	const answers = useAppSelector(answersSelector);
	const [title, setTitle] = useState(currentQuestion.title);

	useEffect(() => {
		if (!currentQuestion.template) return;

		const newTitle = formatTemplate(title, currentQuestion, answers);

		setTitle(newTitle);
	}, [answers, currentQuestion, title]);

	return (
		<section className={styles.section}>
			<div className={styles.contentBox}>
				<h1 className={styles.question}>{title}</h1>
				{currentQuestion?.statement && (
					<p className={styles.statement}>{currentQuestion.statement}</p>
				)}
				<List currentQuestion={currentQuestion} />
			</div>
		</section>
	);
};

export default QuestionSection;
