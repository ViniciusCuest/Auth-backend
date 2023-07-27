import jwt from 'jsonwebtoken';
import { getUnixTimestamp } from '../utils/unix-timestamp';


const refresh = process.env.JWT_REFRESH || '';
const access = process.env.JWT_ACCESS || '';

interface Refresh {
  sub: string;
  scopes: string[] | number[],
  exp?: number;
}



const generateAccessToken = (data: Refresh): string => {
  const token = jwt.sign({ ...data, exp: getUnixTimestamp(1) }, access);
  return token;
};

const generateRefreshToken = (data: Refresh): string => {
  const token = jwt.sign({ ...data, exp: getUnixTimestamp(2) }, refresh);
  console.log('LAST_TOKEN: ', token);
  return token;
};

export {
  generateAccessToken,
  generateRefreshToken
};