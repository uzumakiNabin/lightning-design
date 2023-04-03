import { PieChart, Pie, ResponsiveContainer } from "recharts";

const AssetsBreakdownPie = () => {
  const data = [
    {
      name: "Fanom",
      value: 10,
    },
    {
      name: "Ethereum",
      value: 30,
    },
    {
      name: "Polygon",
      value: 15,
    },
    {
      name: "Bitcoin",
      value: 40,
    },
    {
      name: "Optimism",
      value: 5,
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

export default AssetsBreakdownPie;
