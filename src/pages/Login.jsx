import React, { useRef } from 'react'
import '@styles/Login.scss'
import logoYardSale from '@logos/logo_yard_sale.svg'
import { useHistory } from "react-router-dom";

const Login = () => {
	const form = useRef(null)

	const handleSubmit = (event) => {
		event.preventDefault()
		const formData = new FormData(form.current)
		const data = {
			email: formData.get('email'),
			password: formData.get('password')
		}
		console.log('data =>', data)
	}

	const history = useHistory()

  function handleClickSignUp() {
    history.push('/signup');
  }

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logoYardSale} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input
						type="text"
						name="email"
						placeholder="email@example.com"
						className="input input-email"
					/>

					<label htmlFor="password" className="label">Password</label>
					<input
						type="password"
						name="password"
						placeholder="*********"
						className="input input-password"
					/>
					<button
						className="primary-button login-button"
						type="submit"
						onClick={handleSubmit}
					>
						Log in
					</button>

					<a href="/password-recovery">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" onClick={handleClickSignUp}>
					Sign up
				</button>
			</div>
		</div>
	)
}

export default Login
