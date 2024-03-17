import styles from "./styles.module.scss";
import Item from "./Item/Item";
import { IQuestion } from "@/config-questionnaire";

interface IList {
	currentQuestion: IQuestion;
	handleClickButton: (answerId: string) => void;
}

const List: React.FC<IList> = ({ currentQuestion, handleClickButton }) => {
	return (
		<ul className={styles.answersList}>
			{currentQuestion.variants.map(({ id, title }) => (
				<Item key={id} id={id} handleClick={handleClickButton}>
					{title}
				</Item>
			))}
		</ul>
	);
};

export default List;
