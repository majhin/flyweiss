import { Container, Row, Col } from "react-bootstrap";

function OurServices() {
	return (
		<section id='our-services' className='ms-3 w-50'>
			<div className='mt-4'>
				<h4>Car Services Available In Hyderabad</h4>
				<div>
					<p className='mt-3' style={{ fontWeight: "lighter" }}>
						Get hassle-free and professional car service, car repair, wheel care
						services, cashless insurance claim and much more in Hyderabad.
					</p>
				</div>
			</div>

			<Container
				className='mt-4 gap-5 row-gap-5  '
				style={{
					backgroundColor: "#EEEEEE",
					borderRadius: "20px",
					width: "fit-content",
				}}
			>
				<Row className='justify-content-center'>
					<Col lg={3} md={4} sm={6} xs={4} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/periodic-service.svg' alt='periodic-service' />
							</div>
							<div>
								<p className='text-center'>Periodic Service</p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/batteries.svg' alt='Batteries' />
							</div>
							<div>
								<p className='text-center'>Batteries</p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/ac-service-repair.svg' alt='AC Service & Repair' />
							</div>
							<div>
								<p className='text-center'>AC Service & Repair</p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/tyre-wheel.svg' alt='Tyres & Wheel' />
							</div>
							<div>
								<p className='text-center'>Tyres & Wheel</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/windshield.svg' alt='Wind Shield & Lights' />
							</div>
							<div>
								<p className='text-center'>Wind Shield & Lights</p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img
									src='/car-cleaning.svg'
									alt='Car Spa &
                                Cleansing'
								/>
							</div>
							<div>
								<p className='text-center'>Car Spa & Cleansing</p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/detailing.svg' alt='Detailing Service' />
							</div>
							<div>
								<p className='text-center'>Detailing Service </p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='insurance.svg' alt='Insurance' />
							</div>{" "}
							<div>
								<p className='text-center'>Insurance</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className='justify-content-center'>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/denting-painting.svg' alt='Denting & Painting' />
							</div>
							<div>
								<p className='text-center'>Denting & Painting</p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/suspension.svg' alt='Suspension & Fitments' />
							</div>
							<div>
								<p className='text-center'>Suspension & Fitments</p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/clutch.svg' alt='Clutch & Body Parts' />
							</div>
							<div>
								<p className='text-center'>Clutch & Body Parts</p>
							</div>
						</div>
					</Col>
					<Col lg={3} md={4} sm={6} xs={6} className='col-4'>
						<div className='p-2 m-2' style={{ width: "fit-content" }}>
							<div
								className='d-flex justify-content-center align-items-center'
								style={{ width: 134, height: 89 }}
							>
								<img src='/inspection.svg' alt='Car Inspection' />
							</div>
							<div>
								<p className='text-center'>Car Inspection</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default OurServices;
