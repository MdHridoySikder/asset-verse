// import React, { useState } from "react";
// import { Lock, Sun, Moon, Mail, LogOut } from "lucide-react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { RiPlayMiniFill } from "react-icons/ri";

// const Setting = () => {
//   const [emailNotif, setEmailNotif] = useState(true);

//   const handleEmailToggle = () => {
//     setEmailNotif((prev) => {
//       toast.info(`Email notifications ${!prev ? "enabled" : "disabled"}`);
//       return !prev;
//     });
//   };

//   const handleChangePassword = () => {
//     toast.info("Password change feature coming soon!");
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={1500} />

//       <div className="p-6 space-y-6 min-h-screen bg-base-200 transition-all">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-6">
//           <div className="bg-base-100 text-primary w-12 h-12 flex items-center justify-center rounded-xl shadow-md">
//             <Lock className="w-6 h-6" />
//           </div>
//           <h1 className="text-3xl font-bold text-base-content">Settings</h1>
//         </div>

//         {/* Settings Card */}
//         <div className="bg-base-100 rounded-2xl shadow-md p-6 flex flex-col gap-4">
//           {/* Change Password */}
//           <div className="flex items-center justify-between p-4 border rounded-xl">
//             <div className="flex items-center gap-3">
//               <Lock className="text-primary w-6 h-6" />
//               <p className="font-medium">Change Password</p>
//             </div>
//             <button
//               onClick={handleChangePassword}
//               className="btn btn-primary btn-sm"
//             >
//               Change
//             </button>
//           </div>

//           {/* Dark Mode (Demo Only, no functionality) */}
//           <div className="flex items-center justify-between p-4 border rounded-xl">
//             <div className="flex items-center gap-3">
//               <Sun className="text-primary w-6 h-6" />
//               <p className="font-medium">Light Mode</p>
//             </div>
//             <button className="btn btn-outline btn-sm">On</button>
//           </div>

//           {/* Email Notifications */}
//           <div className="flex items-center justify-between p-4 border rounded-xl">
//             <div className="flex items-center gap-3">
//               <Mail className="text-primary w-6 h-6" />
//               <p className="font-medium">Email Notifications</p>
//             </div>
//             <button
//               onClick={handleEmailToggle}
//               className="btn btn-outline btn-sm"
//             >
//               {emailNotif ? "On" : "Off"}
//             </button>
//           </div>

//           {/* Logout */}
//           <div className="flex items-center justify-between p-4 border rounded-xl">
//             <div className="flex items-center gap-3">
//               <LogOut className="text-primary w-6 h-6" />
//               <p className="font-medium">Logout</p>
//             </div>
//             <button className="btn btn-error btn-sm">Logout</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Setting;
import React from "react";

const Setting = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
    </div>
  );
};

export default Setting;
