import React, { useState, FormEvent } from 'react';

import { Container } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherCard from '../../components/TeacherCard';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../utils/api';

interface ITeacher {
	id: number;
	name: string;
	avatar: string;
	subject: string;
	bio: string;
	whatsapp: string;
	cost: string;
}

const Teachers: React.FC = () => {
	const [teachers, setTeachers] = useState([]);

	const [subject, setSubject] = useState('');
	const [weekDay, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	async function searchTeachersHandler(e: FormEvent) {
		e.preventDefault();

		const { data } = await api.get('classes', {
			params: {
				subject,
				week_day: weekDay,
				time,
			},
		});

		setTeachers(data);
	}

	return (
		<Container>
			<PageHeader title='Estes são os proffys disponíveis.'>
				<form id='search-teachers' onSubmit={searchTeachersHandler}>
					<Select
						name='subject'
						label='Matéria'
						value={subject}
						onChange={e => setSubject(e.target.value)}
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
						value={weekDay}
						onChange={e => setWeekDay(e.target.value)}
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

					<Input
						name='time'
						label='Horario'
						type='time'
						value={time}
						onChange={e => setTime(e.target.value)}
					/>

					<button type='submit'>Buscar</button>
				</form>
			</PageHeader>

			<section>
				{teachers.map((teacher: ITeacher) => {
					return (
						<TeacherCard
							key={teacher.id}
							id={teacher.id}
							name={teacher.name}
							whatsapp={teacher.whatsapp}
							avatar={teacher.avatar}
							subject={teacher.subject}
							bio={teacher.bio}
							cost={teacher.cost}
						/>
					);
				})}
			</section>
		</Container>
	);
};

export default Teachers;
