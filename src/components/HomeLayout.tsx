
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const HomeQuizLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeQuizLayout;
