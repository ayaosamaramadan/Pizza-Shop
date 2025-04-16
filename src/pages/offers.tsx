import { RootState } from "@/store";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Offers = () => {
  const {openlastCheckout} = useSelector((state: RootState) => state.pizza);
 
    return ( <>
    <div className={`ml-7 mt-4 ${openlastCheckout ? "w-auto" : "w-full"}`} >
      <div className="flex h-10 mb-5">
        <button
          type="button"
          className="flex space-x-2 items-center justify-center bg-gradient-to-b from-zinc-50 to-gray-800 text-black rounded-xl p-2 hover:bg-gradient-to-t hover:from-black hover:to-slate-100 transition duration-300"
          title="All"
        >
          ALL <IoIosArrowDown />
        </button>
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-between w-full">
        
         <div className="flex items-center gap-2 bg-gradient-to-r from-white to-slate-500 p-2 rounded-md sm:ml-5 ml-2">
           <input type="text" title="Search"
           className="bg-transparent outline-none placeholder:text-black sm:w-auto w-full text-sm"
          placeholder="Search ..." />

           <div className="bg-gradient-to-b from-zinc-50 to-black rounded-full w-7 h-7 flex items-center justify-center">
          <IoMicOutline />
           </div>
         </div>
         <div className="sm:ml-4 ml-2 flex w-full">
           <Image
          src={
            "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743890913/foodapp/home/f91xev2kbfb18kopo7g8.png"
          }
          alt="Delicious food image"
          width={20}
          height={10}
          className="w-auto h-auto object-cover rounded-lg"
           />
         </div>
         <div className="sm:ml-4 ml-2 justify-end flex flex-col items-center">
           <ul className="flex gap-2">
          <li className="bg-[#383D38] p-2 rounded-full">
            <FaFacebook />
          </li>
          <li className="bg-[#383D38] p-2 rounded-full">
            <FaInstagram />
          </li>
          <li className="bg-[#383D38] p-2 rounded-full">
            <FaTiktok />
          </li>
           </ul>
         </div>
          </div>
        </div>
      </div>
       <div className="flex justify-center items-center">
      <Image
        src={
          "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743887538/foodapp/home/gmwvg4qw9shjr9pp99gw.png"
        }
        alt=""
        width={790}
        height={0}
        className="w-auto h-auto rounded-lg shadow"
      />
       </div>
      <div>
        <ul
          className={`flex gap-5 mt-4 sm:mr-5 mr-2 text-center ${
          openlastCheckout ? "justify-end" : "justify-center"
          }`}
        >
          <li className="w-28 h-10 items-center justify-left item-center p-1 text-black bg-white rounded-full font-bold flex">
          <Image
         src={
         "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743891343/foodapp/home/kgtcvm2r1bmxylutldij.png"
         }
         alt=""
         width={17}
         height={10}
         className="bg-[#D9D9D9] mr-2 rounded-full p-1 w-auto h-auto object-cover"
          />
          Pizza
          </li>
          <li className="w-28 h-10 space-x-2 items-center justify-left item-center p-1 text-black bg-white rounded-full font-bold flex">
          <Image
         src={
         "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743891344/foodapp/home/ppeesglp0drkmhkbpbqx.png"
         }
         alt=""
         width={17}
         height={10}
         className="bg-[#D9D9D9] mr-2 rounded-full p-1 w-auto h-auto object-cover"
          />
          Burger
          </li>
          <li className="w-28 h-10 space-x-2 items-center justify-left item-center p-1 text-black bg-white rounded-full font-bold flex">
          <Image
         src={
         "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743891346/foodapp/home/e1gqc7keyin6zewcyuyn.png"
         }
         alt=""
         width={17}
         height={10}
         className="bg-[#D9D9D9] mr-2 rounded-full p-1 w-auto h-auto object-cover"
          />
          Fries
          </li>
          <li className="w-28 h-10 space-x-2 items-center justify-left item-center p-1 text-black bg-white rounded-full font-bold flex">
          <Image
         src={
         "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743891347/foodapp/home/q5lg8drecmuppjyjryy1.png"
         }
         alt=""
         width={17}
         height={10}
         className="bg-[#D9D9D9] mr-2 rounded-full p-1 w-auto h-auto object-cover"
          />
          Pack
          </li>
          <li className="font-semibold leading-2 text-[#FF9921] flex items-center justify-center">
          See All
          </li>
        </ul>
      </div>

        <div
        className={`flex gap-2 mt-1 sm:ml-5 ml-2 flex-wrap ${
          openlastCheckout ? "" : "justify-center"
        }`}
        >
       
        <div className="flex flex-col sm:flex-row bg-white text-black my-3 py-2 sm:pr-5 pr-2 rounded-2xl">
          <Image
          src={
         "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743896607/foodapp/home/qo0jq7wucwfegd2xmjqi.png"
          }
          alt=""
          width={210}
          height={210}
          />
          <div className="text-center sm:mr-10 sm:ml-5 flex flex-col items-center justify-center">
          <div>
          <h1 className="font-bold text-[2rem]">Burger</h1>
          <p className="text-gray-500">10-15 minutes</p>
          <p className=" leading-x-4">$10</p>
          <button
          title="addBtn"
          className="text-[2rem] rounded-md sm:ml-20 mt-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)] hover:bg-gray-200"
          >
          <GoPlus />
          </button>
          </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row bg-white text-black my-3 py-2 sm:pr-5 pr-2 rounded-2xl">
          <Image
          src={
          "https://res.cloudinary.com/dgjbaeyok/image/upload/v1743896604/foodapp/home/mlvryyckcsrewnt4bt3u.png"
          }
          alt=""
          width={210}
          height={210}
          />
          <div className="text-center sm:mr-10 sm:ml-5 flex flex-col items-center justify-center">
          <div>
          <h1 className="font-bold text-[2rem]">Fries</h1>
          <p className="text-gray-500">10-15 minutes</p>
          <p className=" leading-x-4">$10</p>
          <button
          title="addBtn"
          className="text-[2rem] rounded-md sm:ml-20 mt-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)] hover:bg-gray-200"
          >
          <GoPlus />
          </button>
          </div>
          </div>
        </div>
        </div>
       </div>
        </> );
}
 
export default Offers;