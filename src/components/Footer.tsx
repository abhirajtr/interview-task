import assets from "../assets/assets"

const Footer = () => {
    return (
        <div className="pt-10 bg-[#1b1b1b] px-12 overflow-hidden relative w-full">

            <div className=" flex flex-col-reverse sm:flex-row min-h-96 w-full">
                {/* left side  */}
                <div className="flex flex-col-reverse sm:flex-row gap-2 sm:gap-24 sm:w-1/2">
                    <img src={assets.logo_black} className="h-12 w-12" alt="" />
                    <div>
                        <ul className="flex flex-col gap-4 mb-16">
                            <li className="text-white/50 text-sm hover:text-white hover:cursor-pointer">Explore</li>
                            <li className="text-white/50 text-sm hover:text-white hover:cursor-pointer">FAQ</li>
                            <li className="text-white/50 text-sm hover:text-white hover:cursor-pointer">Pricing</li>
                        </ul>
                        <p className="text-sm text-white/50">© 2024, Omega Orion Pvt. Ltd.</p>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-4">
                            <li className="text-white/50 text-sm hover:text-white hover:cursor-pointer">Licensing</li>
                            <li className="text-white/50 text-sm hover:text-white hover:cursor-pointer">Terms of use</li>
                            <li className="text-white/50 text-sm hover:text-white hover:cursor-pointer">Privacy policy</li>
                        </ul>
                    </div>
                </div>

                {/* right side  */}

                <div className="w-1/2 flex sm:justify-end mb-6">
                    <div>
                        <p className="mb-4">Join our monthly newsletter 🙌</p>
                        <div className="relative  w-64 rounded-md border border-[#3d3d3d] mb-4">
                            <input
                                type="text"
                                className="w-full bg-transparent px-4 py-2.5 pr-12 focus:outline-none"
                                placeholder="designer@example.com"
                            />
                            <button
                                className="bg-button hover:bg-[#abfc39] hover:cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 h-8 px-2 text-white rounded-md">
                                <img src={assets.arrow_right} className="w-4 h-4" alt="" />
                            </button>
                        </div>
                        <p className="mb-6">Connect with us 🤝</p>
                        <div className="flex gap-3">
                            <button className="hover:cursor-pointer bg-transparent text-white w-12 h-12 flex justify-center items-center rounded-full border border-white/50">
                                <img
                                    src={assets.dribble_icon}
                                    alt="Icon"
                                    className="h-6 w-6"
                                />
                            </button>
                            <button className="hover:cursor-pointer bg-transparent text-white w-12 h-12 flex justify-center items-center rounded-full border border-white/50">
                                <img
                                    src={assets.instagram_icon}
                                    alt="Icon"
                                    className="h-6 w-6"
                                />
                            </button>
                            <button className="hover:cursor-pointer bg-transparent text-white w-12 h-12 flex justify-center items-center rounded-full border border-white/50">
                                <img
                                    src={assets.behance_icon}
                                    alt="Icon"
                                    className="h-6 w-6"
                                />
                            </button>
                            <button className="hover:cursor-pointer bg-transparent text-white w-12 h-12 flex justify-center items-center rounded-full border border-white/50">
                                <img
                                    src={assets.mail_icon}
                                    alt="Icon"
                                    className="h-6 w-6"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full transition-transform translate-y-[15rem]">
                <p className=" font-bold text-white/10 text-[18rem] w-full text-center tracking-wider secular-one-regular scale-x-150">
                    uiwiki
                </p>
            </div>

        </div>
    )
}

export default Footer