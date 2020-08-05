import React from 'react';

import { Container } from './styles';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../utils/api';

interface ITeacherCardProps {
	id: number;
	name: string;
	whatsapp: string;
	avatar: string;
	subject: string;
	bio: string;
	cost: string;
}

const TeacherCard: React.FC<ITeacherCardProps> = ({
	id,
	name,
	avatar,
	whatsapp,
	subject,
	bio,
	cost,
}) => {
	function createConnectionHandler() {
		api.post('connections', {
			user_id: id,
		});
	}

	return (
		<Container>
			<header>
				<img src={avatar} alt={name} />
				<div>
					<strong>{name}</strong>
					<span>{subject}</span>
				</div>
			</header>
			<p>{bio}</p>
			<footer>
				<p>
					Preço/hora <strong>R$ {cost}</strong>
				</p>
				<a
					target='_blank'
					rel='noopener noreferrer'
					onClick={createConnectionHandler}
					href={`https://wa.me/${whatsapp}`}
				>
					<img src={WhatsappIcon} alt='Whatsapp' />
					Entrar em contato
				</a>
			</footer>
		</Container>
	);
};

export default TeacherCard;
