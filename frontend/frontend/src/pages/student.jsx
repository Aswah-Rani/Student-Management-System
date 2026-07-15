import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Student() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Get All Students
  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/students"
      );

      setStudents(response.data.student);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete Student
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/students/${id}`
      );

      alert(response.data.message);
      fetchStudents();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  // Logout
  const handleLogout = () => {
    navigate("/login");
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 px-4 sm:px-6 py-8">
    <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-5 sm:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">

        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">
            🎓 Student List
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all registered students.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Add Student Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => navigate("/add-student")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
        >
          + Add Student
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow border border-gray-200">

        <table className="min-w-full">

          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-5 py-4 text-left">Name</th>
              <th className="px-5 py-4 text-left">Email</th>
              <th className="px-5 py-4 text-left">Age</th>
              <th className="px-5 py-4 text-left">City</th>
              <th className="px-5 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {students.length > 0 ? (
              students.map((student) => (
                <tr
                  key={student._id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="px-5 py-4 font-medium text-gray-700">
                    {student.name}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {student.email}
                  </td>

                  <td className="px-5 py-4">
                    {student.age}
                  </td>

                  <td className="px-5 py-4">
                    {student.city}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex flex-wrap justify-center gap-2">

                      <button
                        onClick={() =>
                          navigate(`/update/${student._id}`)
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        ✏ Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(student._id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        🗑 Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-12 text-center text-gray-500 text-lg"
                >
                  📭 No Students Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  </div>
);
}

export default Student;