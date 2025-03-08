'use client'
import Link from "next/link"
import { useContext } from "react"
import { FaUserCircle } from "react-icons/fa"
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md"

import ThemeContext from "@/context/themeContext"


const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
            <div className="flex items-center w-full md:2/3">
                <Link href="home" className="font-black text-tertiary-light">
                    EventX
                </Link>
                <ul className="flex items-center ml-5">
                    <li className="flex items-center">
                    <Link href="/">
                        <FaUserCircle className="cursor-pointer"/>
                    </Link>
                    </li>
                    <li className="ml-2">
                        {darkTheme ? (
                            <MdOutlineLightMode className="cursor-pointer"
                                onClick={() => {
                                setDarkTheme(false);
                                localStorage.removeItem("event-theme")
                            } } />
                        ) : (
                                <MdDarkMode className="cursor-pointer"
                                onClick={() => {
                                    setDarkTheme(true);
                                    localStorage.setItem("event-theme", "true");
                                } }/>
                        )}
                    </li>
                </ul>
            </div>
            <ul className="flex items-center justify-between w-full  mt-4 mx-4">
                <li className="hover:-translate-y-2 duration-500 transition-all text-2xl font-bold hover:text-red-400">
                    <Link href="/home">Home</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all text-2xl font-bold hover:text-red-400">
                    <Link href="/evently">Events</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all text-2xl font-bold hover:text-red-400">
                    <Link href="/contact">About us</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all text-2xl font-bold hover:text-red-400">
                    <a href="/api/logout">logout</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
