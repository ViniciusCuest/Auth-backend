import jwt from 'jsonwebtoken';
import crypto, { randomUUID } from 'crypto'

const { privateKey: privateKeyAccess, publicKey: publicKeyAccess } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

// Gerar o par de chaves assimétricas (RSA) para o refresh token
const { privateKey: privateKeyRefresh, publicKey: publicKeyRefresh } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});

const generateAccessToken = (userData: any) => {

    const secret_token = process.env.SECRET_JWT;
    const token = jwt.sign(userData, privateKeyAccess.export({ type: 'pkcs1', format: 'pem' }), {
        algorithm: 'RS256',
        expiresIn: 40
    });
    return token;
}

const generateRefreshToken = (userData: any) => {
    const refreshTokenSecret = 'seuOutroSegredo'; // Substitua por um segredo seguro em produção
    const token = jwt.sign(userData, 'MYREFRESHTOKENSECRET', {
        expiresIn: 60 * 2 //2min
    });
    return token;
}

export {
    generateAccessToken,
    generateRefreshToken
}