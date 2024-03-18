import styles from "./styles.module.scss";

interface IErrorMessage {
	message: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
	return (
		<div className={styles.errorBox}>
			<h1 className={styles.title}>Ooops.. some error happened. Details:</h1>
			<p>{message}</p>
		</div>
	);
};

export default ErrorMessage;
