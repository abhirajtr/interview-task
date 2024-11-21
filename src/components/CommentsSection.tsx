import assets from "../assets/assets"

const CommentsSection = () => {
    return (
        <div className="pt-10 bg-[#141414] w-full rounded-md">
            <div className="px-6 mb-6">
                <h2 className="text-xl font-semibold mb-6">Comments</h2>
                <div className="flex items-center gap-4 mb-4">
                    <img src={assets.comment_profile} className="w-12 h-12" alt="" />
                    <div>
                        <p className="text-sm text-white/50">Kristie Robson</p>
                        <p className="text-sm text-white/50">Gave feedback on 17th Sept 2024</p>
                    </div>
                </div>
                <p className="text-sm sm:w-2/6 text-white/50">
                    The template I bought looked great in the preview, but the actual file was poorly designed and hard to customize.    Definitely not worth the price
                </p>
            </div>
            <div className="bg-[#1b1b1b] py-6 px-6 sm:flex justify-between items-center">
                <p className="text-white/50">Drop a comment, be helpful</p>
                <button className="text-black bg-button rounded-md px-4 py-1">Submit</button>
            </div>
        </div>
    )
}

export default CommentsSection