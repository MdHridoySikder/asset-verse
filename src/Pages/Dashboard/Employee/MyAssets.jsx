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
    <div className="p-4 sm:p-6 md:p-10 min-h-screen bg--to-br from-slate-100 to-blue-100">
      {/* Header */}
      <div className="shadow-md rounded-2xl border border-b-blue-500 p-4 sm:p-6 md:p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        {/* Left: Heading */}
        <div>
          <h2
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-snug
          bg-primary bg-clip-text text-transparent drop-shadow-lg"
          >
            My Assets
          </h2>
          <p className="text-secondary sub-heading drop-shadow-lg text-sm sm:text-base mt-1">
            Your approved and managed assets
          </p>
        </div>

        {/* Total Assets */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-50 text-gray-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg border border-blue-700 mt-2 md:mt-0">
          <p className="text-lg sm:text-2xl md:text-2xl font-bold text-center">
            Total Assets: {uniqueAssets.length}
          </p>
        </div>
      </div>

      {/* No assets */}
      {uniqueAssets.length === 0 && (
        <div className="text-center text-gray-500 mt-10 sm:mt-20 text-lg sm:text-xl">
          No approved assets yet!
        </div>
      )}

      {/* Assets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
        {uniqueAssets.map((asset) => (
          <div
            key={asset.assetId}
            className=" backdrop-blur-lg border border-blue-500 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition transform hover:scale-105 hover:border-blue-900 hover:shadow-blue-100/10 duration-300 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="font-bold text-lg sm:text-xl mb-2">
                {asset.assetName}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-1">
                Type: <span className="font-medium">{asset.assetType}</span>
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-1">
                Quantity:{" "}
                <span className="font-medium">{asset.quantity || 1}</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Added: {new Date(asset.dateAdded).toLocaleDateString()}
              </p>
            </div>

            <div className="mt-4 self-start">
              <span className="badge badge-success badge-outline text-xs sm:text-sm">
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
