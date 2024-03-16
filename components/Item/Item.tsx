import cn from "classnames";
import styles from "./styles.module.scss";

interface IItem {
	handleClick: (id: string) => void;
	id: string;
	children: string;
}

const Item: React.FC<IItem> = ({ handleClick, id, children }) => {
	return (
		<li>
			<button className={cn(styles.button, "bg-secondary1")} onClick={() => handleClick(id)}>
				{children}
			</button>
		</li>
	);
};

export default Item;
