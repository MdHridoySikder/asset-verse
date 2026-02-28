import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaUserShield, FaPlus } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router";

const MyEmployeeList = ({ onAddToTeam, teamMembers = [] }) => {
  const axiosSecure = UseAxiosSecure();
  const [searchText, setSearchText] = useState("");

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/${user._id}/role`, { role: "admin" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            title: `${user.displayName} marked as Admin`,
            showConfirmButton: false,
            icon: "success",
            timer: 2000,
          });
        }
      });
  };

  const handleRemoveAdmin = (user) => {
    axiosSecure
      .patch(`/users/${user._id}/role`, { role: "employee" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            title: `${user.displayName} removed from Admin`,
            showConfirmButton: false,
            icon: "success",
            timer: 2000,
          });
        }
      });
  };

  const availableUsers = users.filter(
    (user) => !teamMembers.some((member) => member._id === user._id),
  );

  return (
    <div className="shadow-lg rounded-xl p-4 sm:p-6 md:p-8 border border-b-indigo-700 m-3 sm:m-5">
      <ToastContainer />
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-primary heading-db">
        Available Employees
      </h2>

      {/* Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-2 sm:gap-4">
        <input
          type="search"
          placeholder="Search Employee..."
          className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto transition duration-200"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
          <thead className="bg-blue-100 text-blue-800 uppercase text-xs sm:text-sm tracking-wider">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left font-medium">#</th>
              <th className="px-4 sm:px-6 py-3 text-left">User</th>
              <th className="px-4 sm:px-6 py-3 text-left">Email</th>
              <th className="px-4 sm:px-6 py-3 text-left">Role</th>
              <th className="px-4 sm:px-6 py-3 text-left">Admin Action</th>
              <th className="px-4 sm:px-6 py-3 text-left">Add to Team</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {availableUsers.map((user, index) => (
              <tr
                key={user._id || index}
                className="hover:bg-blue-50 transition-colors duration-300"
              >
                <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="px-4 sm:px-6 py-3 flex items-center gap-3">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 object-cover"
                  />
                  <span className="font-medium text-secondary">
                    {user.displayName}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-3 text-secondary">
                  {user.email}
                </td>
                <td className="px-4 sm:px-6 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                      user.role === "admin"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 sm:px-6 py-3 flex gap-2">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="bg-red-500 text-white p-2 sm:p-2.5 rounded-full hover:bg-red-600 hover:scale-110 transform transition-all duration-300"
                    >
                      <FiShieldOff className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="bg-green-500 text-white p-2 sm:p-2.5 rounded-full hover:bg-green-600 hover:scale-110 transform transition-all duration-300"
                    >
                      <FaUserShield className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  )}
                </td>
                <td className="px-4 sm:px-6 py-3">
                  <Link
                    to="/dashboard/my-team"
                    onClick={() => onAddToTeam(user)}
                    className="bg-blue-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 hover:bg-blue-600 hover:scale-105 transform transition-all duration-300"
                  >
                    <FaPlus className="h-3 w-3 sm:h-4 sm:w-4" /> Add
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {availableUsers.length === 0 && (
          <p className="text-gray-500 text-center py-4 text-sm sm:text-base">
            No available employees to add.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyEmployeeList;
