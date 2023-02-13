import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function AdmLayout() {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
}
