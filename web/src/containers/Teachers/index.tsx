import React from 'react';

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';

const Teachers: React.FC = () => {
	return (
		<Container>
			<PageHeader title='Estes são os proffys disponíveis.'>
				<form id='search-teachers'>
					<div className='input-block'>
						<label htmlFor='subject'>Matéria</label>
						<input type='text' id='subject' />
					</div>

					<div className='input-block'>
						<label htmlFor='week-day'>Dia da semana</label>
						<input type='text' id='week-day' />
					</div>

					<div className='input-block'>
						<label htmlFor='time'>Horário</label>
						<input type='text' id='time' />
					</div>
				</form>
			</PageHeader>
		</Container>
	);
};

export default Teachers;
