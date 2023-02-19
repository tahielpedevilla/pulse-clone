import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="flex fixed top-[82px] h-full bottom-0 left-0 w-full p-6 bg-green-100/50 z-top md:hidden">
      <ul className="list-none">
        <li>
          <Link
            className="block py-2 text-4xl text-green-600 hover:text-[#062c27] font-bold leading-none no-underline"
            href="#"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 text-4xl text-green-600 hover:text-[#062c27] font-bold leading-none no-underline"
            href="#"
          >
            Customer Stories
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 text-4xl text-green-600 hover:text-[#062c27] font-bold leading-none no-underline"
            href="#"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 text-4xl text-green-600 hover:text-[#062c27] font-bold leading-none no-underline"
            href="#"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 text-4xl text-green-600 hover:text-[#062c27] font-bold leading-none no-underline"
            href="#"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="block py-2 text-4xl text-green-600 hover:text-[#062c27] font-bold leading-none no-underline"
            href="#"
          >
            Support
          </Link>
        </li>
        <li className="pt-4">
          <Link
            className="text-[#062c27] px-4 py-5 inline-block text-center relative font-bold text-lg leading-none bg-green-500"
            href="#"
          >
            Sign Up <span className="hidden  sm:inline"> for a Free 30-Day Trial</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
