import { Link } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";

export const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            AI Student Tools
          </Link>
          <div className="flex space-x-4">
            <Link to="/tools" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Tools
            </Link>
            <Link to="/reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              Reviews
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
