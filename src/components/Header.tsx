import assets from "../assets/assets"

const Header = () => {
    return (
        <header
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${assets.cover_image})` }}
        >

            <div className="px-14">
                <div className="flex justify-between items-center py-5">

                    <div className="flex items-center sm:gap-8">
                        <img src={assets.logo} alt="" className="h-12 w-auto" />
                        {/* Top Navigation */}
                        <ul className="flex gap-2 sm:gap-5 hover:cursor-pointer">
                            <li>Explore</li>
                            <li>FAQ's</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    <div className="flex gap-5 items-center hover:cursor-pointer">
                        <img src={assets.search_icon} className="w-4 h-4" alt="" />
                        <img src={assets.profile_image} className="w-8 h-8" alt="" />
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="flex justify-between py-10 pt-20">
                    <div className="w-full sm:w-auto">
                        <h3 className="text-white font-semibold text-sm sm:text-xl">Pixel Boom: AI Website agency</h3>
                        <div className="flex gap-3 items-center">
                            <p className="text-white/50">Habit Tracker App Figma iOS UI Kit</p>
                            <img src={assets.figma_icon} alt="Figma Icon" />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center sm:flex-col sm:gap-3 md:flex-row md:gap-4">
                        <button className="border-[0.8px] border-white/50 rounded-lg px-3 py-2 bg-transparent flex gap-2 items-center h-10 text-sm hover:border-white">
                            <img src={assets.message_question_icon} alt="" />
                            <span className="font-semibold">Give feedback</span>
                        </button>
                        <button className="rounded-lg px-3 bg-button hover:bg-[#abfc39] flex gap-2 items-center text-black h-10 text-sm">
                            <span className="font-semibold text-black">Add to cart <b>$20</b></span>
                        </button>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;