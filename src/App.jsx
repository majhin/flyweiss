import { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./aaacomp/Footer";
import Blog from "./components/Blog";
import LoggedIn from "./components/LoggedIn";

function App() {
	return (
		<BrowserRouter basename='/'>
			<CustomNavbar />
			<Login />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/blog' element={<Blog />}></Route>
				<Route path='/logged-in' element={<LoggedIn />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
