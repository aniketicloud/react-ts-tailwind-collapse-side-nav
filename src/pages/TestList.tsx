import { TestCard } from "../components/quiz/TestCard";
import { react, vue } from "../data/tests.json";

export const TestList = () => {
  return (
    <>
      <div className="p-3 grid">
        <>
          <span className="bg-blue-100 text-blue-800 text-lg font-bold px-2.5 py-0.5 rounded mb-2 border-blue-400">
            React
          </span>
          <div className="flex space-x-5">
            {react.map(({ description, id, title }) => (
              <TestCard
                id={id}
                title={title}
                description={description}
                key={id}
              />
            ))}
          </div>
        </>
        <>
          <span className="bg-green-100 text-green-800 text-lg font-bold px-2.5 py-0.5 rounded my-4">
            Vue.js
          </span>
          <div className="flex space-x-5">
            {vue.map(({ description, id, title }) => (
              <TestCard
                id={id}
                title={title}
                description={description}
                key={id}
              />
            ))}
          </div>
        </>
      </div>
    </>
  );
};
