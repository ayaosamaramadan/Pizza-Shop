import Image from "next/image";
import { GoDash, GoPlus } from "react-icons/go";
const Ordermenu = () => {
  return (
    <>
      <div className="fixed right-0 ml-10 bg-[#201818] min-h-screen w-full sm:w-[30vw] p-5">
        <div className="flex mx-12 items-center mt-1 bg-[#1877F2] p-3 rounded shadow-md">
          <Image
            src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743901505/foodapp/home/cnevejsf98i36wp7vfim.png"
            alt="facebook"
            width={24}
            height={24}
            className="w-6 h-6 mr-3"
          />
          <p className="text-white font-medium">Log In with Facebook</p>
        </div>
        <div className="flex items-center mt-2 bg-white p-3 rounded shadow-md mx-12">
          <Image
            src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743901526/foodapp/home/l5m9f5trqmvhdhgrgrqt.png"
            alt="google"
            width={24}
            height={24}
            className="w-6 h-6 mr-3"
          />
          <p className="opacity-[54%] text-black font-medium">
            Log In with Google
          </p>
        </div>

        <div className="mt-6 mx-24 justify-center items-center ">
          <Image
            src={
              "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743902284/foodapp/home/khepf8d7fkmrqu4ziczs.png"
            }
            alt=""
            width={170}
            height={90}
            className="mb-2 h-12"
          />
          <Image
            src={
              "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743902314/foodapp/home/ld7vh1orzhflvu9ztseu.png"
            }
            alt=""
            width={170}
            height={90}
            className="mb-2 h-12"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mt-1 mx-12">
            <h1 className="text-[1.6rem] font-semibold">Order Menu</h1>
            <button className="font-semibold leading-2 text-[#FF9921] flex items-center justify-center">
              See All
            </button>
          </div>

          <div className="max-h-[250px] h-[300px] overflow-y-scroll">
        {
          Array(4).fill(null).map((_, index) => (
          <div key={index}>
            <div className="bg-[#b4bccf31] flex items-center mt-2 mx-2 p-2 rounded-lg shadow-md hover:shadow-lg hover:bg-[#37383ab6] transition duration-300">
            <Image
              src={
          "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743904421/foodapp/home/jwrcxtxvjt4fl2fgluuy.png"
              }
              alt=""
              width={170}
              height={90}
              className="w-auto opacity-100 h-auto rounded-lg shadow"
            />
            <div>
              <div className="w-52">
          <h1 className="font-bold text-[1rem] mt-1 ml-4">
            Pizza with Mushrooms
          </h1>
          <p className="ml-4 text-gray-500">8 inch</p>
          <p className="text-[#01C550] ml-4 leading-x-4">$10</p>
              <div className="flex justify-end">
          <button
            type="button"
            title="addBtn"
            className="text-[1.5rem] font-extrabold text-black bg-white rounded-md hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
          >
            <GoDash />
          </button>
          <p className="mx-3 text-black font-bold">01</p>
          <button
            title="addBtn"
            className="text-[1.5rem] font-extrabold text-black bg-white rounded-md hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer"
          >
              <GoPlus />    
          </button>
              </div>
              </div>
            </div>
          </div>
          </div>
          ))
        }
          
          </div>
          <div className="flex justify-between items-center mt-5 mx-12">
            <h1 className="text-[1rem] font-semibold">Total Price</h1>
            <button className="text-[1.5rem] font-semibold leading-2 text-[#01C550] flex items-center justify-center">
              $52.00
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <button
              title="btn"
              className="bg-[#FF9921] text-white py-2 px-4 rounded-2xl shadow-sm shadow-orange-100 hover:bg-[#e68a1d] transition duration-300"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordermenu;
