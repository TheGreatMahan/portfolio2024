import React, { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Technologies", href: "/technologies" },
    // { name: "Reachout", href: "/reachout" }
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-space-gray text-white p-5 sticky w-full z-10 top-0 opacity-90 flex items-center justify-center ">
            <div className="container flex max-w-[1000px] items-center justify-between mx-3">
                <div className="text-lg font-bold">
                    <Link className="hover:text-brand-light" to="/about">
                        Mahan Mehdipour
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8 text-brand-blue">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="hover:text-brand-light"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-icons">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </span>
                </button>
                {isOpen && (
                    <div
                        className={`bg-space-gray absolute top-16 right-0 bg-brand-dark w-full md:w-auto p-5 md:hidden transition-all ease-in-out duration-300 opacity-90${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="block text-white hover:bg-brand-blue p-2"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
