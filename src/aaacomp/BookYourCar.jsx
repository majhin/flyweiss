import "./aaaCompStatic/bookyourcar.css";
import { Button } from "react-bootstrap";

function BookYourCar() {
	return (
		<div className='component'>
			<p className='book-your-car'>
				Book your Car
				<br />
				Service Now !
			</p>
			<p className='text-wrapper'>Get instant quotes for your car service</p>
			<div className='group'>
				<div className='div'>Rating</div>
				<div className='frame'>
					<img className='star' src='/star.svg' />
					<div className='star-wrapper-2'>4.7 / 5</div>
				</div>
			</div>
			<div className='frame-wrapper'>
				<div className='frame-2'>
					<input
						className='input-bookcar'
						type='text'
						placeholder='Select your Car'
					/>
				</div>
			</div>
			<div className='div-wrapper'>
				<div className='frame-2'>
					<input
						className='input-bookcar'
						type='text'
						placeholder='Enter your Mobile Number'
					/>
				</div>
			</div>
			<div className='frame-3 text-center d-flex justify-content-center '>
				<div className='text-wrapper-4'>
					<Button variant='none' style={{ color: "white" }}>
						Check Prices For Free
					</Button>
				</div>
			</div>
		</div>
	);
}

export default BookYourCar;
