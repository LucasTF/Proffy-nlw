import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import LogoAside from '../../components/LogoAside';

import BackIcon from '../../assets/images/icons/back.svg';
import LoginInput, { LoginInputPosition } from '../../components/LoginInput';
import AuthForm from '../../components/AuthForm';

const Register: React.FC = () => {
	function registerSubmitionHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log('Clicked');
	}

	return (
		<Container>
			<section className='register'>
				<header>
					<div>
						<Link to='/'>
							<img src={BackIcon} alt='Voltar' />
						</Link>
					</div>
				</header>
				<div className='register-body'>
					<AuthForm
						title='Cadastro'
						description='Preencha os dados abaixo para começar.'
						onSubmit={registerSubmitionHandler}
						formSubmitText='Concluir cadastro'
					>
						<LoginInput
							placeholder='Nome'
							position={LoginInputPosition.TOP}
							type='text'
						/>
						<LoginInput
							placeholder='Sobrenome'
							position={LoginInputPosition.MIDDLE}
							type='text'
						/>
						<LoginInput
							placeholder='E-mail'
							position={LoginInputPosition.MIDDLE}
							type='email'
						/>
						<LoginInput
							placeholder='Senha'
							position={LoginInputPosition.MIDDLE}
							type='password'
						/>
						<LoginInput
							placeholder='Confirmar senha'
							position={LoginInputPosition.BOTTOM}
							type='password'
						/>
					</AuthForm>
				</div>
			</section>

			<LogoAside />
		</Container>
	);
};

export default Register;
