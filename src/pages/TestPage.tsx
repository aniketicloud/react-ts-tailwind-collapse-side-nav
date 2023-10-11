import { useParams } from "react-router-dom";
import { ReducerTrial } from "../components/quiz/ReducerTrial";
// import { DateCounter } from "../components/quiz/DateCounter";

export const TestPage = () => {
  const { testId } = useParams();
  return (
    <>
      <h1>Single test page with test id: {testId}</h1>
      {/* <DateCounter /> */}
      <ReducerTrial />
    </>
  );
};
