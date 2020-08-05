import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import WarningIcon from '../../assets/images/icons/warning.svg';

import { Container } from './styles';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../utils/api';

interface ISchedule {
	week_day: string;
	from: string;
	to: string;
}

const TeachersForm: React.FC = () => {
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [bio, setBio] = useState('');

	const [subject, setSubject] = useState('');
	const [cost, setCost] = useState('');

	const [scheduleItems, setScheduleItems] = useState<ISchedule[]>([
		{
			week_day: '',
			from: '',
			to: '',
		},
	]);

	function addNewScheduleHandler() {
		setScheduleItems([
			...scheduleItems,
			{ week_day: '', from: '', to: '' },
		]);
	}

	function changeFieldHandler(pos: number, field: string, value: string) {
		const updatedSchedule = scheduleItems.map((scheduleItem, index) => {
			if (index === pos) {
				return { ...scheduleItem, [field]: value };
			}
			return scheduleItem;
		});

		setScheduleItems(updatedSchedule);
	}

	function submitHandler(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		api.post('classes', {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost: Number(cost),
			schedule: scheduleItems,
		})
			.then(() => {
				alert('Cadastro realizado com sucesso!');
			})
			.catch(err => {
				alert('Erro ao tentar realizar cadastro!');
				console.log(err);
			});

		console.log({
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost,
			scheduleItems,
		});
	}

	return (
		<Container>
			<PageHeader
				title='Que incrível que você quer dar aulas!'
				description='O primerio passo é preencher esse formulário de inscrição.'
			/>

			<section>
				<form onSubmit={e => submitHandler(e)}>
					<fieldset>
						<legend>Seus dados</legend>

						<Input
							name='name'
							label='Nome completo'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<Input
							name='avatar'
							label='Avatar'
							value={avatar}
							onChange={e => setAvatar(e.target.value)}
						/>
						<Input
							name='whatsapp'
							label='WhatsApp'
							value={whatsapp}
							onChange={e => setWhatsapp(e.target.value)}
						/>
						<Textarea
							name='bio'
							label='Biografia'
							value={bio}
							onChange={e => setBio(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>Sobre a aula</legend>

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
						<Input
							name='cost'
							label='Custo da sua hora por aula'
							value={cost}
							onChange={e => setCost(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>
							Horários disponíveis
							<button
								type='button'
								onClick={addNewScheduleHandler}
							>
								+ Novo horário
							</button>
						</legend>

						{scheduleItems.map((scheduleItem, index) => {
							return (
								<div key={index} className='schedule-item'>
									<Select
										name='week-day'
										label='Dia da semana'
										value={scheduleItem.week_day}
										options={[
											{ value: '1', label: 'Domingo' },
											{
												value: '2',
												label: 'Segunda-feira',
											},
											{
												value: '3',
												label: 'Terça-feira',
											},
											{
												value: '4',
												label: 'Quarta-feira',
											},
											{
												value: '5',
												label: 'Quinta-feira',
											},
											{
												value: '6',
												label: 'Sexta-feira',
											},
											{ value: '7', label: 'Sábado' },
										]}
										onChange={e =>
											changeFieldHandler(
												index,
												'week_day',
												e.target.value
											)
										}
									/>
									<Input
										name='from'
										label='Das'
										type='time'
										value={scheduleItem.from}
										onChange={e =>
											changeFieldHandler(
												index,
												'from',
												e.target.value
											)
										}
									/>
									<Input
										name='to'
										label='Até'
										type='time'
										value={scheduleItem.to}
										onChange={e =>
											changeFieldHandler(
												index,
												'to',
												e.target.value
											)
										}
									/>
								</div>
							);
						})}
					</fieldset>

					<footer>
						<p>
							<img src={WarningIcon} alt='Aviso importante' />
							Importante! <br />
							Preencha todos os dados
						</p>
						<button type='submit'>Salvar cadastro</button>
					</footer>
				</form>
			</section>
		</Container>
	);
};

export default TeachersForm;
