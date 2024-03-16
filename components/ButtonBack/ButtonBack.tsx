"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

interface IButtonBack {
	children: JSX.Element;
}

const ButtonBack: React.FC<IButtonBack> = ({ children }) => {
	const router = useRouter();

	const handleButtonClick = () => router.back();

	return (
		<button className={styles.link} onClick={handleButtonClick}>
			{children}
		</button>
	);
};

export default ButtonBack;
