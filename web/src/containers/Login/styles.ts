import styled from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;

	display: flex;

	.login {
		width: 50%;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: auto 10%;

		.login-body {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.login-container {
				width: 50%;

				.login-title {
					margin-bottom: 3rem;
					font-size: 3.5rem;
					font-weight: bold;
					color: var(--color-text-title);
				}
				.login-form {
					display: flex;
					flex-direction: column;

					& > input {
						height: 72px;
						border: 1px solid var(--color-line-in-white);
						border-radius: 0 0 8px 8px;
						padding-left: 2.5rem;
					}

					& > input:first-child {
						border-bottom: none;
						border-radius: 8px 8px 0 0;
					}

					.login-extras {
						display: flex;
						justify-content: space-between;
						margin: 3rem 0;
						color: var(--color-text-complement);

						.remember-container {
							display: flex;
							align-items: center;

							#remember-me {
							}

							label {
								margin-left: 2rem;
							}
						}

						a {
							color: var(--color-text-complement);
							cursor: pointer;

							&:hover {
								color: var(--color-text-base);
							}
						}
					}

					button {
						height: 56px;
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
			}
		}

		.login-footer {
			display: flex;
			justify-content: space-around;
			margin: 0 12rem;

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
`;
