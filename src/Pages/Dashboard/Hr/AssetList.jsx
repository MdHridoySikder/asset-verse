import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";

const AssetList = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { data: assets = [], refetch } = useQuery({
    queryKey: ["assets-list", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/assets-collection?email=${user.email}`,
      );
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete this asset?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/assets-collection/${id}`);
        if (res.data?.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Asset removed successfully.", "success");
        }
      } catch (error) {
        Swal.fire("Error!", "Something went wrong!", "error");
      }
    }
  };

  // Filter assets based on search
  const filteredAssets = assets.filter((asset) =>
    asset.productName.toLowerCase().includes(search.toLowerCase()),
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedAssets = filteredAssets.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="p-6 md:p-5 bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-2">
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight md:leading-snug
              bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent
              drop-shadow-lg"
          >
            Company Assets
          </h2>
          <p className="text-gray-500 drop-shadow-lg">
            Manage, search, and control all company assets
          </p>
        </div>

        {/* Search + Asset Count */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          {/* Search */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search asset by name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full md:w-80 px-5 py-3 rounded-xl border border-blue-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Asset Count */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-50 text-gray-600 px-6 py-3 rounded-xl shadow-lg border border-blue-700">
            <p className="text-2xl font-bold">
              Total Assets: {filteredAssets.length}
            </p>
          </div>
        </div>

        {/* Asset Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedAssets.map((asset) => (
            <div
              key={asset._id}
              className="group bg-white border border-blue-400 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden relative flex flex-col h-full"
            >
              {/* Asset Type Badge */}
              <span className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                {asset.productType}
              </span>

              {/* Image */}
              <img
                className="w-full h-44 object-cover rounded-t-2xl"
                src={`/${asset.imageLink}`}
                alt={asset.productName}
              />

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  {asset.productName}
                </h2>
                <p className="text-gray-500 text-sm mb-1">
                  Quantity:{" "}
                  <span className="font-medium">{asset.quantity}</span>
                </p>
                <p className="text-gray-400 text-xs mb-3">
                  Added on {new Date(asset.dateAdded).toLocaleDateString()}
                </p>

                {/* Delete Button */}
                <div className="mt-auto flex justify-end">
                  <button
                    onClick={() => handleDelete(asset._id)}
                    className="flex items-center gap-1 px-2 py-2 rounded-lg text-sm font-semibold
                      bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-shadow shadow-sm"
                  >
                    <MdDeleteForever className="h-5 w-5" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 border-blue-400"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredAssets.length === 0 && (
          <div className="text-center mt-20 text-gray-500">
            No assets found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetList;
