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
			}
		}

		section {
			padding: 3.2rem 0;
			max-width: 740px;
		}
	}
`;
