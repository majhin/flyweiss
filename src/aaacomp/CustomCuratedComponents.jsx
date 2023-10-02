function CustomCuratedComponents() {
	return (
		<section id='curated-services' className='ms-3 mt-5 '>
			<h4 className='ms-3 fw-bold '>Curated Custom Services</h4>

			<div className='d-flex flex-wrap justify-content-center w-50 ms-3'>
				{/* First Column */}

				<div className='m-3'>
					<img src='/exide-battery.svg' alt='Batteries' />
					<p className='text-center'>Batteries</p>
				</div>

				<div className='m-3'>
					<img src='/ac-knob.svg' alt='AC Parts' />
					<p className='text-center'>AC Parts</p>
				</div>

				<div className='m-3'>
					<img src='/brakes.svg' alt='Brakes' />
					<p className='text-center'>Brakes</p>
				</div>

				<div className='m-3'>
					<img src='/clutch-real.svg' alt='Clutch' />
					<p className='text-center'>Clutch</p>
				</div>

				<div className='m-3'>
					<img src='/obd-go-connect.svg' alt='Go connect 2.0' />
					<p className='text-center'>Go connect 2.0</p>
				</div>

				{/* Second Column */}
				<div className='m-3'>
					<img src='/lights.svg' alt='Lights' />
					<p className='text-center'>Lights</p>
				</div>

				<div className='m-3'>
					<img src='/glasses.svg' alt='Glasses' />
					<p className='text-center'>Glasses</p>
				</div>

				<div className='m-3'>
					<img src='/detaining.svg' alt='Car Detailing' />
					<p className='text-center'>Car Detailing</p>
				</div>

				<div className='m-3'>
					<img src='/tyre.svg' alt='Tyres' />
					<p className='text-center'>Tyres</p>
				</div>

				<div className='m-3'>
					<img src='/car-spa.svg' alt='Car Spa' />
					<p className='text-center'>Car Spa</p>
				</div>

				{/* Third Column */}

				<div className='m-3'>
					<img src='/steering.svg' alt='Steering' />
					<p className='text-center'>Steering</p>
				</div>

				<div className='m-3'>
					<img src='/suspension-real.svg' alt='Suspension' />
					<p className='text-center'>Suspension</p>
				</div>

				<div className='m-3'>
					<img src='/body-parts.svg' alt='Body Parts' />
					<p className='text-center'>Body Parts</p>
				</div>

				<div className='m-3'>
					<img src='/side-mirror.svg' alt='Side Mirror' />
					<p className='text-center'>Side Mirror</p>
				</div>

				{/* Add more columns as needed */}
			</div>
		</section>
	);
}

export default CustomCuratedComponents;
