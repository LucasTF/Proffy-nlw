import styled from 'styled-components';

export const StyledInput = styled.input`
	height: 72px;
	border: 1px solid var(--color-line-in-white);
	padding-left: 2.5rem;

	&.single {
		border-radius: 8px;
	}

	&.top {
		border-bottom: none;
		border-radius: 8px 8px 0 0;
	}

	&.middle {
		border-bottom: none;
	}

	&.bottom {
		border-radius: 0 0 8px 8px;
	}
`;
