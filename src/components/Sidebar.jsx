const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6 font-bold text-xl">
        💰 Finance
      </div>

      <nav className="px-4 space-y-2">
        <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
          Dashboard
        </div>
        <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
          Transactions
        </div>
        <div className="p-2 rounded hover:bg-gray-100 cursor-pointer">
          Insights
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;