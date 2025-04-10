// import Header from "@/components/header";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Ordermenu from "../../components/ordermenu";
import Pizza from "./pizza";
import Decrpizza from "@/components/buttonactions/decrpizza";

const Menu = () => {
  return (
    <div className="flex">
      <Navbar />
      <Pizza />
      <Ordermenu />
      <Decrpizza />
    </div>
  );
};

export default Menu;
