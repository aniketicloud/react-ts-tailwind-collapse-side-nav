import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export const Dashboard = () => {
  return (
    <>
      <div className="p-3">
        <Card>
          <Link to="courses">
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
      </div>
    </>
  );
};
