import Banner from "../aaacomp/Banner";
import MiniNav from "../aaacomp/MiniNav";
import OurServices from "../aaacomp/OurServices";
import Poster from "../aaacomp/Poster";
import CustomCuratedComponents from "../aaacomp/CustomCuratedComponents";
import ChooseCar from "../aaacomp/ChooseCar";
import ReviewsComponent from "../aaacomp/ReviewComponent";
import Footer from "../aaacomp/Footer";

function Home() {
	return (
		<>
			<Banner />
			<MiniNav />
			<OurServices />
			<Poster />
			<CustomCuratedComponents />
			<ChooseCar />
			<ReviewsComponent />
			<Footer />
		</>
	);
}

export default Home;
