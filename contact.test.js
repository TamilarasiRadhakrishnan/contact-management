const request = require('supertest');
const { app, server } = require('../index');

describe('Contact API', () => {
    afterAll(() => {
        server.close(); // Ensure the server shuts down after tests
    });

    it('should fetch all contacts', async () => {
        const res = await request(app).get('/contacts');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
