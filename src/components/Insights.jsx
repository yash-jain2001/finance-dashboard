import { useSelector } from "react-redux";

const Insights = () => {
  const transactions = useSelector(
    (state) => state.transactions.transactions
  );

  // Highest spending category
  const expenseMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!expenseMap[t.category]) {
        expenseMap[t.category] = 0;
      }
      expenseMap[t.category] += t.amount;
    }
  });

  let highestCategory = "N/A";
  let highestAmount = 0;

  for (let key in expenseMap) {
    if (expenseMap[key] > highestAmount) {
      highestAmount = expenseMap[key];
      highestCategory = key;
    }
  }

  // Monthly comparison (simple)
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  let thisMonth = 0;
  let lastMonth = 0;

  transactions.forEach((t) => {
    const date = new Date(t.date);

    if (t.type === "expense") {
      if (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      ) {
        thisMonth += t.amount;
      }

      if (
        date.getMonth() === currentMonth - 1 &&
        date.getFullYear() === currentYear
      ) {
        lastMonth += t.amount;
      }
    }
  });

  const difference = thisMonth - lastMonth;

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border mt-6">
      <h3 className="font-semibold mb-4">Insights</h3>

      <div className="space-y-2 text-sm">
        <p>
          💸 Highest spending category:{" "}
          <span className="font-medium">{highestCategory}</span>
        </p>

        <p>
          📅 This month spending:{" "}
          <span className="font-medium">₹ {thisMonth}</span>
        </p>

        <p>
          📊 Change from last month:{" "}
          <span
            className={
              difference > 0 ? "text-red-500" : "text-green-600"
            }
          >
            ₹ {difference}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Insights;