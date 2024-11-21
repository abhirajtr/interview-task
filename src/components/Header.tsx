import assets from "../assets/assets"

const Header = () => {
    return (
        <header
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${assets.cover_image})` }}
        >

            <div className="px-10">
                <div className="flex justify-between items-center py-5">

                    <div className="flex items-center gap-8">
                        <img src={assets.logo} alt="" className="h-12" />
                        {/* Top Navigation */}
                        <ul className="flex gap-5">
                            <li>Explore</li>
                            <li>FAQ's</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    <div className="flex gap-5 items-center">
                        <img src={assets.search_icon} className="w-4 h-4" alt="" />
                        <img src={assets.profile_image} className="w-8 h-8" alt="" />
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="flex justify-between py-10 pt-20">
                    <div>
                        <h3 className="text-white font-semibold text-[32px]">Pixel Boom: AI Website agency</h3>
                        <div className="flex gap-3 items-center">
                            <p className="text-white/50">Habit Tracker App Figma iOS UI Kit</p>
                            <img src={assets.figma_icon} alt="" />
                        </div>
                    </div>

                    <div className="inline-flex gap-4">
                        <button className="border-[0.8px] border-white/50 rounded-lg px-3 py-2 bg-transparent flex gap-2 items-center h-10">
                            <img src={assets.message_question_icon} alt="" />
                            <span className="font-semibold">Give feedback</span>
                        </button>
                        <button className="rounded-lg px-3 bg-button flex gap-2 items-center text-black h-10">
                            <span className="font-semibold text-black">Add to cart <b>$20</b></span>
                        </button>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header