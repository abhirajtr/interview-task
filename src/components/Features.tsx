import assets from "../assets/assets";

const features = [
    "120+ Screens",
    "Fully customisable designs",
    "Organised Design system",
    "Light & Dark mode",
    "Customised Illustration",
    "Neatly Organised layer"
];


const Features = () => {
    return (
        <div className="ml-0 sm:ml-10">
            <h2 className="text-xl font-semibold mb-6">Features</h2>
            <ul className="flex flex-col gap-4 mb-4">
                {features.map((feature) => (
                    <li key={feature} className="flex gap-2 items-center">
                        <img className="h-5" src={assets.check_circle} alt="" />
                        {feature}
                    </li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold mb-6">Format</h2>
            <div className="flex items-center gap-2">
                <img src={assets.figma_icon} alt="" />
                <div className="flex items-center">
                    <img src={assets.download_icon} className="w-5 h-5" alt="" />
                    <span className="text-white/20">15.2mb</span>
                </div>
            </div>
        </div>
    )
}

export default Features