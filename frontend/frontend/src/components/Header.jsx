import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Side */}
        <h1 className="text-2xl font-bold text-blue-600">
          Student Registration
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg font-medium transition duration-300 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`
            }
          >
            Register
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg font-medium transition duration-300 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              }`
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}