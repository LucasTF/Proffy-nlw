import React from 'react';

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherCard from '../../components/TeacherCard';
import Input from '../../components/Input';
import Select from '../../components/Select';

const Teachers: React.FC = () => {
	return (
		<Container>
			<PageHeader title='Estes são os proffys disponíveis.'>
				<form id='search-teachers'>
					<Select
						name='subject'
						label='Matéria'
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Geografia', label: 'Geografia' },
							{ value: 'Inglês', label: 'Inglês' },
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Química', label: 'Química' },
							{ value: 'Física', label: 'Física' },
							{ value: 'Programação', label: 'Programação' },
							{ value: 'Português', label: 'Português' },
						]}
					/>

					<Select
						name='week-day'
						label='Dia da semana'
						options={[
							{ value: '1', label: 'Domingo' },
							{ value: '2', label: 'Segunda-feira' },
							{ value: '3', label: 'Terça-feira' },
							{ value: '4', label: 'Quarta-feira' },
							{ value: '5', label: 'Quinta-feira' },
							{ value: '6', label: 'Sexta-feira' },
							{ value: '7', label: 'Sábado' },
						]}
					/>

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
