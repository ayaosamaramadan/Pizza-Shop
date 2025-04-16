"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { IoHome, IoReorderThreeSharp, IoSettings } from "react-icons/io5";
import { MdMail, MdOutlineMenuBook } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { useAppDispatch } from "@/store/hooks";
import { setopenLastCheckout } from "@/store/pizzaSlice";

const Nav = () => {
     const dispatch = useAppDispatch();
    
      const openCheck = () => {
        dispatch(setopenLastCheckout());
        // console.log("openCheck":);
      };
    return ( <>
     <div className="fixed z-50 ">
        <IoReorderThreeSharp
        onClick={openCheck        }
         className="cursor-pointer opacity-100 text-gray-300 text-[2rem] ml-6 justify-center items-center mt-7" />
      </div>

      <header className="fixed pt-15 bg-[#201818] h-full w-auto hover:w-[250px] duration-300 ease-in-out z-10 sm:w-[80px] sm:hover:w-[250px]">
        <div>
          <ul>
            <li>
              <div className="cursor-pointer flex justify-center items-center mt-15">
                <Link href="/">
                  <Image
                    src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877315/foodapp/nav/xzxr5z9onadfrizhrtpj.png"
                    alt="Home"
                    width={65}
                    height={65}
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              </div>
            </li>
            <li>
              <div className="ml-1 p-5 space-y-5 mt-3 flex-col items-center">
                <Link href="/">
                  <IoHome className="text-gray-300 mb-8 text-3xl hover:text-yellow-400 transition-colors duration-300" />
                </Link>

                <Link href="/menu">
                  <MdOutlineMenuBook className="text-gray-300 mb-7 text-3xl hover:text-yellow-400 transition-colors duration-300" />
                </Link>

                <Link href="/section3">
                  <IoMdPerson className="text-gray-300 mb-8 text-3xl hover:text-yellow-400 transition-colors duration-300" />
                </Link>

                <Link href="/section4">
                  <MdMail className="text-gray-300 mb-8 text-3xl hover:text-yellow-400 transition-colors duration-300" />
                </Link>

                <Link href="/section5">
                  <IoSettings className="text-gray-300 mb-8 text-3xl hover:text-yellow-400 transition-colors duration-300" />
                </Link>

                <Link href="/section6">
                  <FaMessage className="text-gray-300 mb-7 text-3xl hover:text-yellow-400 transition-colors duration-300" />
                </Link>
              </div>
            </li>
            <li>
              <ul className="flex flex-col justify-center items-center absolute top-13 left-0 w-full h-full text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-opacity-50">
                <Link href="/">
                  <li className="cursor-pointer mb-9 mt-[-19px] hover:text-yellow-400 transition-transform duration-300">
                    Home
                  </li>
                </Link>

                <Link href="/menu">
                  <li className="cursor-pointer mb-9 hover:text-yellow-400 transition-transform duration-300">
                    Menu
                  </li>
                </Link>

                <Link href="/account">
                  <li className="cursor-pointer mb-9 hover:text-yellow-400 transition-transform duration-300">
                    Account
                  </li>
                </Link>

                <Link href="/feedback">
                  <li className="cursor-pointer mb-9 hover:text-yellow-400 transition-transform duration-300">
                    Feedback
                  </li>
                </Link>

                <Link href="/settings">
                  <li className="cursor-pointer mb-10 hover:text-yellow-400 transition-transform duration-300">
                    Settings
                  </li>
                </Link>

                <Link href="/help">
                  <li className="cursor-pointer hover:text-yellow-400 transition-transform duration-300">
                    Help
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </header>
      </> );
}
 
export default Nav;