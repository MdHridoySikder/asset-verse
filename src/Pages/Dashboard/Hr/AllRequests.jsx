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
    <div className="p-6 md:p-6 min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      {/* Header */}
      <div className="bg-gray-100 shadow-md rounded-2xl border border-b-blue-500 p-6 mb-8 flex justify-between items-center">
        <div>
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight md:leading-snug 
               bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent 
               drop-shadow-lg "
          >
            All Asset Requests
          </h2>

          <p className="text-gray-700 text-lg  drop-shadow-lg">
            Manage employee asset request approvals
          </p>
        </div>

        <div className="bg-gradient-to-r  from-blue-50 to-blue-50 text-gray-600 px-4 py-2 rounded-xl shadow-lg border border-blue-700 ">
          <p className="text-2xl font-bold p-1">
            Total Requests: {requests.length}
          </p>
        </div>
      </div>

      {/* No requests */}
      {requests.length === 0 && (
        <div className="text-center text-gray-500 mt-20">
          No pending requests found
        </div>
      )}

      {/* Request Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 ">
        {requests
          .slice()
          .sort((a, b) => b._id.localeCompare(a._id))
          .map((r) => (
            <div
              key={r._id}
              className="bg-white/80 backdrop-blur-lg border border-blue-500 rounded-2xl p-5 shadow-md hover:shadow-xl transition transform hover:scale-105 flex flex-col justify-between "
            >
              {/* Card Content */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-bold text-lg">
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

                <p className="text-sm text-gray-600">
                  👤 Employee: {r.requesterName || "—"}
                </p>
                <p className="text-sm text-gray-600">
                  📦 Type: {r.assetType || "—"}
                </p>
                <p className="text-sm text-gray-600">
                  🔢 Quantity: {r.quantity || 1}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  📝 Note: {r.note || "No note provided"}
                </p>
              </div>

              {/* Action Buttons */}
              {r.requestStatus === "pending" && (
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleAction(r._id, "approved")}
                    disabled={loadingId === r._id}
                    className="flex-1 btn btn-success btn-sm gap-2 shadow disabled:opacity-50"
                  >
                    <FaCheckCircle /> Approve
                  </button>

                  <button
                    onClick={() => handleAction(r._id, "rejected")}
                    disabled={loadingId === r._id}
                    className="flex-1 btn btn-error btn-sm gap-2 shadow disabled:opacity-50"
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
