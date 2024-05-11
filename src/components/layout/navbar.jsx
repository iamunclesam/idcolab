import { useState, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../../assets/idcolab.svg";
import { LuMoon, LuSun } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Navbar = () => {
  // To initialize theme state with the value stored in local storage or default to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Update the theme in local storage and apply it to the document's root element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Toggle between light and dark theme
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="z-[200] fixed w-full mb-10 px-3 lg:px-16 bg-white dark:bg-gray-900">
      <div
        className={`bg-white ${
          theme === "dark" ? "dark:bg-gray-800" : ""
        } z-[200] max-w-screen-xl flex items-center justify-between border border-white dark:border-gray-800 shadow-md shadow-slate-400 dark:shadow-none rounded-full my-6 px-4 mx-auto py-4 lg:text-xs`}
      >
        <a href="/">
          <svg
            className="w-20 md:w-40 dark:fill-white"
            viewBox="0 0 226 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_423_678)">
              <path
                d="M10.1616 57.3703C8.33944 57.3703 6.8623 55.9007 6.8623 54.0882V52.0369C6.8623 50.2243 8.33944 48.7549 10.1616 48.7549H51.1608C52.9829 48.7549 54.4601 50.2243 54.4601 52.0369V54.0882C54.4601 55.9007 52.9829 57.3703 51.1608 57.3703H10.1616Z"
                fill="#808080"
              />
            </g>
            <path
              d="M53.8904 1.5752H7.70064C5.8785 1.5752 4.40137 3.05238 4.40137 4.87457V51.0658C4.40137 52.888 5.8785 54.3652 7.70064 54.3652H53.8904C55.7126 54.3652 57.1897 52.888 57.1897 51.0658V4.87457C57.1897 3.05238 55.7126 1.5752 53.8904 1.5752Z"
              fill="#FECB03"
            />
            <path
              d="M19.0984 42.5991H12.1699V11.8135H19.0984V42.5991ZM35.4066 42.5991H25.4758V36.3961H35.3143C37.4081 36.3961 39.0865 36.1511 40.349 35.6609C41.6114 35.1402 42.5352 34.2212 43.1203 32.904C43.7055 31.5562 43.9979 29.6569 43.9979 27.2063C43.9979 24.7558 43.7055 22.8719 43.1203 21.5546C42.5352 20.2069 41.6114 19.2879 40.349 18.7977C39.0865 18.277 37.4081 18.0166 35.3143 18.0166H25.4758V11.8135H35.4066C38.7323 11.8135 41.5807 12.4261 43.9518 13.6514C46.3536 14.8767 48.2012 16.6381 49.4945 18.9356C50.7878 21.233 51.4345 23.9899 51.4345 27.2063C51.4345 30.4227 50.7878 33.1797 49.4945 35.4771C48.2012 37.7745 46.3536 39.5358 43.9518 40.7612C41.5807 41.9866 38.7323 42.5991 35.4066 42.5991ZM30.5105 42.5991H23.5821V11.8135H30.5105V42.5991Z"
              fill="black"
            />
            <path
              d="M75.7937 43.0591C72.6837 43.0591 70.02 42.4159 67.8029 41.1293C65.6166 39.812 63.9229 37.9741 62.722 35.6154C61.5519 33.2261 60.9668 30.4232 60.9668 27.2068C60.9668 23.9904 61.5519 21.2028 62.722 18.8442C63.9229 16.4548 65.6166 14.6169 67.8029 13.3303C70.02 12.0131 72.6837 11.3545 75.7937 11.3545C78.8731 11.3545 81.4444 11.8599 83.5074 12.8708C85.6015 13.8817 87.1873 15.3214 88.265 17.19C89.3428 19.028 89.8816 21.2182 89.8816 23.7607V24.1742H82.4912V23.9445C82.4912 21.7389 81.9831 20.2074 80.967 19.3496C79.9508 18.4613 78.2111 18.0171 75.7475 18.0171C73.9923 18.0171 72.5759 18.2775 71.4981 18.7982C70.4204 19.3189 69.6198 20.2379 69.0962 21.5551C68.6036 22.8724 68.3572 24.7563 68.3572 27.2068C68.3572 29.6269 68.6036 31.5108 69.0962 32.8585C69.6198 34.1758 70.4204 35.0947 71.4981 35.6154C72.5759 36.1361 73.9923 36.3966 75.7475 36.3966C78.2111 36.3966 79.9508 35.9678 80.967 35.11C81.9831 34.2217 82.4912 32.6747 82.4912 30.4692V30.2394H89.8816V30.653C89.8816 33.1954 89.3428 35.401 88.265 37.2696C87.1873 39.1076 85.6015 40.532 83.5074 41.5428C81.4444 42.5537 78.8731 43.0591 75.7937 43.0591ZM107.731 43.0591C104.621 43.0591 101.957 42.4159 99.74 41.1293C97.5536 39.812 95.86 37.9741 94.6591 35.6154C93.4582 33.2261 92.8577 30.4232 92.8577 27.2068C92.8577 23.9904 93.4582 21.2028 94.6591 18.8442C95.86 16.4548 97.5536 14.6169 99.74 13.3303C101.957 12.0131 104.621 11.3545 107.731 11.3545C110.81 11.3545 113.458 12.0131 115.675 13.3303C117.893 14.6169 119.586 16.4548 120.756 18.8442C121.957 21.2028 122.558 23.9904 122.558 27.2068C122.558 30.4232 121.957 33.2261 120.756 35.6154C119.586 37.9741 117.893 39.812 115.675 41.1293C113.458 42.4159 110.81 43.0591 107.731 43.0591ZM107.731 36.3966C109.486 36.3966 110.902 36.1361 111.98 35.6154C113.089 35.0641 113.889 34.1298 114.382 32.8126C114.906 31.4648 115.167 29.5962 115.167 27.2068C115.167 24.7868 114.906 22.9183 114.382 21.6011C113.889 20.2838 113.089 19.3649 111.98 18.8442C110.902 18.2928 109.486 18.0171 107.731 18.0171C105.945 18.0171 104.498 18.2928 103.389 18.8442C102.311 19.3649 101.511 20.2838 100.987 21.6011C100.494 22.9183 100.248 24.7868 100.248 27.2068C100.248 29.5962 100.494 31.4648 100.987 32.8126C101.511 34.1298 102.311 35.0641 103.389 35.6154C104.498 36.1361 105.945 36.3966 107.731 36.3966ZM132.821 42.5997H125.892V11.814H132.821V42.5997ZM148.802 42.5997H127.832V36.3966H148.802V42.5997ZM156.866 42.5997H149.66L161.069 11.814H171.138L182.547 42.5997H175.018L168.506 24.8175L166.242 17.8792H165.78L163.425 24.8175L156.866 42.5997ZM176.497 35.7533H155.988V29.5962H176.497V35.7533ZM199.972 42.5997H183.991V11.814H199.233C201.451 11.814 203.313 12.0897 204.822 12.6411C206.33 13.1618 207.47 13.9889 208.24 15.1223C209.009 16.2557 209.395 17.7107 209.395 19.4874C209.395 21.3254 208.871 22.8264 207.825 23.9904C206.809 25.1239 205.268 25.8131 203.206 26.0581V26.5176C205.7 26.7014 207.562 27.4978 208.795 28.9069C210.025 30.3161 210.642 32.0621 210.642 34.1451C210.642 35.8605 210.241 37.3615 209.441 38.6481C208.671 39.9039 207.485 40.8843 205.885 41.5888C204.314 42.2628 202.343 42.5997 199.972 42.5997ZM190.919 29.5962V36.3966H199.742C201.003 36.3966 201.973 36.1975 202.651 35.7992C203.328 35.401 203.668 34.482 203.668 33.0423C203.668 31.5413 203.328 30.5918 202.651 30.1935C202.005 29.7952 201.035 29.5962 199.742 29.5962H190.919ZM190.919 18.0171V23.9904H198.772C200.065 23.9904 201.004 23.7914 201.589 23.3931C202.173 22.9948 202.467 22.1984 202.467 21.0038C202.467 19.7479 202.158 18.9361 201.543 18.5685C200.957 18.2009 200.034 18.0171 198.772 18.0171H190.919ZM222.023 42.5997H213.339V34.4667H222.023V42.5997Z"
              fill={theme === "dark" ? "white" : "black"}
            />
            <defs>
              <filter
                id="filter0_f_423_678"
                x="2.8623"
                y="44.7549"
                width="55.5977"
                height="16.6152"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="2"
                  result="effect1_foregroundBlur_423_678"
                />
              </filter>
            </defs>
          </svg>
        </a>

        {/* Styling for larger screens */}
        <ul className="hidden lg:flex justify-between gap-9 font-semibold pl-6 w-[40%] dark:text-gray-300">
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
          <ul className="flex justify-between gap-6 font-semibold dark:text-gray-300">
            <li className="hidden lg:flex">
              <a href="">
                {theme === "light" ? (
                  <LuMoon onClick={handleThemeSwitch} size={25} />
                ) : (
                  <LuSun onClick={handleThemeSwitch} size={25} />
                )}
              </a>
            </li>
            <li className="hover:text-[#FECB03] align-middle hidden lg:flex mt-2">
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
        <button className="lg:hidden ml-[20px]">
          <a href="">
            {theme === "light" ? (
              <LuMoon
                onClick={handleThemeSwitch}
                size={25}
                className="dark:text-gray-300"
              />
            ) : (
              <LuSun
                onClick={handleThemeSwitch}
                size={25}
                className="dark:text-gray-300"
              />
            )}
          </a>
        </button>
        <button onClick={toggleMenu} className="lg:hidden">
          <CgMenuRightAlt className="text-3xl dark:text-gray-300" />
        </button>
      </div>
      {/* Nav items for smaller screens */}
      {menuOpen && (
        <div
          className={`bg-white ${
            theme === "dark" ? "dark:bg-gray-900" : ""
          } w-72 h-72 shadow-md shadow-slate-400 dark:shadow-none border border-gray-300 rounded-lg pb-8 mx-4 float-right text-gray-500`}
        >
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
