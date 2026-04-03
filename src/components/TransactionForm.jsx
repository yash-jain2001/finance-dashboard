import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../store/transactionsSlice";

const AddTransactionForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    };

    dispatch(addTransaction(newTransaction));
    onClose();
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow border mb-4">
      <h3 className="font-semibold mb-3">Add Transaction</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="date"
          required
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Amount"
          required
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
          className="border p-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="Category"
          required
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="border p-2 rounded w-full"
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
          className="border p-2 rounded w-full"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>

          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionForm;