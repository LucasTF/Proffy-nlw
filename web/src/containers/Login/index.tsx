import React from 'react';

import { Container } from './styles';
import LogoAside from '../../components/LogoAside';

const Login: React.FC = () => {
	return (
		<Container>
			<LogoAside />

			<section className='login'>
				<h2>Fazer login</h2>
				<form>
					<input placeholder='E-mail' type='text' />
					<input placeholder='Senha' type='text' />
					<div>
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
					<button>Entrar</button>
				</form>
			</section>
		</Container>
	);
};

export default Login;
