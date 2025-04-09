import { useSelector } from "react-redux";

import { RootState } from "@/store";
import Image from "next/image";

const Decrpizza = () => {
  const { daupleitemCart, selectedPizza, isdecOpen } = useSelector(
    (state: RootState) => state.pizza
  );
  console.log(daupleitemCart, "itemCart in Decrpizza");
  return (
    <>
      {isdecOpen && selectedPizza ? (
        <>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            {daupleitemCart
              .filter((item) => item.id === selectedPizza?.id)
              .map((item) => (
                <div
                  key={item.id}
                  className=" items-center justify-between p-4 bg-white rounded shadow-md mb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-16 h-16 rounded"
                  />
                  <div className="flex flex-col ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">Size: {item.size}</p>
                    <p className="text-gray-600">
                      Extras:
                      {item.extras.map((extra) => extra.label).join(", ")}
                    </p>
                    <p className="text-gray-600">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Decrpizza;
