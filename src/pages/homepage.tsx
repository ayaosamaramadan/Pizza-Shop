import Offers from "./offers";
import Ordermenu from "./ordermenu";
const Homepage = () => {
  return (
    <>
      <div className="flex ml-5">
       <Offers/>
       <Ordermenu/>
      </div>
    </>
  );
};

export default Homepage;
