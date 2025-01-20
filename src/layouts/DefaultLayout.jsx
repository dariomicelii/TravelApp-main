import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaulLayout() {
  return (
    <div className="d-flex justify-content-between flex-column min-vh-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
