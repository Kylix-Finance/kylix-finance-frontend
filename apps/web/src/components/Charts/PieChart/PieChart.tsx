"use client";

import { PieChart, Pie, Cell } from "recharts";
import { ClientOnly } from "~/components";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function App() {
  return (
    <ClientOnly>
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} r={20} />
          ))}
        </Pie>
      </PieChart>
    </ClientOnly>
  );
}
