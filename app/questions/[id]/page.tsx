"use client";

import Button from "@/components/Button/Button";
import Header from "@/components/Header";
import { currentQuestionSelector } from "@/redux/selectors";
import { useAppSelector } from "@/redux/store";

const QuestionPage = () => {
	const currentQuestion = useAppSelector(currentQuestionSelector);

	const handleClickButton = () => {};

	return (
		<main className="h-screen w-screen">
			<Header />
			<section className="bg-primary h-screen flex flex-col items-center">
				<h1 className="text-xl font-bold">{currentQuestion.title}</h1>
				<ul className="space-y-5 mt-8">
					{currentQuestion.variants.map(({ id, title }) => (
						<li key={id}>
							<Button handleClick={handleClickButton}>{title}</Button>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default QuestionPage;
