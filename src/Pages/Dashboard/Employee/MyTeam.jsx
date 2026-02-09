import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import MyEmployeeList from "../Hr/MyEmployeeList";

const MyTeam = () => {
  const axiosSecure = UseAxiosSecure();
  const [team, setTeam] = useState([]);

  // Load team from backend
  const fetchTeam = async () => {
    try {
      const res = await axiosSecure.get("/team");
      setTeam(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  // Add to team
  const handleAddToTeam = async (user) => {
    if (team.find((member) => member._id === user._id)) {
      Swal.fire({
        icon: "info",
        title: "Already in team",
        text: `${user.displayName} is already in the team`,
        timer: 2000,
        showConfirmButton: false,
      });
      return false;
    }

    if (team.length >= 6) {
      Swal.fire({
        icon: "warning",
        title: "Team limit reached",
        text: "Payment required before adding more",
      });
      return false;
    }

    const result = await Swal.fire({
      title: `Add ${user.displayName} to your team?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Add",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.post("/team", { userId: user._id });
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: `${user.displayName} added to your team`,
          timer: 2000,
          showConfirmButton: false,
        });
        fetchTeam();
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: err.response?.data?.message || "Failed to add to team",
        });
      }
    }
  };

  // Remove from team (admin protected)
  const handleRemoveFromTeam = async (userId, userName, role) => {
    if (role === "admin") {
      Swal.fire({
        icon: "error",
        title: "Action Denied",
        text: `${userName} is an admin and cannot be removed`,
      });
      return;
    }

    const result = await Swal.fire({
      title: `Remove ${userName} from your team?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Remove",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/team/${userId}`);
        Swal.fire({
          icon: "success",
          title: "Removed!",
          text: `${userName} removed from your team`,
          timer: 2000,
          showConfirmButton: false,
        });
        fetchTeam();
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: err.response?.data?.message || "Failed to remove",
        });
      }
    }
  };

  return (
    <div className="p-6 w-full">
      {/* Employee List */}
      <MyEmployeeList onAddToTeam={handleAddToTeam} teamMembers={team} />

      {/* Team Members */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {team.map((user) => {
          const isAdmin = user.role === "admin";

          return (
            <div
              key={user._id}
              className={`relative flex flex-wrap items-center p-6 rounded-2xl shadow-lg transition
              ${
                isAdmin
                  ? "lg:col-span-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white"
                  : "bg-white border hover:shadow-2xl"
              }`}
            >
              {/* admin */}
              {isAdmin && (
                <span className="absolute -top-3 -right-3 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-md">
                  👑 ADMIN
                </span>
              )}

              {/* Avatar */}
              <img
                src={user.photoURL}
                alt={user.displayName}
                className={`w-20 h-20 rounded-full border-4 ${
                  isAdmin ? "border-yellow-300" : "border-blue-500"
                }`}
              />

              {/* Info */}
              <div className="ml-6 flex-1 min-w-[200px]">
                <h3 className="text-xl font-bold">{user.displayName}</h3>
                <p
                  className={`text-sm font-semibold uppercase tracking-widest ${
                    isAdmin ? "text-yellow-200" : "text-gray-500"
                  }`}
                >
                  {user.role}
                </p>

                {isAdmin && (
                  <p className="mt-2 text-sm text-white/80">
                    Full access • Asset control • Team owner
                  </p>
                )}
              </div>

              {/* Action */}
              <button
                onClick={() =>
                  handleRemoveFromTeam(user._id, user.displayName, user.role)
                }
                disabled={isAdmin}
                className={`mt-4 md:mt-0 px-5 py-2 rounded-lg text-sm font-semibold transition shrink-0
                ${
                  isAdmin
                    ? "bg-black/30 text-white cursor-not-allowed"
                    : "bg-red-600 text-white hover:bg-red-700 shadow-md"
                }`}
              >
                {isAdmin ? "Protected" : "Remove"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Team Limit */}
      {team.length >= 6 && (
        <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded-xl flex items-center justify-between shadow-md">
          <span className="text-red-800 font-medium">
            Team limit reached! Payment required before adding more.
          </span>
          <Link
            to="/dashboard/upgrade-package"
            className="bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            Upgrade
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyTeam;
