import configQuestionnaire from "@/config-questionnaire";
import { redirect } from "next/navigation";

const HomePage = () => {
	const firstQuestionId = configQuestionnaire[0].id;

	redirect(`/questions/${firstQuestionId}`);
};

export default HomePage;
