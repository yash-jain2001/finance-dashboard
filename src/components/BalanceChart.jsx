import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BalanceChart = ({ data }) => {
  return (
    <div className="bg-white p-5 w-1/2  shadow-sm border">
      <h3 className="mb-4 font-semibold">Balance Trend</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;