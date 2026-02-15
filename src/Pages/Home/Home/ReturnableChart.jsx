import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
  Sector,
} from "recharts";

const ReturnableChart = ({ assets = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animatedTotal, setAnimatedTotal] = useState(0);

  const returnableCount = assets.filter(
    (item) => item.productType === "Returnable",
  ).length;

  const nonReturnableCount = assets.filter(
    (item) => item.productType === "Non-returnable",
  ).length;

  const totalAssets = returnableCount + nonReturnableCount;

  const data = [
    { name: "Returnable", value: returnableCount },
    { name: "Non-returnable", value: nonReturnableCount },
  ];

  const COLORS = ["url(#blueGradient)", "url(#redGradient)"];

  // Animated total counter
  useEffect(() => {
    let start = 0;
    if (totalAssets === 0) return;
    const duration = 800;
    const increment = totalAssets / (duration / 20);
    const interval = setInterval(() => {
      start += increment;
      if (start >= totalAssets) {
        start = totalAssets;
        clearInterval(interval);
      }
      setAnimatedTotal(Math.floor(start));
    }, 20);
    return () => clearInterval(interval);
  }, [totalAssets]);

  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  return (
    <div className="w-full h-96 p-4 relative">
      <h2
        className="text-center text-3xl font-extrabold tracking-tight leading-tight md:leading-snug 
               bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent 
               drop-shadow-lg "
      >
        Asset Type Distribution
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
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

          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            innerRadius={70}
            paddingAngle={5}
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
            isAnimationActive={true}
            activeIndex={activeIndex}
            activeShape={(props) => (
              <Sector
                {...props}
                outerRadius={props.outerRadius + 10}
                stroke="none"
                shadowOffsetX={0}
                shadowOffsetY={2}
                shadowBlur={10}
                shadowColor="rgba(0,0,0,0.25)"
              />
            )}
            label={({ name, value, percent }) =>
              `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
            }
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} cursor="pointer" />
            ))}
          </Pie>

          <Tooltip
            formatter={(value, name) => [`${value}`, `${name}`]}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
              fontWeight: "600",
            }}
          />

          <Legend
            verticalAlign="bottom"
            height={40}
            iconType="circle"
            formatter={(value) => (
              <span className="text-gray-700 font-semibold">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Center total with animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="text-gray-700 font-bold text-lg">Total Assets</p>
          <p className="text-4xl font-extrabold text-blue-800 drop-shadow-md">
            {animatedTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnableChart;
