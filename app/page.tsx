"use client";

import { currentQuestionSelector } from "@/redux/selectors";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
	const router = useRouter();
	const currentQuestion = useAppSelector(currentQuestionSelector);

	useEffect(() => {
		router.push(`/questions/${currentQuestion.id}`);
	}, [currentQuestion, router]);

	return (
		<section>
			<h1>We are getting back to your question...</h1>
		</section>
	);
};

export default HomePage;
