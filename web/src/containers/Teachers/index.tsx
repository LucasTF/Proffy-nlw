import React from 'react';

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherCard from '../../components/TeacherCard';
import Input from '../../components/Input';

const Teachers: React.FC = () => {
	return (
		<Container>
			<PageHeader title='Estes são os proffys disponíveis.'>
				<form id='search-teachers'>
					<Input name='subject' label='Matéria' />

					<Input name='week-day' label='Dia da semana' />

					<Input name='time' label='Horario' type='time' />
				</form>
			</PageHeader>

			<section>
				<TeacherCard />
				<TeacherCard />
				<TeacherCard />
			</section>
		</Container>
	);
};

export default Teachers;
