import React from 'react';

import PageHeader from '../../components/PageHeader';

import * as Styled from './styles';

const Favorites: React.FC = () => {
	return (
		<Styled.Container>
			<PageHeader title='Meus proffys favoritos' />
		</Styled.Container>
	);
};

export default Favorites;
