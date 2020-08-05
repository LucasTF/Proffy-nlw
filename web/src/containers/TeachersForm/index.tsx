import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import WarningIcon from '../../assets/images/icons/warning.svg';

import { Container } from './styles';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

interface ISchedule {
	week_day: string;
	to: string;
	from: string;
}

const TeachersForm: React.FC = () => {
	const [scheduleItems, setScheduleItems] = useState<ISchedule[]>([
		{
			week_day: '',
			to: '',
			from: '',
		},
	]);

	function addNewScheduleHandler() {
		setScheduleItems([
			...scheduleItems,
			{ week_day: '', to: '', from: '' },
		]);
	}

	return (
		<Container>
			<PageHeader
				title='Que incrível que você quer dar aulas!'
				description='O primerio passo é preencher esse formulário de inscrição.'
			/>

			<section>
				<fieldset>
					<legend>Seus dados</legend>

					<Input name='name' label='Nome completo' />
					<Input name='avatar' label='Avatar' />
					<Input name='whatsapp' label='WhatsApp' />
					<Textarea name='bio' label='Biografia' />
				</fieldset>

				<fieldset>
					<legend>Sobre a aula</legend>

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
					<Input name='cost' label='Custo da sua hora por aula' />
				</fieldset>

				<fieldset>
					<legend>
						Horários disponíveis
						<button type='button' onClick={addNewScheduleHandler}>
							+ Novo horário
						</button>
					</legend>

					{scheduleItems.map(scheduleItem => {
						return (
							<div
								key={scheduleItems.indexOf(scheduleItem)}
								className='schedule-item'
							>
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
								<Input name='from' label='Das' type='time' />
								<Input name='to' label='Até' type='time' />
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
					<button type='button'>Salvar cadastro</button>
				</footer>
			</section>
		</Container>
	);
};

export default TeachersForm;
