import configQuestionnaire from "@/config-questionnaire";
import Header from "../shared/Header/Header";

import styles from "./styles.module.scss";
import QuestionSection from "./QuestionSection/QuestionSection";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";

interface IQuestionPage {
	questionId: string;
}

const QuestionPage: React.FC<IQuestionPage> = ({ questionId }) => {
	const currentQuestion = configQuestionnaire.find(question => question.id === questionId);

	return (
		<main className={styles.main}>
			<Header />
			{currentQuestion ? (
				<QuestionSection currentQuestion={currentQuestion} />
			) : (
				<ErrorMessage message="It seems that you are trying to get an access to the question which does not exist" />
			)}
		</main>
	);
};

export default QuestionPage;
