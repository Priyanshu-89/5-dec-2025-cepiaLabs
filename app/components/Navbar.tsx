"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCrossCircled } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-slate-700 text-slate-50 px-2 py-4">
            <div className="container mx-auto flex items-center justify-between">

                <Link
                    href="/"
                    className="
                         text-lg sm:text-2xl font-semibold flex items-center gap-x-1
                         transition-all duration-300
                         hover:text-orange-600
                          "
                >
                 <FaGithub />  GitHub Profile Fetcher       
                </Link>



                <button
                    className="md:hidden text-3xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <RxCrossCircled /> : <HiOutlineMenuAlt2 />}
                </button>


                <div
                    className={`
            md:flex md:flex-row flex flex-col md:items-center md:static md:w-auto
            absolute left-0 top-14 w-full bg-slate-700 md:bg-transparent px-4 py-4 md:p-0
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 md:opacity-100 md:max-h-none"}
          `}
                >
                    <Link
                        href="/"
                        className={`px-2 py-1    ${pathname === "/" ? "text-orange-600 font-semibold" : ""
                            }`}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className={`px-2 py-1  ${pathname === "/about" ? "text-orange-600 font-semibold" : ""
                            }`}
                    >
                        About
                    </Link>

                    <Link
                        href="/services"
                        className={`px-2 py-1  ${pathname === "/services" ? "text-orange-600 font-semibold" : ""
                            }`}
                    >
                        Services
                    </Link>

                    <Link
                        href="/contact"
                        className={`px-2 py-1  ${pathname === "/contact" ? "text-orange-600 font-semibold" : ""
                            }`}
                    >
                        Contact
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
