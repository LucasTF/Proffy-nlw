import styled from 'styled-components';

export const Container = styled.div`
	width: 50%;

	.title {
		font-family: Archivo, 'sans-serif';
		font-size: 3.5rem;
		font-weight: bold;
		color: var(--color-text-title);
	}

	.description {
		margin-top: 2rem;
		max-width: 250px;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 3rem;

		.submit-button {
			height: 56px;
			margin-top: 3rem;
			border: none;
			border-radius: 8px;
			background: var(--color-button-disabled);
			color: var(--color-text-complement);
			cursor: pointer;
			transition: background-color 0.3s;

			&:hover {
				color: var(--color-button-text);
				background: var(--color-secundary-dark);
			}
		}
	}
`;
