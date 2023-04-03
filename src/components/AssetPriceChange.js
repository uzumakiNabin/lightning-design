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

const AssetPriceChange = () => {
  const data = [
    {
      name: "Quarter 1",
      split: 60,
    },
    {
      name: "Quarter 2",
      split: 30,
    },
    {
      name: "Quarter 3",
      split: 8,
    },
    {
      name: "Quarter 4",
      split: 2,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        width={600}
        height={250}
        data={data}
        barCategoryGap="2%"
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
export default AssetPriceChange;
