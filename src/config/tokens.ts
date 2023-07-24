import jwt from 'jsonwebtoken';
import crypto, { randomUUID } from 'crypto'

const refresh = process.env.JWT_REFRESH || '';
const access = process.env.JWT_ACCESS || '';

const generateAccessToken = (userData: any): string => {

    const token = jwt.sign(userData, access, {
        expiresIn: 40
    });
    return token;
}

const generateRefreshToken = (userData: any): string => {
    const token = jwt.sign(userData, refresh, {
        expiresIn: 60 * 2 //2min
    });
    return token;
}

export {
    generateAccessToken,
    generateRefreshToken
}