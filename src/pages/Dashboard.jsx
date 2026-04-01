import { useSelector } from "react-redux";
import SummaryCard from "../components/SummaryCard";

const Dashboard = () => {
  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  // Calculate values
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} type="income" />
        <SummaryCard title="Expenses" amount={expenses} type="expense" />
      </div>
    </div>
  );
};

export default Dashboard;