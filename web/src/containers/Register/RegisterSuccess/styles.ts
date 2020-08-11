import styled from 'styled-components';

import BgImage from '../../../assets/images/success-background.svg';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;

	background-color: var(--color-primary);
	background-image: url(${BgImage});
	background-repeat: no-repeat no-repeat;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			font-family: Archivo, 'sans-serif';
			font-size: 6rem;
			color: var(--color-title-in-primary);
			margin: 40px 0 24px 0;
		}

		p {
			color: var(--color-text-in-primary);
		}

		a {
			width: 18rem;
			height: 5.6rem;
			background: var(--color-secundary);
			color: var(--color-button-text);
			border: 0;
			border-radius: 0.8rem;
			cursor: pointer;
			font: 700 1.6rem Archivo;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			transition: background-color 0.2s;
			margin-top: 8rem;

			&:hover {
				background-color: var(--color-secundary-dark);
			}
		}
	}
`;
