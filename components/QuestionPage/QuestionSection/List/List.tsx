"use client";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import styles from "./styles.module.scss";
import configQuestionnaire, { IQuestion } from "@/config-questionnaire";
import { addAnswer } from "@/redux/answers/actions";
import { useRouter } from "next/navigation";
import Button from "./Item/Item";
import checkNextQuestion from "@/helpers/checkNextQuestion";
import { answersSelector } from "@/redux/answers/selectors";
import messageUserResults from "@/helpers/messageUserResults";

interface IList {
	currentQuestion: IQuestion;
}

const List: React.FC<IList> = ({ currentQuestion }) => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const answers = useAppSelector(answersSelector);

	const handleClickButton = (answerId: string) => {
		if (answers.length === 0 && currentQuestion.id !== configQuestionnaire[0].id) {
			router.push(`/questions/${configQuestionnaire[0].id}`);
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
