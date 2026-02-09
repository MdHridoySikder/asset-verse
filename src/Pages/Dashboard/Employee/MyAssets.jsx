import React from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const MyAssets = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: myAssets = [], isLoading } = useQuery({
    queryKey: ["requests", "approved"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requests?requestStatus=approved");
      return res.data || [];
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-emerald-600"></span>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      {/* Header */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My Assets</h1>
          <p className="text-gray-500 text-sm">
            Your approved and managed assets
          </p>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl shadow-lg">
          <p className="text-sm">Total Assets</p>
          <h2 className="text-2xl font-bold">{myAssets.length}</h2>
        </div>
      </div>

      {/* No assets */}
      {myAssets.length === 0 && (
        <div className="text-center text-gray-500 mt-20 text-xl">
          No approved assets yet!
        </div>
      )}

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {myAssets.map((asset) => (
          <div
            key={asset._id}
            className="bg-white/90 backdrop-blur-lg border border-emerald-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-105 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-xl mb-2">{asset.assetName}</h2>
              <p className="text-sm text-gray-600 mb-1">
                Type: <span className="font-medium">{asset.assetType}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Quantity: <span className="font-medium">{asset.quantity}</span>
              </p>
              <p className="text-xs text-gray-500">
                Added: {new Date(asset.dateAdded).toLocaleDateString()}
              </p>
            </div>

            <div className="mt-4">
              <span className="badge badge-success badge-outline">
                Approved
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAssets;
