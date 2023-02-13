import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/screen";
import { Menu } from "../components/Header/Menu";

export function DefaultLayout() {
  return (
    <div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}
