"use client";

import Image from "next/image";
import logoIcon from "@/public/logo.svg";
import leftArrow from "@/public/left-arrow.svg";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { answersSelector } from "@/redux/answers/selectors";
import { useEffect, useState } from "react";
import { removeAnswer } from "@/redux/answers/actions";

interface IHeader {
	secondary?: boolean;
}

const Header: React.FC<IHeader> = ({ secondary }) => {
	const [canGoBack, setCanGoBack] = useState(false);

	const router = useRouter();
	const dispatch = useAppDispatch();
	const answers = useAppSelector(answersSelector);

	const handleButtonClick = () => {
		if (canGoBack) {
			router.back();
			dispatch(removeAnswer());
		}
	};

	useEffect(() => {
		answers.length > 0 ? setCanGoBack(true) : setCanGoBack(false);
	}, [answers]);

	const iconSecondaryStyles = secondary ? styles.iconWhite : "";

	return (
		<header className={styles.header}>
			<div className={canGoBack ? styles.box : cn(styles.box, styles.boxOnlyLogo)}>
				{canGoBack && (
					<button className={styles.link} onClick={handleButtonClick}>
						<Image
							className={iconSecondaryStyles}
							src={leftArrow}
							width={24}
							height={24}
							alt="logo"
						/>
					</button>
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
