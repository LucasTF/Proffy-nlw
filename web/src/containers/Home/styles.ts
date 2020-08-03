import styled from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	color: var(--color-text-in-primary);
	background: var(--color-primary);

	.logo-container {
		text-align: center;
		margin-bottom: 3.2rem;

		img {
			height: 10rem;
		}

		h2 {
			font-weight: 500;
			font-size: 2.4rem;
			line-height: 4.6rem;
			margin-top: 0.8rem;
		}
	}

	.home-image {
		width: 100%;
	}

	.buttons-container {
		display: flex;
		justify-content: center;
		margin: 3.2rem 0;

		a {
			width: 30rem;
			height: 10.4rem;
			border-radius: 0.8rem;
			font: 700 2rem Archivo;

			display: flex;
			align-items: center;
			justify-content: center;

			text-decoration: none;
			color: var(--color-button-text);

			transition: background-color 0.2s;

			&.study {
				background: var(--color-primary-lighter);
				&:hover {
					background: var(--color-primary-light);
				}
			}

			&.give-classes {
				background: var(--color-secundary);
				&:hover {
					background: var(--color-secundary-dark);
				}
			}

			&:first-child {
				margin-right: 1.6rem;
			}

			img {
				width: 4rem;
			}
		}
	}

	.total-connections {
		font-size: 1.4rem;

		display: flex;
		align-items: center;
		justify-content: center;

		img {
			margin-left: 0.8rem;
		}
	}
`;
