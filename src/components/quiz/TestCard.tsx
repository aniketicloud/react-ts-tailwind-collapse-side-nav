import { FC } from "react";
import { Card } from "../Card";
import { Link } from "react-router-dom";
import { ArrowRight } from "../icons/ArrowRight";

interface TestCardProps {
  id: string;
  title: string;
  description: string;
}

export const TestCard: FC<TestCardProps> = ({ id, title, description }) => {
  return (
    <>
      <Card>
        <Link to={`${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </Link>
        <p className="font-normal text-gray-700 mb-2">{description}</p>

        <Link
          to={`${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Take the Test
          <ArrowRight />
        </Link>
      </Card>
    </>
  );
};
