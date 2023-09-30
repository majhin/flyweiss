import "./aaaCompStatic/mininav.css";

const scrollToSection = (e, id) => {
	e.preventDefault();
	const element = document.getElementById(id);
	console.log(id);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
};

function MiniNav() {
	return (
		<nav>
			<div className='mini-nav w-75'>
				<div className='text-wrapper-2'>
					<a href='' onClick={(e) => scrollToSection(e, "our-services")}>
						Curated Custom Service
					</a>
				</div>
				<div className='text-wrapper-2'>
					<a href='' onClick={(e) => scrollToSection(e, "curated-services")}>
						How Car Service Works?
					</a>
				</div>
				<div className='text-wrapper-2'>
					<a href='#'>Rating &amp; Reviews</a>
				</div>
				<div className='text-wrapper-2'>
					<a href='#'>Price List</a>
				</div>
				<div className='text-wrapper-2'>
					<a href='#'>Frequently Asked Questions</a>
				</div>
			</div>
		</nav>
	);
}

export default MiniNav;
