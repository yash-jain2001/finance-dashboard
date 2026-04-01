const SummaryCard = ({ title, amount, type }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p
        className={`text-2xl font-bold mt-2 ${
          type === "income"
            ? "text-green-600"
            : type === "expense"
            ? "text-red-600"
            : "text-gray-800"
        }`}
      >
        ₹ {amount}
      </p>
    </div>
  );
};

export default SummaryCard;