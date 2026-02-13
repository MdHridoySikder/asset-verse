import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const RequestAnAsset = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [note, setNote] = useState("");

  const { data: assets = [], refetch } = useQuery({
    queryKey: ["assets-list", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("/assets-collection");
      return res.data || [];
    },
  });

  const handleRequest = async () => {
    if (!selectedAsset) return;

    if (selectedAsset.quantity <= 0) {
      Swal.fire("Out of Stock", "This asset is not available.", "warning");
      return;
    }

    try {
      // create request
      await axiosSecure.post("/requests", {
        assetId: selectedAsset._id,
        assetName: selectedAsset.productName,
        assetType: selectedAsset.productType,
        requesterName: user?.name || "Employee",
        requesterEmail: user?.email,
        hrEmail: selectedAsset.hrEmail || "hr@company.com",
        companyName: selectedAsset.companyName || "Unknown",
        requestDate: new Date(),
        requestStatus: "pending",
        note,
      });

      // quantity -1
      await axiosSecure.patch(`/assets-collection/${selectedAsset._id}`, {
        quantity: selectedAsset.quantity - 1,
      });

      Swal.fire("Success!", "Your request has been submitted.", "success");

      setSelectedAsset(null);
      setNote("");
      refetch();
    } catch (error) {
      Swal.fire("Error!", "Something went wrong!", "error");
    }
  };

  return (
    <div className="p-6 md:p-10 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Company Assets
          </h1>
          <p className="text-gray-500 text-lg">
            Request the assets you need from your company
          </p>

          <div className="flex justify-center mt-4">
            <p className="px-5 py-3 bg-gradient-to-r from-blue-50 to-blue-50 text-gray-600 rounded-xl shadow-lg border border-blue-700 text-2xl font-bold">
              Total Assets : {assets.length}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div
              key={asset._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-blue-700 flex flex-col relative"
            >
              <span className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {asset.productType}
              </span>

              <img
                src={asset.productImage || "https://via.placeholder.com/400"}
                alt={asset.productName}
                className="w-full h-44 object-cover"
              />

              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-gray-800">
                  {asset.productName}
                </h2>

                <p className="text-sm text-gray-500">
                  Quantity:{" "}
                  <span className="font-semibold">{asset.quantity}</span>
                </p>

                <p className="text-xs text-gray-400 mb-4">
                  Added on{" "}
                  {asset.dateAdded
                    ? new Date(asset.dateAdded).toLocaleDateString()
                    : "N/A"}
                </p>

                <button
                  disabled={asset.quantity === 0}
                  onClick={() => setSelectedAsset(asset)}
                  className={`mt-auto w-full px-4 py-2 rounded-xl text-sm font-semibold text-gray-700  transition-all duration-300 ease-in-out
   
                    ${
                      asset.quantity === 0
                        ? "bg-red-100 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-500 to-green-500 hover:from-green-600 hover:to-green-600 hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                >
                  {asset.quantity === 0 ? "Out of Stock" : "Request Asset"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">
              Request {selectedAsset.productName}
            </h3>

            <label className="block font-semibold mb-1">Note (optional)</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="textarea textarea-bordered w-full mb-3"
              placeholder="Add a note for HR"
            />

            <div className="flex justify-end gap-2">
              <button
                className="btn btn-outline"
                onClick={() => setSelectedAsset(null)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleRequest}>
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestAnAsset;
