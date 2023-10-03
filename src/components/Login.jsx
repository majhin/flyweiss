import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/loginbar.css";

function Login() {
	const navigate = useNavigate();
	const [mobileNumber, setMobileNumber] = useState("");
	const [otp, setOtp] = useState("");
	const [currentStatus, setCurrentStatus] = useState("Login");
	const [isOtpSent, setIsOtpSent] = useState(false);
	const [registerOrLogin, setRegisterOrLogin] = useState("");

	const handleCloseClick = () => {
		const loginSidebar = document.getElementById("login-sidebar");
		loginSidebar.style.width = "0px";
		loginSidebar.style.padding = "0px";
		setIsOtpSent(false);
		setRegisterOrLogin("");
		setCurrentStatus("Login");
		setOtp("");
	};

	const handleRegisterAndLogin = async () => {
		try {
			const response = await fetch(
				`https://kv-varlu.vercel.app/api/v1/${registerOrLogin}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						mobileNumber: mobileNumber,
					}),
				}
			);
			console.log(
				JSON.stringify({
					mobileNumber: mobileNumber,
				})
			);

			if (response.ok) {
				const data = await response.json();
				setCurrentStatus(data.otp);
				setIsOtpSent(true);
			} else {
				// Handle error response here (e.g., show error message to user)
				const data = await response.json();
				setCurrentStatus(data.error);
				setRegisterOrLogin("");
			}
		} catch (error) {
			console.error("Error occurred while logging in:", error);
		}
	};

	const handleVerifyOtp = async () => {
		let url;
		if (registerOrLogin === "login") {
			url = "https://kv-varlu.vercel.app/api/v1/verify/login";
		} else {
			url = "https://kv-varlu.vercel.app/api/v1/verify/otp";
		}
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					mobileNumber: mobileNumber,
					otp: otp,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				handleCloseClick();

				navigate("/logged-in");
			} else {
				const data = await response.json();
				setCurrentStatus(data.error);
			}
		} catch (error) {
			console.error("Error occurred while verifying OTP:", error);
		}
	};

	useEffect(() => {}, []);

	useEffect(() => {
		if (registerOrLogin) {
			handleRegisterAndLogin();
		}
	}, [registerOrLogin]);

	return (
		<div id='login-sidebar' className='sidebar-container'>
			<div
				className='close-button'
				onClick={handleCloseClick}
				style={{ cursor: "pointer", margin: 10, fontSize: "0.9rem" }}
			>
				&times;
			</div>
			<div className='text-center'>
				<img src='/login-banner.svg' alt='Login Banner' />
			</div>
			<div className='text-center'>
				<h5 style={{ color: "#3f7ccd", fontWeight: "bold" }}>
					{isOtpSent ? currentStatus : "Login or Register"}
				</h5>
			</div>
			<div
				className='ms-4 mt-4'
				style={{ border: "2px solid #3f7ccd", borderRadius: "3px" }}
			>
				<span className='me-3' style={{ color: "#3f7ccd" }}>
					<span className='ps-1'>+91</span>
				</span>
				<span className='d-inline-block' style={{ width: "84%" }}>
					<input
						type='number'
						className='form-control'
						style={{
							border: "none",
							borderLeft: "1px solid #3f7ccd",
							borderRadius: 0,
						}}
						value={mobileNumber}
						onChange={(e) => {
							const inputNumber = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
							if (/^\d{0,10}$/.test(inputNumber)) {
								setMobileNumber(inputNumber); // Set the state only if it's a valid 10-digit number
							}
						}}
						disabled={isOtpSent}
					/>
				</span>
			</div>
			{isOtpSent && (
				<div className='ms-4 mt-4'>
					<input
						type='text'
						className='form-control'
						placeholder='Enter OTP'
						value={otp}
						onChange={(e) => setOtp(e.target.value)}
					/>
				</div>
			)}
			<div className='text-center mt-3 ms-4'>
				<button
					className='btn btn-primary'
					style={{
						backgroundColor: "#3f7ccd",
						width: "100%",
					}}
					onClick={
						isOtpSent
							? handleVerifyOtp
							: () => {
									setRegisterOrLogin("login");
							  }
					}
				>
					{isOtpSent ? "Verify OTP" : "Login"}
				</button>
			</div>
			{isOtpSent == false && (
				<div className='text-center mt-3 ms-4'>
					<button
						className='btn btn-primary'
						style={{
							backgroundColor: "#3f7ccd",
							width: "100%",
						}}
						onClick={() => {
							setRegisterOrLogin("register");
						}}
					>
						Register
					</button>
				</div>
			)}
		</div>
	);
}

export default Login;
