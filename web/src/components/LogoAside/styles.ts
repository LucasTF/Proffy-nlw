import styled from 'styled-components';

import BgImage from '../../assets/images/background-login.svg';

export const Container = styled.aside`
	width: 50%;

	background-color: var(--color-primary);
	display: none;
	justify-content: center;
	align-items: center;

	.background {
		height: 80%;
		width: 80%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-image: url(${BgImage});
		background-position: center;
		background-repeat: no-repeat;

		.logo-container {
			h3 {
				max-width: 300px;
				font-size: 3rem;
				color: var(--color-text-in-primary);
			}
		}
	}

	@media (min-width: 1100px) {
		display: flex;
	}
`;
