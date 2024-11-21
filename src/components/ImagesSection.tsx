import assets from "../assets/assets"

const images = [
    { image: assets.image1 },
    { image: assets.image2 },
    { image: assets.image3 },
    { image: assets.image4 },
    { image: assets.image5 },
    { image: assets.image6 },
    { image: assets.image7 },
    { image: assets.image8 },
]

const ImagesSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 overflow-hidden py-10">
            {
                images.map((item) => (
                    <div className="h-50">
                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                ))
            }
        </div>
    )
}

export default ImagesSection
