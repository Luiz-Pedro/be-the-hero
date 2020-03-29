const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    beforeEach(async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    it('should be able to create a new ong', async () => {
        const response = await request(app).post('/ongs').send({//.set('Authorization', '1312s4f2) antes do send para headers
            name: "Ong Nacoes unidas",
            email: "teste@email.com",
            whatsapp: "3199999999",
            city: "Rio de Janeiro",
            uf: "RJ"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    afterAll(async () => {
        await connection.destroy();
    });
});