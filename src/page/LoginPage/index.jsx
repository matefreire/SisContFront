import React from "react";

import "./styles.css";


const LoginPage = () => {
	return (
		<div>
			<div className="limiter">
				<div className="container-login100" style={{ backgroundImage: 'url("images/usua.png")' }}>
					<div className="wrap-login100">
						<form className="login100-form validate-form">

							<span className="login100-form-logo">
								<i className="zmdi zmdi-landscape">SisCont</i>
							</span>

							<span className="login100-form-title p-b-34 p-t-12">
								Logar
							</span>

							<div className="wrap-input100 validate-input" data-validate="Enter username">
								<input className="input100" type="text" name="username" placeholder="Usuario" />
								<span class="focus-input100" data-placeholder="&#xf207;"></span>
							</div>

							<div className="wrap-input100 validate-input" data-validate="Enter password">
								<input className="input100" type="password" name="pass" placeholder="Senha" />
								<span class="focus-input100" data-placeholder="&#xf207;"></span>
							</div>

							<div className="contact100-form-checkbox">
								<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
								<label className="label-checkbox100" htmlFor="ckb1">
									Lembre-me
								</label>
							</div>

							<div className="container-login100-form-btn">
								<button className="login100-form-btn" onclick="Evento()">
									<a href="src/page/HomePage/index.jsx">Entrar</a>
								</button>
							</div>

							<div className="text-center p-t-90">
								<a className="txt1" href="#">
									Esqueceu a senha??
								</a>
							</div>

						</form>
					</div>
				</div>
			</div>
			<div id="dropDownSelect1" />
		</div>
	);
}

export default LoginPage;
