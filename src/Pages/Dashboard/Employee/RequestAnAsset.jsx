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
      try {
        const res = await axiosSecure.get(`/assets-collection`);
        return res.data || [];
      } catch (err) {
        console.error("Failed to fetch assets:", err);
        return [];
      }
    },
  });

  const handleRequest = async () => {
    if (!selectedAsset) return;

    try {
      await axiosSecure.post("/requests", {
        assetId: selectedAsset._id,
        assetName: selectedAsset.productName || "Unknown",
        assetType: selectedAsset.productType || "Unknown",
        requesterName: user?.name || "Employee",
        requesterEmail: user?.email,
        hrEmail: selectedAsset.hrEmail || "hr@company.com",
        companyName: selectedAsset.companyName || "Unknown",
        requestDate: new Date(),
        requestStatus: "pending",
        note,
      });

      Swal.fire("Success!", "Your request has been submitted.", "success");

      // Reset modal fields
      setSelectedAsset(null);
      setNote("");

      refetch();
    } catch (error) {
      console.error("Request submission failed:", error);
      Swal.fire("Error!", "Something went wrong!", "error");
    }
  };

  return (
    <div className="p-6 md:p-10 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Company Assets
          </h1>
          <p className="text-gray-600 text-lg">
            Request the assets you need from your company.
          </p>
        </div>

        <p className="mb-6 font-semibold">Total Assets: {assets.length}</p>

        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.length > 0 ? (
            assets.map((asset) => (
              <div
                key={asset._id}
                className="bg-white rounded-3xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all duration-300"
              >
                {/* Asset Image */}
                <img
                  src={asset.productImage || "https://via.placeholder.com/300"}
                  alt={asset.productName || "Asset"}
                  className="w-full h-52 object-cover rounded-2xl mb-5"
                />

                {/* Asset Details */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {asset.productName || "Unknown"}
                </h2>
                <p className="text-gray-500 mb-1">
                  Type: {asset.productType || "Unknown"}
                </p>

                <p className="text-gray-500 mb-1">Quantity: {asset.quantity}</p>

                <p className="text-gray-400 text-sm mb-4">
                  Added:{" "}
                  {asset.dateAdded
                    ? new Date(asset.dateAdded).toLocaleDateString()
                    : "N/A"}
                </p>

                {/* Request Button */}
                <button
                  onClick={() => setSelectedAsset(asset)}
                  className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-medium"
                >
                  Request
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No assets available at the moment.</p>
          )}
        </div>
      </div>

      {/* Request Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">
              Request {selectedAsset.productName || "Asset"}
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
                type="button"
                className="btn btn-outline"
                onClick={() => setSelectedAsset(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleRequest}
              >
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
