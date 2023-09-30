function Poster() {
	return (
		<div
			className=' d-flex justify-content-between align-items-center flex-wrap mt-4 ms-3 flex-column flex-md-row'
			style={{ width: "60%" }}
		>
			<div
				className='m-4 d-flex justify-content-center align-items-center mb-3 mb-md-0'
				stlye={{ width: 192 }}
			>
				<img src='/poster-1.svg' alt='poster' />
			</div>
			<div
				className='m-4 d-flex justify-content-center align-items-center mb-3 mb-md-0'
				stlye={{ width: 192 }}
			>
				<img src='/poster-2.svg' alt='poster' />
			</div>
			<div
				className='m-4 d-flex justify-content-center align-items-center mb-3 mb-md-0'
				stlye={{ width: 192 }}
			>
				<img src='/poster-3.svg' alt='poster' />
			</div>
		</div>
	);
}

export default Poster;
