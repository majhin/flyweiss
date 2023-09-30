import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../static/navbar.css";

function CustomNavbar() {
	function handleClick() {
		const togglerIcon = document.querySelector(".navbar-toggler-icon");

		if (togglerIcon) {
			togglerIcon.classList.toggle("toggled");
		}
	}

	return (
		<>
			<Navbar className={`custom-navbar `} expand='lg'>
				<Link to='/home' className='navbar-brand ms-5'>
					<img className='logo' src='/Logo.svg' alt='Logo' />
					<h4 className='d-inline ms-3 text-white'>CAR SERVICE</h4>
				</Link>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					onClick={handleClick}
					className='no-border '
				/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<Dropdown>
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
								<Dropdown.Item as={Link} to='/profile' className='mt-2'>
									<div class='group'>
										<img class='image' src='/hyderabad.svg' />
										<span style={{ marginLeft: 10 }}>Hyderabad</span>
									</div>
								</Dropdown.Item>
								<Dropdown.Item as={Link} to='/profile' className='mt-2'>
									<div class='group'>
										<img class='image' src='/delhi.svg' />
										<span style={{ marginLeft: 10 }}>New Delhi</span>
									</div>
								</Dropdown.Item>
								<Dropdown.Item as={Link} to='/profile' className='mt-2'>
									<div class='group'>
										<img class='image' src='/mumbai.svg' />
										<span style={{ marginLeft: 10 }}>Mumbai</span>
									</div>
								</Dropdown.Item>
								<Dropdown.Item as={Link} to='/profile' className='mt-2'>
									<div class='group'>
										<img class='image' src='/agra.svg' />
										<span style={{ marginLeft: 10 }}>Agra</span>
									</div>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
					<Nav className='ml-auto'>
						<Link to='/home' className='nav-link'>
							Spares
						</Link>
						<Link to='/timeline' className='nav-link'>
							Blog
						</Link>
						<Link to='/inbox' className='nav-link'>
							More
						</Link>
						<Link
							style={{
								marginLeft: 10,
								marginRight: 45,
								fontSize: "0.8rem",
								backgroundColor: "#001B39",
							}}
							to='/inbox'
							className='nav-link'
						>
							Login
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default CustomNavbar;
