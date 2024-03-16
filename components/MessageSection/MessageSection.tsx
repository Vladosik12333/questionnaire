import Link from "next/link";
import styles from "./styles.module.scss";
import { IQuestion } from "@/config-questionnaire";
import checkNextQuestion from "@/helpers/checkNextQuestion";

interface IMessageSection {
	currentQuestion: IQuestion | undefined;
	answerId: string;
}

const MessageSection: React.FC<IMessageSection> = ({ currentQuestion, answerId }) => {
	const nextQuestion = currentQuestion && checkNextQuestion(currentQuestion, answerId);

	const link = nextQuestion ? `/questions/${nextQuestion.id}` : "www.linkedin.com/in/vladpp/";

	return (
		<section className={styles.section}>
			<div className={styles.contentBox}>
				<h1 className={styles.title}>{currentQuestion?.message?.title}</h1>
				<p className={styles.description}>{currentQuestion?.message?.description}</p>
				<Link href={link}>
					<div className={styles.link}>
						<p>{nextQuestion ? "Next" : "I wanna make connection with developer!"}</p>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default MessageSection;
