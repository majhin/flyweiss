import React from "react";

const ReviewComponent = () => {
	const innerDivStyle = {
		backgroundColor: "#eeeeee",
		borderRadius: "10px",
		padding: "20px",
		marginBottom: "20px",
		width: "100%",
		maxWidth: "376px",
	};

	const containerStyle = {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	};
	const beforeElementStyle = {
		content: "''",
		position: "absolute",
		top: "25px",
		left: "25px",
		width: "20px",
		height: "20px",
		backgroundImage: `url('/quotes.svg')`,
		backgroundSize: "cover",
	};
	const reviewContent = () => {
		return (
			<>
				<div
					id='review-div'
					className='d-flex flex-column'
					style={innerDivStyle}
				>
					<div className='d-flex align-items-center mb-3'>
						<div>
							<img
								src='/review-profile-dp.svg'
								alt='review-profile-dp'
								style={{ width: "50px", height: "50px", borderRadius: "50%" }}
							/>
						</div>
						<div className='ms-3'>
							<div>
								<h4>Mohit Reddy</h4>
							</div>
							<div>
								<img
									src='/five-stars.svg'
									alt='five-stars'
									style={{ width: "80px" }}
								/>
							</div>
						</div>
						<div className='ms-auto'>
							<p style={{ fontSize: "0.9rem", wordSpacing: "0.5px" }}>
								1 WEEK AGO
							</p>
						</div>
					</div>
					<div>
						<p style={{ fontSize: "0.8rem" }}>
							Absolutely recommended garage for everyone..!! Recently I had a
							issue of oil filters and engine mounts replacement for my car BMW
							and i don't want my car to showroom because it will usually takes
							1-2 weeks, so then my friend suggested this garage. And even gave
							the manager number. The manager there Sai is a very professional
							and friendly person. Within two days they resolved my issue and
							even they gave an astonishing general service.
						</p>
					</div>
				</div>
			</>
		);
	};

	return (
		<section id='reviews' className='w-50 ms-3 mt-lg-4 '>
			<h4 className='m-3 ms-4 fw-bold '>What Car Owners in Hyderabad Say</h4>

			<div style={containerStyle}>
				{[1, 2, 3, 4].map((review, index) => (
					<div key={index} className='d-flex flex-column' style={innerDivStyle}>
						{reviewContent()}
					</div>
				))}
			</div>
		</section>
	);
};

export default ReviewComponent;
