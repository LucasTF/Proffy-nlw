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

			.input-block {
				position: relative;

				label {
					font-size: 1.4rem;
				}

				input {
					width: 100%;
					height: 5.6rem;
					margin-top: 0.8rem;
					border-radius: 0.8rem;
					background: var(--color-input-background);
					border: 1px solid var(--color-line-in-white);
					outline: 0;
					padding: 0 1.6rem;
					font: 1.6rem Archivo;
				}

				&:focus-within::after {
					width: calc(100% - 3.2rem);
					height: 2px;
					content: '';
					background: var(--color-primary-light);
					position: absolute;
					left: 1.6rem;
					right: 1.6rem;
					bottom: 1rem;
					opacity: 0.6;
				}

				& + .input-block {
					margin-top: 1.4rem;
				}
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
				grid-template-columns: repeat(3, 1fr);
				column-gap: 16px;
				position: absolute;
				bottom: -28px;

				.input-block {
					& + .input-block {
						margin-top: 0;
					}
				}
			}
		}

		section {
			padding: 3.2rem 0;
			max-width: 740px;
		}
	}
`;