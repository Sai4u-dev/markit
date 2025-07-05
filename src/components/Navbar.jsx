export default function Navbar() {
    return (
        <>
            <div className="main-header-containe p-2 mx-2 bg-[#ffffff] rounded-4xl mt-1 sticky top-1.5">
                <header className="header-container px-3 ">
                    <div className="flex justify-between items-center gap-4 max-sm:flex-col max-sm:items-start">
                        <div className="logo">
                            <div><a href=""><img height={50} className=" rounded-full max-sm:ml-3" width={50} src="https://media.istockphoto.com/id/1393756492/vector/dual-abstract-striped-circle-planet.jpg?s=612x612&w=0&k=20&c=nUwv86RZiJRm87wWIodjXBfoA8OE7VwphZdp8iEJIL0=" alt="MarkIt-logo" /></a></div>
                        </div>
                        <nav className="navigation-bar flex justify-evenly w-1/2 max-sm:flex-col max-sm:align-start max-sm:w-screen max-sm:pl-1 max-sm:gap-10 my-2">
                            <div><a href=""><span className="p-3 px-4 hover:text-slate-800 hover:bg-amber-200 rounded-full">Features</span></a></div>
                            <div><a href=""><span className="p-3 px-4 hover:text-slate-800 hover:bg-amber-200 rounded-full">Pricing</span></a></div>
                            <div><a href=""><span className="p-3 px-4 hover:text-slate-800 hover:bg-amber-200 rounded-full">Changelog</span></a></div>
                            <div><a href=""><span className="p-3 px-4 hover:text-slate-800 hover:bg-amber-200 rounded-full">Contact</span></a></div>
                        </nav>
                        <div className="about-us">
                            <div><a href=""><button className="py-3 px-6 rounded-4xl bg-amber-200 hover:text-orange-400 flex gap-2 items-center hover:bg-amber-50  hover:border-amber-400"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                            </svg>
                                About Us</button></a></div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}