import { useSelector } from "react-redux";
import SummaryCard from "../components/SummaryCard";
import BalanceChart from "../components/BalanceChart";
import ExpensePieChart from "../components/PieChart";
import TransactionsTable from "../components/TransactionTable";
import Insights from "../components/Insights";

const Dashboard = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  // Calculate values
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );

  let runningBalance = 0;

  const chartData = sortedTransactions.map((t) => {
    if (t.type === "income") {
      runningBalance += t.amount;
    } else {
      runningBalance -= t.amount;
    }

    return {
      date: t.date,
      balance: runningBalance,
    };
  });

  const expenseData = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!expenseData[t.category]) {
        expenseData[t.category] = 0;
      }
      expenseData[t.category] += t.amount;
    }
  });

  const pieData = Object.keys(expenseData).map((key) => ({
    category: key,
    value: expenseData[key],
  }));

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      {/* Cards */}
      <div className="">
        <div className="flex w-full gap-4">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} type="income" />
        <SummaryCard title="Expenses" amount={expenses} type="expense" />
        </div>
        <div className="flex w-full gap-4 mt-6">
          <BalanceChart data={chartData} />
          <ExpensePieChart data={pieData} />
        </div>
        <TransactionsTable />
        <Insights />
      </div>
    </div>
  );
};

export default Dashboard;
