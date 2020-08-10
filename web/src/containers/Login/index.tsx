import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import LogoAside from '../../components/LogoAside';

import HeartIcon from '../../assets/images/icons/purple-heart.svg';
import LoginInput, { LoginInputPosition } from '../../components/LoginInput';
import AuthForm from '../../components/AuthForm';

const Login: React.FC = () => {
	function loginSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}

	return (
		<Container>
			<LogoAside />

			<section className='login'>
				<div className='login-body'>
					<AuthForm
						title='Fazer login'
						onSubmit={loginSubmitHandler}
						formSubmitText='Entrar'
					>
						<LoginInput
							placeholder='E-mail'
							position={LoginInputPosition.TOP}
							type='email'
						/>
						<LoginInput
							placeholder='Senha'
							position={LoginInputPosition.BOTTOM}
							type='password'
						/>
						<div className='login-extras'>
							<div className='remember-container'>
								<input
									type='checkbox'
									name='remember-me'
									id='remember-me'
								/>
								<label htmlFor='remember-me'>Lembrar-me</label>
							</div>
							<a href='/'>Esqueci minha senha</a>
						</div>
					</AuthForm>
				</div>

				<footer className='login-footer'>
					<div className='register'>
						<p>Não tem conta?</p>
						<NavLink to='/register'>Cadastre-se</NavLink>
					</div>
					<div className='free-div'>
						<span>É de graça</span>
						<img src={HeartIcon} alt='Coração' />
					</div>
				</footer>
			</section>
		</Container>
	);
};

export default Login;
