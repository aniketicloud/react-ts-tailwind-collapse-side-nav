import { BarsFour } from "./icons/BarsFour";

export const HamburgerMenu = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center relative">
        <span
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <BarsFour />
        </span>
        <div className="absolute top-7 left-2 w-max h-max rounded-lg bg-blue-600">
          <ul className="flex flex-col font-medium ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded  hover:bg-gray-100"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
