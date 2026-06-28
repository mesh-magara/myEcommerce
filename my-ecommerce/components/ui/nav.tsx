import Image from "next/image";

type Navigation = {
  name: string;
  url: string;
};

const Nav = () => {
  const navItems: Navigation[] = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Serivces", url: "/services" },
    { name: "FAQS", url: "/faqs" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <div className="bg-gray-800 flex flex-wrap justify-between items-center p-4 text-orange-500 top:0 fixed w-full `${isScolled ? bg-gray-800 opacity-75 : bg-gray-400}`">
      <div className=" flex items-center gap-3.5 p-2.5">
        <div className="relative w-16 h-16 ">
          <Image
            src="/logo.jpg"
            fill={true}
            alt="logo"
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-shadow-black font-bold">BEAUTY SHOP</h1>
      </div>
      <ul className="flex justify-around  items-center gap-4.5">
        {navItems.map((item, index) => {
          return (
            <a key={index} href={`${item.url}`} className=" hover:text-white">
              {item.name}
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
