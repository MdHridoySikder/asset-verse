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
    <div className="bg-white shadow-lg rounded-xl p-6 border border-b-indigo-700 m-5">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Available Employees
      </h2>

      <div className="flex items-center mb-4">
        <input
          type="search"
          placeholder="Search Employee..."
          className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Admin Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Add to Team
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {availableUsers.map((user, index) => (
              <tr
                key={user._id || index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full border border-gray-300"
                  />
                  <span className="font-medium text-gray-800">
                    {user.displayName}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.role === "admin"
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                    >
                      <FiShieldOff className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
                    >
                      <FaUserShield className="h-4 w-4" />
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to="/dashboard/my-team"
                    onClick={() => onAddToTeam(user)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-2 hover:bg-blue-600 transition"
                  >
                    <FaPlus className="h-4 w-4" /> Add
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {availableUsers.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            No available employees to add.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyEmployeeList;
