import "./styles.scss";

interface IButton {
	handleClick: () => void;
	children: string;
}

const Button: React.FC<IButton> = ({ handleClick, children }) => {
	return (
		<button className="button bg-secondary1" onClick={handleClick}>
			{children}
		</button>
	);
};

export default Button;
