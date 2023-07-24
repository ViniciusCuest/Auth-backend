import { describe, expect, it, jest } from '@jest/globals';
import users from '../models/users';
import { login } from './auth-controller';


describe('endpoint Login', () => {


    it('should return status 400 when given credentials are wrong', async () => {
        jest.mock('../models/users', () => ({
            findOne: jest.fn().mockReturnValue({
                full_name: "Nome do Usuário",
                email: "usuario@email.com",
                country: "Brasil",
                phone: "123456789",
                password: "senha123",
            })
        }));


        users.findOne();

        const req: any = {
            body: {
                email: "usuario@email.com",
                password: "senha123"
            }
        }

        const res: any = {
            send: jest.fn(),
            status: jest.fn().mockReturnThis()
        }

        await login(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
    });
});