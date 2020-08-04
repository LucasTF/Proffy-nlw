import knex from 'knex';

import { CONN_STRING } from '../env';

const db = knex({
	client: 'pg',
	connection: CONN_STRING,
});

export default db;
