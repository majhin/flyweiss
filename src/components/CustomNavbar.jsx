import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import "../static/navbar.css";
import "../static/loginbar.css";

function CustomNavbar() {
	const location = useLocation();

	function handleClick() {
		const togglerIcon = document.querySelector(".navbar-toggler-icon");

		if (togglerIcon) {
			togglerIcon.classList.toggle("toggled");
		}
	}

	const handleLoginClick = () => {
		//can put a check here, if user loggedIn ? return : proceed
		const loginSidebar = document.getElementById("login-sidebar");

		loginSidebar.style.width = "350px";
		loginSidebar.style.padding = "5px";
	};

	return (
		<>
			<Navbar
				className='custom-navbar'
				expand='lg'
				style={{
					backgroundColor: `${location.pathname !== "/" ? "black" : "none"}`,
				}}
			>
				<Link to='/' className='navbar-brand ms-5'>
					<img className='logo' src='/Logo.svg' alt='Logo' />
					<h4 className='d-inline ms-3 text-white'>CAR SERVICE</h4>
				</Link>
				<Navbar.Toggle aria-controls='basic-navbar-nav' onClick={handleClick} />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<Dropdown className='ms-3'>
							<Dropdown.Toggle
								variant='link'
								id='dropdown-basic'
								className='custom-dropdown-toggle'
								style={{ textDecoration: "none" }}
							>
								<div className='profile-icon position-relative'>Hyderabad</div>
							</Dropdown.Toggle>

							<Dropdown.Menu
								style={{
									border: "none",
									width: 310,
									height: 383,
									boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
									position: "absolute",
									left: -100,
								}}
							>
								<h5 className='text-center mt-3 '>Select your City</h5>
								<div className='search-container'>
									<input
										className='search-city'
										type='text'
										placeholder='Search'
									/>
								</div>
								<Dropdown.Item as={Link} to='#' className='mt-2'>
									<div className='group'>
										<img className='image' src='/hyderabad.svg' />
										<span style={{ marginLeft: 10 }}>Hyderabad</span>
									</div>
								</Dropdown.Item>
								<Dropdown.Item as={Link} to='#' className='mt-2'>
									<div className='group'>
										<img className='image' src='/delhi.svg' />
										<span style={{ marginLeft: 10 }}>New Delhi</span>
									</div>
								</Dropdown.Item>
								<Dropdown.Item as={Link} to='#' className='mt-2'>
									<div className='group'>
										<img className='image' src='/mumbai.svg' />
										<span style={{ marginLeft: 10 }}>Mumbai</span>
									</div>
								</Dropdown.Item>
								<Dropdown.Item as={Link} to='#' className='mt-2'>
									<div className='group'>
										<img className='image' src='/agra.svg' />
										<span style={{ marginLeft: 10 }}>Agra</span>
									</div>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>

					<Nav>
						<Nav>
							<Link to='#' className='nav-link'>
								Spares
							</Link>
						</Nav>
						<Nav>
							<Link to='/blog' className='nav-link'>
								Blog
							</Link>
						</Nav>
						<Nav>
							<Dropdown style={{ width: 80 }}>
								<Dropdown.Toggle
									variant='link'
									id='dropdown-basic'
									className='custom-dropdown-toggle ms-0 mt-0 pt-0 ps-0'
									style={{ textDecoration: "none" }}
								>
									<Link to='#' className='nav-link'>
										More
									</Link>
								</Dropdown.Toggle>

								<Dropdown.Menu
									style={{
										border: "none",
										width: 210,
										height: 253,
										boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
										position: "absolute",
										top: "50px",
										left: "-60px",
									}}
								>
									<Dropdown.Item as={Link} to='#' className='mt-2'>
										<div className='group text-center fw-bold '>
											<span>FAQ</span>
										</div>
									</Dropdown.Item>
									<Dropdown.Item as={Link} to='#' className='mt-2'>
										<div className='group text-center fw-bold '>
											<span>Contact Us</span>
										</div>
									</Dropdown.Item>
									<Dropdown.Item as={Link} to='#' className='mt-2'>
										<div className='group text-center fw-bold '>
											<span>Terms</span>
										</div>
									</Dropdown.Item>
									<Dropdown.Item as={Link} to='#' className='mt-2'>
										<div className='group text-center fw-bold '>
											<span>Privacy</span>
										</div>
									</Dropdown.Item>
									<Dropdown.Item as={Link} to='#' className='mt-2'>
										<div className='group text-center fw-bold '>
											<span>Offers</span>
										</div>
									</Dropdown.Item>
									<Dropdown.Item as={Link} to='#' className='mt-2'>
										<div className='group text-center fw-bold '>
											<span>Reviews</span>
										</div>
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Nav>
						<Nav className='pt-1'>
							<Link
								style={{
									marginLeft: 10,
									marginRight: 45,
									width: 50,
									fontSize: "0.8rem",
									backgroundColor: "#001B39",
								}}
								to='#'
								className='nav-link d-flex justify-content-center rounded-1 '
								onClick={handleLoginClick}
							>
								<span>Login</span>
							</Link>
						</Nav>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default CustomNavbar;
