import { useState } from 'react';
import imgTwo from '../assets/headerLine.svg'
import imgOne from '../assets/id-image.svg';
import Navbar from '../components/layout/navbar.jsx';
import Image from '../assets/team.jpg';
import ReactPlayer from "react-player";
// import video from '../assets/videos/interior.mp4';
import '../App.css';

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900 flex items-center lg:h-screen pt-16 mt-4 md:mx-16 md:mt-6">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-16 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 order-2 lg:order-1">
            <h1 className="lg:max-w-2xl text-center lg:text-left mb-4 my-6 text-3xl font-bold md:text-5xl xl:text-5xl dark:text-white line-height">
              Revolutionizing Client Collaboration: IDCOLAB for Interior
              Designers
            </h1>
            <p className="lg:max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-sm dark:text-gray-400 text-xs text-center lg:text-left">
              Our cloud-based Collaboration tool streamlines the design
              process for interior designers. Collaborate seamlessly with
              clients, share ideas, and make decisions in real-time.
            </p>

            <form class="lg:max-w-md">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative items-center">
                <input
                  type="search"
                  id="default-search"
                  class="block w-full h-16 px-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2 mt-1.5 bg-gradient-to-br from-purple-700 to-blue-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-md text-sm px-4 py-3.5 dark:bg-dark-800 dark:hover:bg-dark-900 dark:focus:ring-blue-800"
                >
                  Start Collaborations
                </button>
              </div>
            </form>

            <p className="flex items-center text-sm text-gray-500 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-400"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
                />
              </svg>
              For teams & individuals - Web and Mobile
            </p>

            <p className="flex items-center text-sm text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-400"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
                />
              </svg>
              Try our forever free plan.No credit card required
            </p>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex order-1 lg:order-2 ">
            <img
              src={imgOne}
              alt="mockup"
              className="lg:w-full sm:w-full mx-auto p-8 sm:p-10 lg:p-0 breathing-image"
            />
          </div>
        </div>
      </section>

      <div className="bg-[#E2E8F0] dark:bg-gray-800 md:p-16 p-4">
        <section className="videoSection  mx-auto flex flex-col md:p-20 p-4 relative">
          {/* Background Image */}
          <img
            src={Image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
          {/* Background Overlay */}
          <div className="absolute w-full inset-0 bg-gradient-to-r from-[#6628c6] via-[#6628c6] to-[#773AD8] opacity-95 rounded-3xl"></div>

          {/* Grid for Video and Text */}
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {/* Video */}
            <div className="rounded-lg overflow-hidden flex justify-center">
              <iframe
                className="w-full h-[250px] sm:h-96 lg:h-auto rounded-lg"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <p className="text-lg md:text-2xl lg:text-2xl text-white font-space-grotesk">
                Welcome to IDCOLAB, the ultimate private hub for interior designers to seamlessly connect with their clients and bring effective collaboration to life. Our platform boasts a user-friendly interface and cutting-edge tools, making interior design project collaboration an absolute breeze. Design development is mastered here, and collaboration is done right.
              </p>
              <button className="bg-white w-36 md:w-36 h-14 rounded-lg text-lg md:text-xl font-semibold mt-8 md:mt-12 lg:mt-14">
                Learn More
              </button>
            </div>
          </div>
        </section>

      </div>

    </>
  );
}

export default Home