import Offers from "./offers";
import Ordermenu from "./ordermenu";
const Homepage = () => {
  return (
    <>
      <div className="flex ">
       <Offers/>
       <Ordermenu/>
      </div>
    </>
  );
};

export default Homepage;
