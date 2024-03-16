import List from "../List/List";
import styles from "./styles.module.scss";
import configQuestionnaire, { IQuestion } from "@/config-questionnaire";

interface IQuestionSection {
	currentQuestion: IQuestion | null;
}

const QuestionSection: React.FC<IQuestionSection> = ({ currentQuestion }) => {
	return (
		currentQuestion && (
			<section className={styles.section}>
				<div className={styles.contentBox}>
					<h1 className={styles.question}>{currentQuestion?.title}</h1>
					<List currentQuestion={currentQuestion} />
				</div>
			</section>
		)
	);
};

export default QuestionSection;
