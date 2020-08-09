import React from 'react';

import { Container } from './styles';

import LogoAside from '../../components/LogoAside';

import HeartIcon from '../../assets/images/icons/purple-heart.svg';

const Login: React.FC = () => {
	return (
		<Container>
			<LogoAside />

			<section className='login'>
				<div className='login-body'>
					<div className='login-container'>
						<h2 className='login-title'>Fazer login</h2>

						<form className='login-form'>
							<input placeholder='E-mail' type='text' />
							<input placeholder='Senha' type='text' />
							<div className='login-extras'>
								<div className='remember-container'>
									<input
										type='checkbox'
										name='remember-me'
										id='remember-me'
									/>
									<label htmlFor='remember-me'>
										Lembrar-me
									</label>
								</div>
								<a href='/'>Esqueci minha senha</a>
							</div>
							<button>Entrar</button>
						</form>
					</div>
				</div>

				<footer className='login-footer'>
					<div className='register'>
						<p>Não tem conta?</p>
						<a href='/'>Cadastre-se</a>
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
