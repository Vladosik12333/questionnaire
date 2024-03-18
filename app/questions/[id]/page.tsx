import QuestionPage from "@/components/QuestionPage/QuestionPage";
import configQuestionnaire from "@/config-questionnaire";

export function generateStaticParams() {
	return configQuestionnaire.map(question => question.id);
}

interface IQuestionPage {
	params: { id: string };
}

const Page: React.FC<IQuestionPage> = ({ params }) => {
	return <QuestionPage questionId={params.id} />;
};

export default Page;
