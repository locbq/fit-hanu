import CryptoJS from 'crypto-js';

import { ENCRYPT_KEY } from 'constants/key';

export const encrypt = (username, password) => {
  const loginInfo = {
    username,
    password,
  };

  const encryptedLoginInfo = CryptoJS.AES.encrypt(JSON.stringify(loginInfo), ENCRYPT_KEY).toString();
  return encryptedLoginInfo;
};
