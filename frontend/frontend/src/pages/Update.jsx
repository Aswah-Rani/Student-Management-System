import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Get Single Student
  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/students/${id}`
      );

      setFormData({
        name: response.data.student.name,
        email: response.data.student.email,
        age: response.data.student.age,
        city: response.data.student.city,
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  // Update Student
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5000/api/students/${id}`,
        formData
      );

      alert(response.data.message);
      navigate("/student");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 flex items-center justify-center px-4 py-8">

    <div className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8">

      <div className="text-center mb-8">

        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
          ✏️
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
          Update Student
        </h1>

        <p className="text-gray-500 mt-2">
          Update student information below.
        </p>

      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Age
          </label>

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>

        {/* City */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">

          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg cursor-pointer"
          >
            💾 Update Student
          </button>

          <button
            type="button"
            onClick={() => navigate("/student")}
            className="flex-1 bg-gray-500 hover:bg-gray-600 hover:scale-[1.02] active:scale-95 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg cursor-pointer"
          >
            ❌ Cancel
          </button>

        </div>

      </form>

    </div>

  </div>
);
}

export default UpdateStudent;