import { useState } from "react";

import Banner from "../aaacomp/Banner";
import MiniNav from "../aaacomp/MiniNav";
import OurServices from "../aaacomp/OurServices";
import Poster from "../aaacomp/Poster";
import CustomCuratedComponents from "../aaacomp/CustomCuratedComponents";
import ChooseCar from "../aaacomp/ChooseCar";
import ReviewsComponent from "../aaacomp/ReviewComponent";
import BookYourCar from "../aaacomp/BookYourCar";

function Home() {
	return (
		<>
			<BookYourCar />
			<Banner />
			<MiniNav />
			<OurServices />
			<Poster />
			<CustomCuratedComponents />
			<ChooseCar />
			<ReviewsComponent />
		</>
	);
}

export default Home;
