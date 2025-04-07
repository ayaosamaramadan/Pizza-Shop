// import Header from "@/components/header";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Ordermenu from "../ordermenu";
import Pizza from "./pizza";

const Menu = () => {
  return (
    <div className="flex">
      <Navbar />
      <Pizza/>
      <Ordermenu/>
    </div>
  );
};

export default Menu;
