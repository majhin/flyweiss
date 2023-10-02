function ChooseCar() {
	const imageStyle = {
		maxWidth: "100%",
		height: "auto",
		maxHeight: "258px", // Set maximum height as per your requirement
		borderRadius: "10px", // Set the desired border radius
	};

	return (
		<>
			<section className='w-50 ms-3 mt-5'>
				<h4 className='ms-3'>Choose the workshop Near You</h4>
				<div className='container mt-4 ps-0 '>
					<div className='d-flex flex-column flex-md-row justify-content-between'>
						<div className='flex-fill m-3' style={imageStyle}>
							<img src='/workshop-1.svg' alt='workshop' className='img-fluid' />
						</div>
						<div className='flex-fill m-3' style={imageStyle}>
							<img src='/workshop-2.svg' alt='workshop' className='img-fluid' />
						</div>
						<div className='flex-fill m-3' style={imageStyle}>
							<img src='/workshop-1.svg' alt='workshop' className='img-fluid' />
						</div>
					</div>
				</div>
			</section>
			<section id='how-it-works' className='ms-3 mt-5'>
				<img
					src='/how-car-service-works.svg'
					alt='how-car-service-works'
					className='img-fluid'
				/>
			</section>
		</>
	);
}

export default ChooseCar;
