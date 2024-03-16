import Header from "@/components/Header/Header";
import MessageSection from "@/components/MessageSection/MessageSection";
import styles from "./styles.module.scss";
import configQuestionnaire from "@/config-questionnaire";

interface IQuestionPage {
	params: { id: string };
	searchParams: { answerId: string };
}

const QuestionPage: React.FC<IQuestionPage> = ({ params, searchParams }) => {
	const currentQuestion = configQuestionnaire.find(question => question.id === params.id);

	return (
		<main className={styles.main}>
			<Header secondary={true} prevQuestionId={currentQuestion?.previousQuestionId} />
			<MessageSection currentQuestion={currentQuestion} answerId={searchParams.answerId} />
		</main>
	);
};

export default QuestionPage;
