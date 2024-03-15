import ReduxProvider from "@/redux/store-provider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globalStyles.scss";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Questionnare",
	description: "Created by Vladyslav Babiak",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={openSans.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
