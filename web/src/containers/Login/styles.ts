import styled from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;

	display: flex;

	.login {
		width: 100%;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: auto 10%;

		.login-body {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.login-extras {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin-top: 3rem;
				color: var(--color-text-complement);

				.remember-container {
					display: flex;
					align-items: center;

					label {
						padding-left: 2rem;
					}
				}

				a {
					margin-top: 3rem;
					color: var(--color-text-complement);
					cursor: pointer;

					&:hover {
						color: var(--color-text-base);
					}
				}
			}
		}

		.login-footer {
			display: flex;
			justify-content: space-around;

			.register a {
				font-weight: bold;
				text-decoration: underline;
				cursor: pointer;
			}

			.free-div {
				span {
					color: var(--color-text-complement);
					font-size: 1.2rem;
				}

				img {
					margin-left: 1rem;
				}
			}
		}
	}

	@media (min-width: 1100px) {
		.login {
			width: 50%;

			.login-body .login-extras {
				flex-direction: row;
				justify-content: space-between;

				a {
					margin-top: 0;
				}
			}

			.login-footer {
				margin: 0 12rem;
			}
		}
	}
`;
