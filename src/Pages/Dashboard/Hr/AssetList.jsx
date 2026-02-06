import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AssetList = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: assets = [], refetch } = useQuery({
    queryKey: ["assets-list", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/assets-collection?email=${user.email}`,
      );
      return res.data;
    },
  });

  const handleEdit = (asset) => {
    Swal.fire("Edit", `You clicked edit for ${asset.productName}`, "info");
  };

  const handleDelete = (asset) => {
    Swal.fire(
      "Delete",
      `You clicked delete for ${asset.productName}`,
      "warning",
    );
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
            Manage all your company assets here. Edit or remove as needed.
          </p>
        </div>

        {/* Asset Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset) => (
            <div
              key={asset._id}
              className="bg-white rounded-3xl shadow-xl p-6 flex flex-col hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={asset.imageLink}
                alt={asset.productName}
                className="w-full h-52 object-cover rounded-2xl mb-5"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {asset.productName}
              </h2>
              <p className="text-gray-500 mb-1">Type: {asset.productType}</p>
              <p className="text-gray-500 mb-1">Quantity: {asset.quantity}</p>
              <p className="text-gray-400 text-sm mb-4">
                Added: {new Date(asset.dateAdded).toLocaleDateString()}
              </p>

              <div className="mt-auto flex justify-between">
                <button
                  onClick={() => handleEdit(asset)}
                  className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(asset)}
                  className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetList;
