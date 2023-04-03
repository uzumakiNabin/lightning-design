import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

const DefiQuarterPerf = () => {
  const data = [
    {
      name: "value 1",
      value: 5,
    },
    {
      name: "value 2",
      value: 8,
    },
    {
      name: "value 3",
      value: 8.5,
    },
    {
      name: "value 4",
      value: 11,
    },
    {
      name: "value 5",
      value: 18,
    },
    {
      name: "value 6",
      value: 19,
    },
    {
      name: "value 7",
      value: 20,
    },
    {
      name: "value 8",
      value: 25,
    },
    {
      name: "value 9",
      value: 25.5,
    },
    {
      name: "value 10",
      value: 29,
    },
    {
      name: "value 11",
      value: 30,
    },
    {
      name: "value 12",
      value: 34,
    },
    {
      name: "value 13",
      value: 33,
    },
    {
      name: "value 14",
      value: 39,
    },
    {
      name: "value 15",
      value: 39,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        style={{ background: "white" }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DefiQuarterPerf;
