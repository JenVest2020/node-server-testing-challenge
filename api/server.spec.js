const server = require('./server.js');
const request = require('supertest');


describe('server.js', () => {
    it('should run in a test environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {

        it('should return status code 200', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });

        it('should return {api: "Lets Party!"}', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ api: "Lets Party!" });
        });
    });
})