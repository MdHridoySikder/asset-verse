import { useForm } from "react-hook-form";
import { Calendar } from "lucide-react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseAuth from "../../../Hooks/UseAuth";

const AddAsset = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this asset?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Submit confirmed

        axiosSecure.post("/assets-collection", data).then((res) => {
          console.log("after assets-collection", res.data);
        });
        // console.log("Form Data:", data);

        Swal.fire({
          title: "Added!",
          text: "Your asset has been added.",
          icon: "success",
        });

        reset();
      }
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-3">
            Add Asset
          </h1>
          <p className="text-gray-600 text-lg">
            Add a new asset to your inventory
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-blue-200 rounded-3xl p-6 md:p-10 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            + Add New Asset
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Asset Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asset Name
                </label>
                <input
                  {...register("productName", { required: true })}
                  type="text"
                  placeholder="Enter asset name..."
                  className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Asset Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asset Type
                </label>
                <select
                  {...register("productType")}
                  className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400"
                >
                  <option value="Returnable">Returnable</option>
                  <option value="Non-returnable">Non-returnable</option>
                  <option value="Consumable">Consumable</option>
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  {...register("quantity", { required: true })}
                  type="number"
                  placeholder="Enter quantity..."
                  className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Added
                </label>
                <div className="relative">
                  <input
                    {...register("dateAdded")}
                    type="date"
                    className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 pr-12"
                  />
                  <Calendar
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                </div>
              </div>

              {/* Image Link */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asset Image Link
                </label>
                <input
                  {...register("imageLink", { required: true })}
                  type="url"
                  placeholder="Paste image URL here..."
                  className="w-full px-5 py-4 bg-blue-50 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl"
            >
              + Add Asset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAsset;
