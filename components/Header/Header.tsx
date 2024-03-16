import Image from "next/image";
import logoIcon from "@/public/logo.svg";
import leftArrow from "@/public/left-arrow.svg";
import styles from "./styles.module.scss";
import cn from "classnames";
import ButtonBack from "../ButtonBack/ButtonBack";

interface IHeader {
	secondary?: boolean;
	prevQuestionId: string | undefined;
}

const Header: React.FC<IHeader> = ({ secondary, prevQuestionId }) => {
	const iconSecondaryStyles = secondary ? styles.iconWhite : "";

	return (
		<header className={styles.header}>
			<div className={prevQuestionId ? styles.box : cn(styles.box, styles.boxOnlyLogo)}>
				{prevQuestionId && (
					<ButtonBack>
						<Image
							className={iconSecondaryStyles}
							src={leftArrow}
							width={24}
							height={24}
							alt="logo"
						/>
					</ButtonBack>
				)}
				<Image
					className={iconSecondaryStyles}
					src={logoIcon}
					width={24}
					height={24}
					alt="logo"
				/>
			</div>
		</header>
	);
};

export default Header;
