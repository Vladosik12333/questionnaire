import MessageSection from "./MessageSection/MessageSection";
import Header from "../shared/Header/Header";
import styles from "./styles.module.scss";
import configQuestionnaire from "@/config-questionnaire";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";

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
				<ErrorMessage message="It seems that you are trying to get an access to the question which does not exist" />
			)}
		</main>
	);
};

export default MessagePage;
