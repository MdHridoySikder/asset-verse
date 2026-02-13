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

  // Filter unique assets based on assetId
  const uniqueAssets = myAssets.filter(
    (asset, index, self) =>
      index === self.findIndex((a) => a.assetId === asset.assetId),
  );

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gradient-to-br from-slate-100 to-blue-100">
      {/* Header */}
      <div className="bg-gray-100 shadow-md rounded-2xl border border-b-blue-500 p-6 mb-8 flex justify-between items-center">
        {/* Left: Heading */}
        <div>
          <h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight md:leading-snug
        bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text text-transparent
        drop-shadow-lg"
          >
            My Assets
          </h2>
          <p className="text-gray-700 text-lg drop-shadow-lg">
            Your approved and managed assets
          </p>
        </div>

        {/* Total Assets */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-50 text-gray-600 px-6 py-3 rounded-xl shadow-lg border border-blue-700">
          <p className="text-2xl font-bold">
            Total Assets: {uniqueAssets.length}
          </p>
        </div>
      </div>

      {/* No assets */}
      {uniqueAssets.length === 0 && (
        <div className="text-center text-gray-500 mt-20 text-xl">
          No approved assets yet!
        </div>
      )}

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {uniqueAssets.map((asset) => (
          <div
            key={asset.assetId}
            className="bg-white/90 backdrop-blur-lg border border-blue-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-105 flex flex-col justify-between "
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
