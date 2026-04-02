import { useSelector } from "react-redux";
import { useState } from "react";

const TransactionsTable = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  // Filter + Search logic
  const processedData = [...transactions]
  .filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filterType === "all" || t.type === filterType;

    return matchesSearch && matchesFilter;
  })
  .sort((a, b) => {
    if (sortBy === "amount") {
      return b.amount - a.amount;
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border mt-6">
      <h3 className="font-semibold mb-4">Transactions</h3>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/3"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/4"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/4"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-2">Date</th>
              <th>Category</th>
              <th>Type</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            {processedData.map((t) => (
              <tr key={t.id} className="border-b">
                <td className="py-2">{t.date}</td>
                <td>{t.category}</td>
                <td
                  className={
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }
                >
                  {t.type}
                </td>
                <td className="text-right font-medium">₹ {t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {processedData.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No transactions found
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionsTable;
