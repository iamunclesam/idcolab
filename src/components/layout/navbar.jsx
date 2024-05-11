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
      <div className="bg-white z-[200] max-w-screen-xl flex border border-white shadow-md shadow-slate-400 rounded-full my-6 px-4 flex-wrap items-center justify-between mx-auto py-2">
        <a href="/">
          <img src={logo} alt="idcolab-logo" className="w-20 md:w-40" />
        </a>

        {/* Styling for larger screens */}
        <ul className="hidden lg:flex justify-between gap-9 font-semibold pl-6 w-[40%]">
          <li className="hover:text-[#FECB03]">
            <a href="/">3D MODELS</a>
          </li>

          <li className="hover:text-[#FECB03]">
            <a href="">CUSTOM 3D SERVICE</a>
          </li>

          <li className="hover:text-[#FECB03]">
            <a href="">FILE VIEWERS</a>
          </li>
        </ul>

        <div className="lg:ml-40 mr-12">
          <ul className="flex justify-between gap-6 font-semibold">
            <li>
              <a href="">
                <LuMoon /> <LuSun className="hidden" />
              </a>
            </li>
            <li className="hover:text-[#FECB03] align-middle hidden md:flex">
              <a href="" className="flex">
                LOG IN <MdOutlineArrowRightAlt className="ml-1 mt-1" />
              </a>
            </li>
          </ul>
        </div>

        <button className="border border-[#6628c6] hover:border-[#6366F1] px-3 py-2 text-sm rounded-lg text-center items-center bg-[#6628c6] hover:bg-[#6366F1] text-white hidden lg:flex font-semibold mr-6">
          <a href="">SIGN UP</a>
        </button>

        {/* Menu button for small screens */}
        <button onClick={toggleMenu} className="lg:hidden">
          <CgMenuRightAlt className="text-3xl" />
        </button>
      </div>
      {/* Nav items for smaller screens */}
      {menuOpen && (
        <div className="bg-white w-72 h-72 shadow-md shadow-slate-400 border border-gray-300 rounded-lg pb-8 mx-4 float-right text-gray-500">
          <ul className="font-semibold py-4 pl-5">
            <li className="mt-2 mb-4 hover:text-black">
              <a href="">3D MODELS</a>
            </li>

            <li className="mb-4 hover:text-black">
              <a href="">CUSTOM 3D SERVICE</a>
            </li>

            <li className="mb-4 hover:text-black">
              <a href="">FILE VIEWERS</a>
            </li>

            <li className="mb-4 hover:text-black">LOG IN</li>
          </ul>
          <button className="border border-[#6628c6] hover:border-[#6366F1] px-4 py-2 ml-4 text-white rounded-2xl text-center items-center bg-[#6628c6] hover:bg-[#6366F1] font-semibold text-sm">
            <a href="">SIGN UP</a>
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
