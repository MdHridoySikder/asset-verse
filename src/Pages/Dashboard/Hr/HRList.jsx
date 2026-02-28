import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const HRList = () => {
  const axiosSecure = UseAxiosSecure();
  const [hrs, setHrs] = useState([]);

  useEffect(() => {
    fetchHRs();
  }, []);

  const fetchHRs = () => {
    axiosSecure.get("/hr").then((res) => {
      setHrs(res.data);
    });
  };

  const handleApprove = (id, name) => {
    Swal.fire({
      title: `Approve ${name}?`,
      text: "This HR will be approved.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/hr/approve/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire("Approved!", "HR Approved Successfully.", "success");
            fetchHRs();
          }
        });
      }
    });
  };

  const handleReject = (id, name) => {
    Swal.fire({
      title: `Reject ${name}?`,
      text: "This HR request will be rejected.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Reject",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/hr/reject/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire("Rejected!", "HR Rejected.", "success");
            fetchHRs();
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10">
      <div className="backdrop-blur-xl shadow-2xl rounded-3xl p-4 sm:p-8 border border-blue-800 overflow-x-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <h2 className="heading-db font-extrabold bg-primary bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl">
            HR Join Requests
          </h2>

          <p className="text-secondary sub-heading mt-2 text-sm sm:text-base">
            Manage and review all HR registration requests from this panel.
          </p>

          <span className="mt-4 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
            Total Requests: {hrs.length}
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-blue-100 text-blue-800 uppercase text-xs sm:text-sm tracking-wider">
                <th className="px-3 sm:px-6 py-2">#</th>
                <th className="px-3 sm:px-6 py-2">HR Manager</th>
                <th className="px-3 sm:px-6 py-2">Company</th>
                <th className="px-3 sm:px-6 py-2">Package</th>
                <th className="px-3 sm:px-6 py-2">Status</th>
                <th className="px-3 sm:px-6 py-2 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-blue-100">
              {hrs.map((hr, index) => (
                <tr
                  key={hr._id}
                  className="hover:bg-blue-50 transition-colors duration-300"
                >
                  <td className="px-3 sm:px-6 py-2">{index + 1}</td>

                  <td className="px-3 sm:px-6 py-2 flex items-center gap-2 sm:gap-3">
                    <img
                      src={hr.photoUrl || "https://i.ibb.co/2kR8b0D/user.png"}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-200 object-cover"
                      alt=""
                    />
                    <span className="font-semibold text-secondary text-xs sm:text-sm">
                      {hr.fullName}
                    </span>
                  </td>

                  <td className="px-3 sm:px-6 py-2 text-secondary text-xs sm:text-sm">
                    {hr.companyName}
                  </td>

                  <td className="px-3 sm:px-6 py-2 font-medium text-xs sm:text-sm">
                    {hr.package}
                  </td>

                  <td className="px-3 sm:px-6 py-2">
                    {hr.status === "pending" && (
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-yellow-100 text-yellow-700">
                        Pending
                      </span>
                    )}
                    {hr.status === "approved" && (
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-green-100 text-green-700">
                        Approved
                      </span>
                    )}
                    {hr.status === "rejected" && (
                      <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full bg-red-100 text-red-600">
                        Rejected
                      </span>
                    )}
                  </td>

                  <td className="px-3 sm:px-6 py-2 text-center">
                    {hr.status === "pending" ? (
                      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                        <button
                          onClick={() => handleApprove(hr._id, hr.fullName)}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:scale-105 transition transform duration-300"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => handleReject(hr._id, hr.fullName)}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:scale-105 transition transform duration-300"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs sm:text-sm">
                        Action Completed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {hrs.length === 0 && (
            <p className="text-gray-500 text-center py-4 text-xs sm:text-sm">
              No HR requests found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HRList;
