import styled from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	overflow: hidden;

	.register {
		width: 100%;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 5% auto;
		overflow-y: auto;

		header {
			display: flex;
			justify-content: center;
			div {
				width: 50%;
				margin-top: 2rem;
			}
		}

		.register-body {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	@media (min-width: 1100px) {
		.register {
			width: 50%;
		}
	}
`;
