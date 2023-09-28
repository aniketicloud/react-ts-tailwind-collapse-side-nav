import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { ArrowRight } from "../components/icons/ArrowRight";

export const Dashboard = () => {
  return (
    <>
      <div className="p-3 flex space-x-5">
        <Card>
          <Link to="courses/1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              First card of the dashboard
            </h5>
            <p className="font-normal text-gray-700">
              Here is the first card describing the nature of the card. This
              card is made with love. This card is cared just like a blond girl
              cares for her hair.
            </p>
          </Link>
        </Card>
        <Card>
          <Link to="course/2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              card with button
            </h5>
          </Link>
          <p className="font-normal text-gray-700 mb-2">
            Here is the button that redirects to another world. Just don't do
            the reverse psychology. Because, this text is will not take you
            anywhere.
          </p>

          <Link
            to="courses/2"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
            <ArrowRight />
          </Link>
        </Card>
      </div>
    </>
  );
};
