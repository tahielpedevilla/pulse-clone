import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

import MobileNav from "./MobileNav";

const Navbar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header className="md:bg-[#eafaf1] border-b-[#d6dae5] border-b md:border-none">
      <div className="md:container py-4 md:py-12 bg-white md:bg-[#eafaf1] mx-auto px-6">
        <nav className="flex items-center justify-between flex-wrap">
          <Link href="#">
            <Image alt="Logo Pulse" height={49} priority="true" src="/pulse-logo.svg" width={119} />
          </Link>
          <ul className="hidden w-full flex-grow md:flex md:items-center md:w-auto md:flex-grow-0 text-base font-bold py-1">
            <li className="mr-10">
              <Link
                className={router.asPath === "/features" ? "text-[#062c27]" : "text-green-600"}
                href="#"
              >
                Features
              </Link>
            </li>
            <li className="mr-10">
              <Link
                className={
                  router.asPath === "/customer-stories" ? "text-[#062c27]" : "text-green-600"
                }
                href="#"
              >
                Customer Stories
              </Link>
            </li>
            <li className="mr-10">
              <Link
                className={router.asPath === "/" ? "text-[#062c27]" : "text-green-600"}
                href="#"
              >
                Pricing
              </Link>
            </li>
            <li className="mr-10">
              <Link
                className={router.asPath === "/blog" ? "text-[#062c27]" : "text-green-600"}
                href="#"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={`
                  h-auto leading-normal text-base px-4 py-2 border-[2px] border-green-600 
                    ${router.asPath === "/blog" ? "text-[#062c27]" : "text-green-600"}
                    `}
                href="#"
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <button
            className="block md:hidden text-green-600 hover:text-green-400"
            onClick={toggleOpen}
          >
            {isOpen ? (
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 27 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu - Close</title>
                <path d="M1.833.918l24.749 24.749-1.414 1.414L.418 2.332z" />
                <path d="M25.167.919l1.414 1.414L1.833 27.08.419 25.667z" />
              </svg>
            ) : (
              <svg
                className="fill-current h-8 w-8"
                viewBox="0 0 35 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu - Open</title>
                <path d="M0 0h35v2H0zM0 10h35v2H0zM0 20h35v2H0z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
      {isOpen && <MobileNav />}
    </header>
  );
};

export default Navbar;
