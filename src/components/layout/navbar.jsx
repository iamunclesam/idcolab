import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../../assets/idcolab.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-[200] fixed w-full mb-10 px-3 lg:px-16">
      {/*bg-blue items-center flex justify-between px-8 h-16*/}
      <div className="bg-white dark:bg-gray-900  max-w-screen-xl flex border lg:border-gray-700 border-gray-300 rounded-full my-6 px-4 flex-wrap items-center justify-between mx-auto py-2">
        <a href="/">
          <img src={logo} alt="idcolab-logo" className="w-40" />
        </a>

        {/* Styling for larger screens */}
        <ul className="text-navy hidden lg:flex justify-between gap-9 font-medium pl-60">
          <li className="">
            <a href="/">3D MODELS</a>
          </li>

          <li>
            <a href="/proficiency">CUSTOM 3D SERVICE</a>
          </li>

          <li>
            <a href="/projects">FILE VIEWERS</a>
          </li>
        </ul>

        <div className="lg:ml-40">
          <ul className="flex justify-between gap-6">
                <li>
                <a href="/blog">
                    <LuMoon /> <LuSun className="hidden" />
                </a>
                </li>
                <li>
                <a href="" className="flex">
                    LOG IN <MdOutlineArrowRightAlt />
                </a>
                </li>
          </ul>
        </div>

        <button className="border border-black px-5 py-3 rounded-2xl text-center items-center hover:bg-black hover:text-blue hidden lg:flex font-playFair font-medium">
          <a href="/contact">SIGN UP</a>
        </button>

        {/* Menu button for small screens */}
        <button onClick={toggleMenu} className="lg:hidden">
          <CgMenuRightAlt className="text-3xl" />
        </button>
      </div>
      {/* Nav items for smaller screens */}
      {menuOpen && (
        <div className="mt-2 bg-blue rounded pb-8 mx-4">
          <ul className="text-navy font-playFair font-medium py-4 pl-5">
            <li className="mb-2">
              <a href="/">3D MODELS</a>
            </li>

            <li className="mb-2">
              <a href="/proficiency">CUSTOM 3D SERVICE</a>
            </li>

            <li className="mb-2">
              <a href="/projects">FILE VIEWERS</a>
            </li>

            <li className="mb-2">
              <a href="/blog">Blog</a>
            </li>
          </ul>
          <button className="border border-black px-4 py-2 ml-4 rounded-2xl text-center items-center hover:bg-black hover:text-blue font-playFair font-medium text-sm">
            <a href="/contact">SIGN UP</a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import logo from "../../assets/idcolab.svg";
// import { LuMoon, LuSun } from "react-icons/lu";
// import { MdOutlineArrowRightAlt } from "react-icons/md";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//       setMenuOpen(!menuOpen);
//     };
//     return (
//       <>
//         <nav className=" z-30 fixed w-full mb-10 px-3 lg:px-16">
//           <div className="bg-white dark:bg-gray-900  max-w-screen-xl flex border lg:border-gray-700 border-gray-300 rounded-full my-6 px-4 flex-wrap items-center justify-between mx-auto py-2">
//             <a
//               href="/"
//               className="flex items-center space-x-3 rtl:space-x-reverse"
//             >
//               <img src={logo} alt="idcolab-logo" className=" w-40" />
//             </a>
//             <button
//               data-collapse-toggle="navbar-default"
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-default"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//             <div
//               className="hidden w-full md:block md:w-auto"
//               id="navbar-default"
//             >
//               <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                   <a
//                     href="#"
//                     className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                     aria-current="page"
//                   >
//                     3D MODELS
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     CUSTOM 3D SERVICE
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                   >
//                     FILE VIEWERS
//                   </a>
//                 </li>
//               </ul>
//               <div>
//                 <ul>
//                   <li>
//                     <a
//                       href="#"
//                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                     >
//                       <LuMoon /> <LuSun className="hidden" />
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                     >
//                       LOG IN <MdOutlineArrowRightAlt />
//                     </a>
//                   </li>
//                 </ul>
//                 <button>SIGN UP</button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
// }

// export default Navbar
