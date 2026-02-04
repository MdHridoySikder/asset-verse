import React, { useState } from "react";
import { Mail, User, ShieldCheck, Calendar, X } from "lucide-react";
import { getAuth, updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState(currentUser?.displayName || "");
  const [name, setName] = useState(currentUser?.displayName || "No Name");

  const user = {
    name: name,
    email: currentUser?.email || "No Email",
    role: "HR Manager",
    joinDate: currentUser?.metadata?.creationTime || "N/A",
    status: currentUser?.emailVerified ? "Verified" : "Unverified",
    avatar: currentUser?.photoURL || "https://i.pravatar.cc/150?img=12",
  };

  //  update name
  const handleUpdateProfile = async () => {
    if (!newName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    try {
      await updateProfile(currentUser, {
        displayName: newName,
      });

      setName(newName);

      toast.success("Profile updated successfully");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="p-6 space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-50 text-primary w-12 h-12 flex items-center justify-center rounded-xl shadow-md">
            <User className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-blue-800 ">My Profile</h1>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col items-center w-full lg:w-1/4 border-r lg:pr-6">
            <img
              src={user.avatar}
              alt="User"
              className="w-32 h-32 rounded-full border-4 border-primary"
            />
            <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
            <span className="mt-1 text-sm px-3 py-1 rounded-full bg-green-100 text-green-600">
              {user.status}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Info icon={<User />} label="Role" value={user.role} />
            <Info icon={<Mail />} label="Email" value={user.email} />
            <Info icon={<Calendar />} label="Joined" value={user.joinDate} />
            <Info icon={<ShieldCheck />} label="Account" value="Verified" />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 rounded-xl bg-primary text-white hover:opacity-90"
        >
          Edit Profile
        </button>

        {/* modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X />
              </button>

              <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

              {/* name  */}
              <label className="block text-sm mb-1 text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full border rounded-xl px-4 py-2 mb-4
                focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* email read only  */}
              <label className="block text-sm mb-1 text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full border rounded-xl px-4 py-2 bg-gray-100
                cursor-not-allowed text-gray-500"
              />
              <p className="text-xs text-gray-400 mt-1">
                Email cannot be changed
              </p>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-xl border"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateProfile}
                  className="px-4 py-2 rounded-xl bg-primary text-white"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const Info = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 border rounded-xl">
    <span className="text-primary">{icon}</span>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default Profile;
