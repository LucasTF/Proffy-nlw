import React from 'react';

import { Container } from './styles';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherCard: React.FC = () => {
	return (
		<Container>
			<header>
				<img
					src='https://media-exp1.licdn.com/dms/image/C4D03AQGblUurz886vg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=lLhsVOgXlbBmaYskrUbSC9leV9qZEWaGYt9AmiG97Y8'
					alt='Lucas Ferreira'
				/>
				<div>
					<strong>Lucas Ferreira</strong>
					<span>Programação TypeScript</span>
				</div>
			</header>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
				molestiae rerum officiis eum. Ratione, illo optio omnis
				consequatur nulla ab.
			</p>
			<footer>
				<p>
					Preço/hora <strong>R$ 50,00</strong>
				</p>
				<button type='button'>
					<img src={WhatsappIcon} alt='Whatsapp' />
					Entrar em contato
				</button>
			</footer>
		</Container>
	);
};

export default TeacherCard;
