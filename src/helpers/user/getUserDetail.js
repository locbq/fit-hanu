import { accounts } from 'constants/accounts';

export const getUserDetail = (username) => {
  if (username) return accounts.find((account) => account.username === username);
  return {};
};
