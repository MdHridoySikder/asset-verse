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
    <div className="min-h-screen bg-blue-50 p-10">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-blue-800">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            HR Join Requests
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Manage and review all HR registration requests from this panel.
          </p>

          <span className="mt-4 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
            Total Requests: {hrs.length}
          </span>
        </div>

        <div className="overflow-x-auto rounded-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-100 text-blue-800 uppercase text-xs tracking-wider">
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">HR Manager</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Package</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-blue-100">
              {hrs.map((hr, index) => (
                <tr key={hr._id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4">{index + 1}</td>

                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={hr.photoUrl || "https://i.ibb.co/2kR8b0D/user.png"}
                      className="w-10 h-10 rounded-full border-2 border-blue-200 object-cover"
                      alt=""
                    />
                    <span className="font-semibold text-gray-700">
                      {hr.fullName}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-600">{hr.companyName}</td>

                  <td className="px-6 py-4 font-medium">{hr.package}</td>

                  <td className="px-6 py-4">
                    {hr.status === "pending" && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                        Pending
                      </span>
                    )}
                    {hr.status === "approved" && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                        Approved
                      </span>
                    )}
                    {hr.status === "rejected" && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-600">
                        Rejected
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {hr.status === "pending" ? (
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleApprove(hr._id, hr.fullName)}
                          className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:scale-105 transition"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => handleReject(hr._id, hr.fullName)}
                          className="px-4 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:scale-105 transition"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs">
                        Action Completed
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HRList;
