import { ReactNode } from "react";
import "../globals.css";
const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">{/* admin header  */}</div>
  );
};
export default AdminLayout;
