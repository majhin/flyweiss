import "./aaaCompStatic/banner.css";
function Banner() {
	return (
		<>
			<span className='banner'></span>
			<div className='ms-4' style={{ color: "white" }}>
				<h4 className='mt-5'>Experience The Best Car Services In Hyedrabad</h4>
				<h6 className='mt-4'>
					We provide Our Services in over 100+ Major Cities also.
				</h6>
				<div className='mt-lg-5 '>
					<p
						style={{
							fontSize: "0.8rem",
							lineHeight: "1.9rem",
							fontWeight: "lighter",
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
						egestas ligula. Nulla facilisi. Phasellus faucibus <br /> ligula id
						mauris varius, eget faucibus lorem fringilla. Vivamus ut felis
						porta, luctus libero eget, feugiat <br /> velit. Sed aliquet leo et
						ex sodales,{" "}
					</p>
				</div>
				<div
					className='d-flex justify-content-between mt-5'
					style={{ width: 625 }}
				>
					<div>
						<span>
							<img className='mt-2' src='/big-star.svg' alt='big-star' />
						</span>
						<h3 className='d-inline ms-3 '>4.7</h3>
						<p className='mt-3'>Based on 100000+ Reviews</p>
					</div>
					<div>
						<span>
							<img src='/banner-people-icon.svg' alt='people-icon' />
						</span>
						<h3 className='d-inline ms-3'>2,50,000</h3>
						<p>Happy Customers</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
