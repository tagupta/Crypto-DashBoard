import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <nav className="bg-gray-800 flex  justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <a href="#" className="flex items-center">
                    <MdOutlineDashboardCustomize fontSize={38} className="w-32 cursor-pointer text-white" />
                </a>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                    <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                </div>
            </div>
            <div className="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false"
                    className=" md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-gray-700
                rounded-lg text-sm p-2.5 mr-1">
                    <AiOutlineSearch fontSize={21} className="text-white" />
                    <span className="sr-only">Search</span>
                </button>
                <div className="hidden relative md:block md:ml-5">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <AiOutlineSearch fontSize={21} className="text-gray-700" />
                    </div>
                    <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                </div>
                <button data-collapse-toggle="navbar-search" type="button"
                    className="md:hidden text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-gray-700
                    rounded-lg text-sm p-2.5 mr-1"
                    aria-controls="navbar-search" aria-expanded="false">
                    <GiHamburgerMenu fontSize={21} className="text-white" />
                    <span className="sr-only">Open menu</span>
                </button>
            </div>
        </nav>
    )
}

export default Header;
