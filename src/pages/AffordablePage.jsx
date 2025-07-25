import AffordableHero from "../components/affordable/AffordableHero";
import OccasionSection from "../components/OccasionSection";
import ShopByFabric from "../components/ShopByFabric";
import ShopByTrend from "../components/affordable/ShopByTrend";
import ProductList from "./ProductList";

const AffordablePage = ({ userId, setCart }) => {
    return (
        <>
            <ProductList
                userId={userId}
                setCart={setCart}
            />
            <AffordableHero />
            <OccasionSection />
            <ShopByFabric />
            <ShopByTrend />
        </>
    );
};

export default AffordablePage;
