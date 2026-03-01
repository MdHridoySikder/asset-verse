import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Analytics = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: assets = [], isLoading } = useQuery({
    queryKey: ["assets-analytics", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/assets-collection?email=${user.email}`,
      );
      return res.data;
    },
  });

  const returnableCount = assets.filter(
    (item) => item.productType?.toLowerCase() === "returnable",
  ).length;

  const nonReturnableCount = assets.filter(
    (item) => item.productType?.toLowerCase() === "non-returnable",
  ).length;

  const total = returnableCount + nonReturnableCount;

  // Animated counter
  const [animatedTotal, setAnimatedTotal] = useState(0);
  useEffect(() => {
    let start = 0;
    if (total === 0) return;
    const duration = 800;
    const increment = total / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= total) {
        start = total;
        clearInterval(counter);
      }
      setAnimatedTotal(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [total]);

  const returnablePercent =
    total > 0 ? ((returnableCount / total) * 100).toFixed(1) : 0;
  const nonReturnablePercent =
    total > 0 ? ((nonReturnableCount / total) * 100).toFixed(1) : 0;

  const data = [
    { name: "Returnable", value: returnableCount, fill: "url(#blueGradient)" },
    {
      name: "Non-returnable",
      value: nonReturnableCount,
      fill: "url(#redGradient)",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[450px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-base-200 to-base-300 min-h-screen">
      {/* Page Title */}
      <h1 className="heading-db font-extrabold text-center text-primary mb-10 tracking-tight">
        Asset Analytics Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className=" shadow-xl rounded-2xl p-6 text-center border border-blue-600">
          <h3 className="text-secondary font-semibold">Total Assets</h3>
          <p className="text-4xl font-extrabold text-blue-700 mt-2">
            {animatedTotal}
          </p>
        </div>

        <div className=" shadow-xl rounded-2xl p-6 text-center border border-green-600">
          <h3 className="text-secondary font-semibold">Returnable</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {returnableCount}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {returnablePercent}% of total
          </p>
        </div>

        <div className=" shadow-xl rounded-2xl p-6 text-center border border-red-600">
          <h3 className="text-secondary font-semibold">Non-returnable</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">
            {nonReturnableCount}
          </p>
          <p className="text-sm text-secondary mt-1">
            {nonReturnablePercent}% of total
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className=" shadow-2xl rounded-3xl p-8 relative border border-gray-700 ">
        {total === 0 ? (
          <div className="text-center text-secondary py-20 text-lg">
            No asset data available.
          </div>
        ) : (
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <RadialBarChart
                innerRadius="30%"
                outerRadius="90%"
                data={data}
                startAngle={180}
                endAngle={0}
              >
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <linearGradient id="redGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#f87171" />
                  </linearGradient>
                </defs>

                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="value"
                  cornerRadius={15}
                />

                <Tooltip />
                <Legend verticalAlign="bottom" height={40} />
              </RadialBarChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-secondary font-semibold text-sm">
                  Total Assets
                </p>
                <p className="text-5xl font-extrabold text-blue-700">
                  {animatedTotal}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analytics;
