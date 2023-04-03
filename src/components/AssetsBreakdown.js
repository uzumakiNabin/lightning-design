import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AssetsBreakdown = () => {
  const data = [
    {
      name: "January",
      Fanom: 5,
      Ethereum: 2,
      Polygon: 2,
    },
    {
      name: "February",
      Fanom: 15,
      Ethereum: 8,
      Polygon: 14,
    },
    {
      name: "March",
      Fanom: 9,
      Ethereum: 4,
      Polygon: 5,
    },
    {
      name: "April",
      Fanom: 12,
      Ethereum: 5,
      Polygon: 8,
    },
    {
      name: "May",
      Fanom: 10,
      Ethereum: 3,
      Polygon: 6,
    },
    {
      name: "June",
      Fanom: 13,
      Ethereum: 3,
      Polygon: 9,
    },
    {
      name: "July",
      Fanom: 2,
      Ethereum: 2,
      Polygon: 2,
    },
    {
      name: "August",
      Fanom: 7,
      Ethereum: 2,
      Polygon: 4,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{ background: "white" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Fanom" stackId="a" fill="#8884d8" />
        <Bar dataKey="Ethereum" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Polygon" stackId="a" fill="#ffc0cb" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AssetsBreakdown;
