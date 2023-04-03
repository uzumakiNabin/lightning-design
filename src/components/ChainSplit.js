import { PieChart, Pie, ResponsiveContainer } from "recharts";

const ChainSplit = () => {
  const data = [
    {
      name: "Chain 1",
      value: 50,
    },
    {
      name: "Chain 2",
      value: 2,
    },
    {
      name: "Chain 3",
      value: 38,
    },
    {
      name: "Chain 4",
      value: 4,
    },
    {
      name: "Chain 5",
      value: 6,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart style={{ background: "white" }}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ChainSplit;
