import { FC } from "react";
import { Quiz } from "../icons/Quiz";
import { CheckCircle } from "../icons/CheckCircle";

interface QuizHeaderProps {
  title?: string;
}

export const QuizHeader: FC<QuizHeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center justify-center gap-x-3">
      <Quiz />
      <h1 className="text-lg">{title || "Quiz"}</h1>
      <CheckCircle />
    </header>
  );
};
