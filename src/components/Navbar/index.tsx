import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed bg-[#201818] h-[100vh] w-auto hover:w-[250px] transition-all duration-300 ease-in-out z-10">
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
            <div className="mt-5 p-5 space-y-4">
              <Link href="/section1">
              <Image
                  src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/v39u68lbouu22v7axftr.png"
                  alt="Section 5"
                  width={30}
                  height={65}
                  className="mb-8 hover:scale-110 transition-transform duration-300"
                />
                
              </Link>

              <Link href="/section2">
                <Image
                  src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/rgyaqjk6wxo1s4oajdn4.png"
                  alt="Section 2"
                  width={30}
                  height={65}
                  className="mb-8 hover:scale-110 transition-transform duration-300"
                />
              </Link>

              <Link href="/section3">
               
                <Image
                  src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/dwtgczzhkypbtzgkhsmp.png"
                  alt="Section 1"
                  className="mb-8 hover:scale-110 transition-transform duration-300"
                  width={30}
                  height={65}
                />
              </Link>

              <Link href="/section4">
                <Image
                  src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/ldjnb0lww4nahz25nvv5.png"
                  alt="Section 4"
                  width={30}
                  height={65}
                  className="mb-8 hover:scale-110 transition-transform duration-300"
                />
              </Link>

              <Link href="/section5">
              <Image
                  src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/r2piiovuopu0xufj8zyl.png"
                  alt="Section 3"
                  width={30}
                  height={65}
                  className="mb-8 hover:scale-110 transition-transform duration-300"
                />
              </Link>

              <Link href="/section6">
                <Image
                  src="https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877466/foodapp/nav/tsrkj0grj92lr22x5gsl.png"
                  alt="Section 6"
                  width={30}
                  height={65}
                  className="hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
          </li>
            <li>
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full text-white opacity-0 hover:opacity-100 transition-opacity duration-300 bg-opacity-50">
              <Link href="/">
              <li className="cursor-pointer mb-9 mt-[-19px] hover:text-yellow-400 hover:scale-110 transition-transform duration-300">
                Home
              </li>
              </Link>

              <Link href="/menu">
              <li className="cursor-pointer mb-9 hover:text-yellow-400 hover:scale-110 transition-transform duration-300">
                Menu
              </li>
              </Link>

              <Link href="/account">
              <li className="cursor-pointer mb-9 hover:text-yellow-400 hover:scale-110 transition-transform duration-300">
              Account
              </li>
              </Link>

              <Link href="/feedback">
              <li className="cursor-pointer mb-9 hover:text-yellow-400 hover:scale-110 transition-transform duration-300">
                Feedback
              </li>
              </Link>

              <Link href="/settings">
              <li className="cursor-pointer mb-10 hover:text-yellow-400 hover:scale-110 transition-transform duration-300">
              Settings
              </li>
              </Link>

              <Link href="/help">
              <li className="cursor-pointer hover:text-yellow-400 hover:scale-110 transition-transform duration-300">
                Help
              </li>
              </Link>
            </ul>
            </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
