"use client";

import { useAppDispatch } from "@/redux/store";
import styles from "./styles.module.scss";
import configQuestionnaire, { IQuestion, QuestionType } from "@/config-questionnaire";
import { addAnswer } from "@/redux/answers/actions";
import { useRouter } from "next/navigation";
import Button from "../Item/Item";
import checkNextQuestion from "@/helpers/checkNextQuestion";

interface IList {
	currentQuestion: IQuestion;
}

const List: React.FC<IList> = ({ currentQuestion }) => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleClickButton = (answerId: string) => {
		if (!currentQuestion) return;
		dispatch(addAnswer({ questionId: currentQuestion.id, answerId }));

		const nextQuestion = checkNextQuestion(currentQuestion, answerId);

		if (currentQuestion?.message) {
			router.push(`/questions/${currentQuestion.id}/message?answerId=${answerId}`);
			return;
		}

		if (nextQuestion) {
			router.push(`/questions/${currentQuestion.nextQuestionId}`);
		}
	};

	return (
		<ul className={styles.answersList}>
			{currentQuestion?.variants.map(({ id, title }) => (
				<Button key={id} id={id} handleClick={handleClickButton}>
					{title}
				</Button>
			))}
		</ul>
	);
};

export default List;
