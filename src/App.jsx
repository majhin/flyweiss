import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import CustomNavbar from "./components/CustomNavbar";
import BookYourCar from "./aaacomp/BookYourCar";
import Home from "./components/Home";

function App() {
	return (
		<HashRouter basename='/'>
			<BookYourCar />
			<CustomNavbar />
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
