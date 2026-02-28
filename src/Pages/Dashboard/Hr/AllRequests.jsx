import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AllRequests = () => {
  const axiosSecure = UseAxiosSecure();
  const [loadingId, setLoadingId] = useState(null);

  const { data: requests = [], refetch } = useQuery({
    queryKey: ["requests", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requests?requestStatus=pending");
      return res.data || [];
    },
  });

  const getStatusColor = (status) => {
    if (status === "approved") return "badge-success";
    if (status === "rejected") return "badge-error";
    return "badge-warning";
  };

  const handleAction = async (id, status) => {
    setLoadingId(id);
    try {
      const res = await axiosSecure.patch(`/requests/${id}`, {
        requestStatus: status,
      });

      if (res.data.modifiedCount) {
        Swal.fire({
          title: status === "approved" ? "Approved!" : "Rejected!",
          text: `Request has been ${status}`,
          icon: status === "approved" ? "success" : "error",
          position: "top-end",
          timer: 1500,
          showConfirmButton: false,
        });

        refetch();
      }
    } catch (err) {
      Swal.fire("Error!", "Something went wrong!", "error");
      console.error(err);
    }
    setLoadingId(null);
  };

  return (
    <div className="p-6 md:p-8 lg:p-10 min-h-screen">
      {/* Header */}
      <div className="shadow-md rounded-2xl border border-b-blue-500 p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div className="flex-1">
          <h2
            className="sm:text-3xl md:text-4xl heading-db font-extrabold tracking-tight leading-tight 
               bg-primary bg-clip-text text-transparent drop-shadow-lg"
          >
            All Asset Requests
          </h2>

          <p className="text-secondary sub-heading drop-shadow-lg mt-2 md:mt-1">
            Manage employee asset request approvals
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-50 text-gray-600 px-4 py-2 rounded-xl shadow-lg border border-blue-700 mt-4 md:mt-0">
          <p className="text-lg md:text-2xl font-bold p-1">
            Total Requests: {requests.length}
          </p>
        </div>
      </div>

      {/* No requests */}
      {requests.length === 0 && (
        <div className="text-center text-gray-500 mt-20 text-base md:text-lg">
          No pending requests found
        </div>
      )}

      {/* Request Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10">
        {requests
          .slice()
          .sort((a, b) => b._id.localeCompare(a._id))
          .map((r) => (
            <div
              key={r._id}
              className="bg- backdrop-blur-lg border border-blue-500 rounded-2xl p-5 shadow-md hover:shadow-xl transform hover:scale-105 transition-all hover:border-blue-900 hover:shadow-blue-100/10 duration-300 flex flex-col justify-between relative h-full"
            >
              {/* Card Content */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                  <h2 className="font-bold text-lg md:text-xl">
                    {r.assetName || "Unknown Asset"}
                  </h2>
                  <span
                    className={`badge ${getStatusColor(
                      r.requestStatus,
                    )} badge-outline`}
                  >
                    {r.requestStatus || "pending"}
                  </span>
                </div>

                <p className="text-sm md:text-base text-gray-600">
                  👤 Employee: {r.requesterName || "—"}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  📦 Type: {r.assetType || "—"}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  🔢 Quantity: {r.quantity || 1}
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-2 break-words">
                  📝 Note: {r.note || "No note provided"}
                </p>
              </div>

              {/* Action Buttons */}
              {r.requestStatus === "pending" && (
                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                  <button
                    onClick={() => handleAction(r._id, "approved")}
                    disabled={loadingId === r._id}
                    className="flex-1 btn btn-success btn-sm md:btn-md gap-2 shadow disabled:opacity-50"
                  >
                    <FaCheckCircle /> Approve
                  </button>

                  <button
                    onClick={() => handleAction(r._id, "rejected")}
                    disabled={loadingId === r._id}
                    className="flex-1 btn btn-error btn-sm md:btn-md gap-2 shadow disabled:opacity-50"
                  >
                    <FaTimesCircle /> Reject
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllRequests;
