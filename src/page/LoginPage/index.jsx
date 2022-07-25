import React from "react";

import "./styles.css";


const LoginPage = () => {
	return (
		<div>
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<form method="POST" action=""> 

							<span className="login100-form-logo">
								<i className="zmdi zmdi-landscape">SisCont</i>
							</span>

							<span className="login100-form-title p-b-34 p-t-12">
								Logar
							</span>

							<div className="wrap-input100 validate-input">
								<input className="input100" type="text" name="username" placeholder="Usuario" />
								<span class="focus-input100" data-placeholder="&#xf207;"></span>
							</div>

							<div className="wrap-input100 validate-input">
								<input className="input100" type="password" name="pass" placeholder="Senha" />
								<span class="focus-input100" data-placeholder="&#xf207;"></span>
							</div>


							<div className="container-login100-form-btn">
								<button type="submit" className="login100-form-btn">
									Entrar
								</button>
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
