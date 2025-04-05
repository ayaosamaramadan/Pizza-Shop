import Image from 'next/image'
const Header = () => {
    return (
        <header className="bg-[#201818] h-[100vh]">
            <div className="">
                <ul>
                    <li>
                        <div className="flex justify-center items-center mt-15">
                            <Image
                                src={"https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877315/foodapp/nav/xzxr5z9onadfrizhrtpj.png"}
                                alt=""
                                width={65}
                                height={65}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="mt-5 p-5 space-y-8">
                            <Image
                                src={"https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/dwtgczzhkypbtzgkhsmp.png"}
                                alt=""
                                width={30}
                                height={65}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                            <Image
                                src={"https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/rgyaqjk6wxo1s4oajdn4.png"}
                                alt=""
                                width={30}
                                height={65}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                            <Image
                                src={"https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/r2piiovuopu0xufj8zyl.png"}
                                alt=""
                                width={30}
                                height={65}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                            <Image
                                src={"https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/ldjnb0lww4nahz25nvv5.png"}
                                alt=""
                                width={30}
                                height={65}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                            <Image
                                src={"https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877467/foodapp/nav/v39u68lbouu22v7axftr.png"}
                                alt=""
                                width={30}
                                height={65}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                            <Image
                                src={"https://res.cloudinary.com/dgjbaeyok/image/upload/v1743877466/foodapp/nav/tsrkj0grj92lr22x5gsl.png"}
                                alt=""
                                width={30}
                                height={65}
                                className="hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
