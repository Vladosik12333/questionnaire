import MessageSection from "./MessageSection/MessageSection";
import Header from "../shared/Header/Header";
import styles from "./styles.module.scss";
import configQuestionnaire from "@/config-questionnaire";

interface IMessagePage {
	questionId: string;
	answerId: string;
}

const MessagePage: React.FC<IMessagePage> = ({ questionId, answerId }) => {
	const currentQuestion = configQuestionnaire.find(question => question.id === questionId);

	return (
		<main className={styles.main}>
			<Header secondary={true} />
			{currentQuestion ? (
				<MessageSection currentQuestion={currentQuestion} answerId={answerId} />
			) : (
				<h1>Some error happened...</h1>
			)}
		</main>
	);
};

export default MessagePage;
