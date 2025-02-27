import { Images } from "../assets";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            <Banner 
                image={Images.Banner.src}
                title="Winter Comfort, Timeless Design"
                subtitle="Discover Our Winter Furniture Collection"
                description="Transform your space with pieces designed for warmth and style this season"
                buttonLink="/shop"
            />
        </Layout>
    )
};

export default Home;