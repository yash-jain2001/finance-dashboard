import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../store/roleSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role.role);

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold text-blue-600">Finance Dashboard💰</h1>

      <div className="flex items-center gap-4">
        <select
          value={role}
          onChange={(e) => dispatch(setRole(e.target.value))}
          className="border rounded px-2 py-1"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        <div className="w-8 h-8 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/89932280?v=4" alt="user image" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
