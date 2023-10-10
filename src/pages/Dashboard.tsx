import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { ArrowRight } from "../components/icons/ArrowRight";

export const Dashboard = () => {
  return (
    <>
      <div className="p-3 flex space-x-5">
        <Card>
          <Link to="courses">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Courses
            </h5>
          </Link>
          <p className="font-normal text-gray-700 mb-2">
            Here is the button that redirects to another world. Learn new
            things. Be better than yesterday.
          </p>

          <Link
            to="courses"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Go to courses
            <ArrowRight />
          </Link>
        </Card>

        <Card>
          <Link to="tests">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Tests
            </h5>
          </Link>
          <p className="font-normal text-gray-700 mb-2">
            Try yourself against the the mighty questions. Don't fret. You can
            learn again and take the test again.
          </p>

          <Link
            to="tests"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Go to tests
            <ArrowRight />
          </Link>
        </Card>
      </div>
    </>
  );
};
