import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import WarningIcon from '../../assets/images/icons/warning.svg';

import { Container } from './styles';
import Textarea from '../../components/Textarea';

const TeachersForm: React.FC = () => {
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

					<Input name='subject' label='Matéria' />
					<Input name='cost' label='Custo da sua hora por aula' />
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
