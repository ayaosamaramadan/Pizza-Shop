// import Header from "@/components/header";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Ordermenu from "../ordermenu";
import Multimenus from "../multimenus";
const Menu = () => {
  return (
    <div className="flex">
      <Navbar />
      <Multimenus/>
      <Ordermenu/>
    </div>
  );
};

export default Menu;
