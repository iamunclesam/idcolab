import { useState } from 'react';
import imgOne from '../assets/id-image.svg'
import Navbar from '../components/layout/navbar.jsx'
import '../App.css'

const Home = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
        <Navbar />
            <section className="bg-white dark:bg-gray-900 flex items-center md:h-screen md:px-12">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7 order-2 md:order-1">
                        <h1 className="max-w-2xl text-center md:text-left mb-4 my-6 text-3xl font-bold md:text-5xl xl:text-5xl dark:text-white line-height">Revolutionizing Client Collaboration: IDCOLAB forInterior Designers</h1>
                        <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-sm dark:text-gray-400">Our cloud-based Collaboration tool streamlines the design process for interior designers. Collaborate seamlessly with clients, share ideas, and make decisions in real-time.</p>

                        <form class="max-w-md">
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                               
                                <input type="search" id="default-search" class="block w-full p-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                                <button type="submit" class="text-white text-lg absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3.5 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-blue-800">Start Collaborations</button>
                            </div>
                        </form>

                        <p className="text-sm text-gray-400 my-4">
                        For teams & individuals-web,mobile
                        </p>

                        <p className="text-sm text-gray-400 m">
                        *Try our forever free plan.No credit card required
                        </p>

                        
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex order-1 md:order-2 " onClick={toggleExpand}>
                        <img src={imgOne} alt="mockup" className="w-full p-8 md:p-0 animate-breathing infinite" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home