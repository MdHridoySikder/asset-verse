import { Link } from "react-router";
import { Lock, Shield, ArrowRight } from "lucide-react";

const Forbidden = () => {
  return (
    <div className="relative min-h-screen bg-blue-50 overflow-hidden flex items-center justify-center px-6">
      <div className="absolute inset-0">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* soft blobs */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-300 rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-indigo-300 rounded-full blur-[140px] opacity-40"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl bg-white rounded-[32px] shadow-[0_40px_100px_-30px_rgba(37,99,235,0.35)] border border-blue-100 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex flex-col justify-center text-white">
            {/* rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full border border-white/20"></div>
              <div className="absolute w-[300px] h-[300px] rounded-full border border-white/30"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-sm mb-6">
                <Shield size={16} />
                AssetVerse Security Layer
              </div>

              <h1 className="text-7xl font-extrabold leading-none">403</h1>

              <p className="mt-4 text-xl font-semibold">Restricted Zone</p>

              <p className="mt-3 text-white/80 max-w-sm">
                This area is protected by role-based access control.
                Unauthorized access attempts are monitored.
              </p>
            </div>
          </div>

          <div className="p-12 flex flex-col justify-center">
            {/* icon */}
            <div className="mb-6">
              <div className="inline-flex p-5 rounded-2xl bg-blue-100 border border-blue-200">
                <Lock className="text-blue-600" size={40} />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">Access Denied</h2>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
              You don’t have the required permission to view this page. Your
              current role does not meet the access criteria defined by{" "}
              <span className="font-semibold text-blue-700">AssetVerse</span>.
            </p>

            {/* permission card */}
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4">
              <p className="text-sm text-blue-700 font-medium">
                Permission Status
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Required: Elevated Access • Your role: Limited
              </p>
            </div>

            {/* actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-md"
              >
                Return to Dashboard
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/"
                className="px-6 py-3 rounded-xl border border-blue-200 text-blue-700 font-medium hover:bg-blue-100 transition"
              >
                Home
              </Link>
            </div>

            {/* footer */}
            <p className="mt-10 text-xs text-gray-400">
              © AssetVerse • Secure Enterprise Asset Management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
