import CommentsSection from "./CommentsSection"
import Description from "./Description"
import Features from "./Features"
import ImagesSection from "./ImagesSection"

const MainContent = () => {
    return (
        <div className="">
            <ImagesSection />
            <div className="py-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Description />
                <Features />
            </div>
            <CommentsSection />
        </div>
    )
}

export default MainContent