// import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { QuizHeader } from "../components/quiz/QuizHeader";

export const TestPage = () => {
  const [searchParam] = useSearchParams();
  const title = searchParam.get("title") || "";
  return (
    <>
      <QuizHeader title={title} />
    </>
  );
};
