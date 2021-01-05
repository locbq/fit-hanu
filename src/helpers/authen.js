import { accounts } from 'constants/accounts';

export const authen = (username, password) => accounts.some((account) => account.username === username && account.password === password);
