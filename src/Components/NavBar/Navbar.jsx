import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="px-8 bg-[#0a192f] text-white fixed w-full">
                <nav className='grid grid-cols-12 py-4'>
                    <h1 className="col-span-5 font-semibold text-2xl">
                        <Link to='/'>
                            <span>爪丨尺卂乙</span>
                        </Link>
                    </h1>
                    <div className={`col-span-7 flex ${isOpen ? 'justify-between' : 'justify-end'} md:block`}>
                        <ul onClick={() => setIsOpen(false)} className={`font-semibold,pt-10 md:pt-0 text-center text-lg md:grid-cols-6 ${isOpen ? 'md:grid' : 'hidden'} md:grid`}>
                            <Link to="/">
                                <li className="hover:text-orange-400 font-semibold">Home</li>
                            </Link>
                            <Link to="/education">
                                <li className="hover:text-orange-400 font-semibold">Education</li>
                            </Link>
                            <Link to="/skills">
                                <li className="hover:text-orange-400 font-semibold">Skills</li>
                            </Link>
                            <Link to="/projects">
                                <li className="hover:text-orange-400 font-semibold">Projects</li>
                            </Link>
                            <Link to="/research">
                                <li className="hover:text-orange-400 font-semibold">Research</li>
                            </Link>
                            <Link to="/about">
                                <li className="hover:text-orange-400 font-semibold">About Me</li>
                            </Link>

                        </ul>
                        {
                            isOpen ?
                                <FaTimes onClick={() => setIsOpen(!isOpen)} className="text-2xl block md:hidden" />
                                :
                                <FaBars onClick={() => setIsOpen(!isOpen)} className="text-2xl block md:hidden" />
                        }
                    </div>
                </nav>
            </section>
            <div className='pt-20 mx-8 text-white'>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Navbar;
