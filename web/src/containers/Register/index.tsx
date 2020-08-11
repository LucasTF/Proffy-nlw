import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import LogoAside from '../../components/LogoAside';
import LoginInput, { LoginInputPosition } from '../../components/LoginInput';
import AuthForm from '../../components/AuthForm';
import * as registerService from '../../services/RegisterService';

import BackIcon from '../../assets/images/icons/back.svg';

const Register: React.FC = () => {
	const history = useHistory();

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');

	async function registerSubmitionHandler(
		e: React.FormEvent<HTMLFormElement>
	) {
		e.preventDefault();
		const statusCode = await registerService.register({
			name,
			surname,
			email,
			password,
		});
		if (statusCode !== 201)
			return alert('Erro ao tentar realizar o cadastro!');

		return history.push('/register-success');
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
							onChange={e => setName(e.target.value)}
							value={name}
						/>
						<LoginInput
							placeholder='Sobrenome'
							position={LoginInputPosition.MIDDLE}
							type='text'
							onChange={e => setSurname(e.target.value)}
							value={surname}
						/>
						<LoginInput
							placeholder='E-mail'
							position={LoginInputPosition.MIDDLE}
							type='email'
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
						<LoginInput
							placeholder='Senha'
							position={LoginInputPosition.MIDDLE}
							type='password'
							onChange={e => setPassword(e.target.value)}
							value={password}
						/>
						<LoginInput
							placeholder='Confirmar senha'
							position={LoginInputPosition.BOTTOM}
							type='password'
							onChange={e => setCpassword(e.target.value)}
							value={cpassword}
						/>
					</AuthForm>
				</div>
			</section>

			<LogoAside />
		</Container>
	);
};

export default Register;
