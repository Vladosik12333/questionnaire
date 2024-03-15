import Image from "next/image";
import logoIcon from "@/public/logo.svg";
import leftArrow from "@/public/left-arrow.svg";

const Header = () => {
	return (
		<header className="bg-primary py-4 ">
			<div className="flex justify-between w-2/4 pl-40 ml-4">
				<Image src={leftArrow} width={24} height={24} alt="left arrow button" />
				<Image src={logoIcon} width={24} height={24} alt="logo" />
			</div>
		</header>
	);
};

export default Header;
