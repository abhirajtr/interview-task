import CommentsSection from "../components/CommentsSection"
import Description from "../components/Description"
import Features from "../components/Features"
import ImagesSection from "../components/ImagesSection"

const Home = () => {
    return (
        <div className="py-10">
            <ImagesSection />
            <div className="py-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <Description />
                <Features />
            </div>
            <CommentsSection />
        </div>
    )
}

export default Home;