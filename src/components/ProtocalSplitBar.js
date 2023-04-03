import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ProtocalSplitBar = () => {
  const data = [
    {
      name: "Fanom",
      split: 12,
    },
    {
      name: "Tomb Chain",
      split: 42,
    },
    {
      name: "Polygon",
      split: 21,
    },
    {
      name: "Ethereum",
      split: 33,
    },
    {
      name: "Avalanche",
      split: 25,
    },
    {
      name: "Solana",
      split: 34,
    },
    {
      name: "Bitcoin",
      split: 8,
    },
    {
      name: "Optimism",
      split: 18,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        barSize="40"
        barCategoryGap="30%"
        style={{ background: "white" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="split" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default ProtocalSplitBar;
