import styled from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;

	header {
		#search-teachers {
			margin-top: 3.2rem;

			label {
				color: var(--color-text-in-primary);
			}

			button {
				width: 100%;
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
				margin-top: 3.2rem;

				&:hover {
					background-color: var(--color-secundary-dark);
				}
			}

			div + div {
				margin-top: 1.4rem;
			}
		}
	}

	section {
		margin: 3.2rem auto;
		width: 90%;
	}

	@media (min-width: 700px) {
		header {
			#search-teachers {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				column-gap: 16px;
				position: absolute;
				bottom: -28px;

				div + div {
					margin-top: 0;
				}
			}
		}

		section {
			padding: 3.2rem 0;
			max-width: 740px;
		}
	}
`;
