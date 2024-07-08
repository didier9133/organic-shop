import Link from "next/link";
import { IoCartOutline, IoSearch } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="flex px-5 justify-between items-center h-14">
      {/* logo */}
      <div>
        <Link href={"/"}>
          <span className="font-bold antialiased">Organic</span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Categorias  */}
      <div className="hidden sm:flex">
        <Link href={"/category/bandolero"}>
          <span className="rounded-md m-2 p-2 transition-all hover:bg-gray-100 ">
            Bandoleros
          </span>
        </Link>
        <Link href={"/category/cartera"}>
          <span className="rounded-md m-2 p-2 transition-all hover:bg-gray-100 ">
            Carteras
          </span>
        </Link>
        <Link href={"/category/cart"}>
          <span className="rounded-md m-2 p-2 transition-all hover:bg-gray-100 ">
            Bolsos
          </span>
        </Link>
      </div>

      <div className="flex gap-2">
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menú
        </button>

        {/* Buscador  */}
        <div className="flex items-center">
          <Link href={"/search"}>
            <IoSearch className="cursor-pointer" size="1.6em" />
          </Link>
        </div>

        {/* Carrito  */}
        <div className="flex items-center">
          <div className="relative">
            <Link href={"/search"}>
              <IoCartOutline className="cursor-pointer" size="1.7em" />
            </Link>
            <span className="absolute -top-2 -right-1 rounded-full text-xs font-bold bg-red-300 px-1 ">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
