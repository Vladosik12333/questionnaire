import Header from "@/components/Header/Header";
import QuestionSection from "@/components/QuestionSection/QuestionSection";
import configQuestionnaire, { IQuestion } from "@/config-questionnaire";
import styles from "./styles.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
	return configQuestionnaire.map(question => question.id);
}

interface IQuestionPage {
	params: { id: string };
}

const QuestionPage: React.FC<IQuestionPage> = ({ params }) => {
	const currentQuestion = configQuestionnaire.find(question => question.id === params.id);

	return (
		<main className={styles.main}>
			<Header prevQuestionId={currentQuestion?.previousQuestionId} />
			<QuestionSection currentQuestion={currentQuestion ?? null} />
		</main>
	);
};

export default QuestionPage;
