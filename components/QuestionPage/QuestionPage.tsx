import configQuestionnaire from "@/config-questionnaire";
import Header from "../shared/Header/Header";

import styles from "./styles.module.scss";
import QuestionSection from "./QuestionSection/QuestionSection";

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
				<h1>Some error happened...</h1>
			)}
		</main>
	);
};

export default QuestionPage;
