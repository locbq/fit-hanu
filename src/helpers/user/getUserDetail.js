import { accounts } from 'constants/accounts';

export const getUserDetail = (username) => {
  const user = accounts.find((account) => account.username === username);
  if (user) {
    return user;
  }
  return {};
};
