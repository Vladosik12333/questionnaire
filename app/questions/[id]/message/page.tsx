import MessagePage from "@/components/MessagePage/MessagePage";

interface IPage {
	params: { id: string };
	searchParams: { answerId: string };
}

const Page: React.FC<IPage> = ({ params, searchParams }) => {
	return <MessagePage questionId={params.id} answerId={searchParams.answerId} />;
};

export default Page;
