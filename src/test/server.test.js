// server.test.js
const { server, PORT_NUMBER} = require('../app/server/server');
const request = require('supertest');

describe('Server Tests', () => {
    afterAll((done) => {
        server.close(done);
    });

    test('GET / status-code for completed get all ', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
    });

    test('GET / status-code for completed get first', async () => {
        const response = await request(server).get('/first');
        expect(response.status).toBe(200);
    });

    test('GET / status-code for completed get second', async () => {
        const response = await request(server).get('/second');
        expect(response.status).toBe(200);
    });

    test('GET / status-code for completed get third', async () => {
        const response = await request(server).get('/third');
        expect(response.status).toBe(200);
    });

    test('CREATE / status-code for completed get new', async () => {
        const response = await request(server).get('/new');
        expect(response.status).toBe(201);
    });

    test('GET / status-code for completed get last', async () => {
        const response = await request(server).get('/last');
        expect(response.status).toBe(200);
    });

    test('UPDATE / status-code for completed get update', async () => {
        const response = await request(server).get('/update');
        expect(response.status).toBe(200);
    });

    test('DEL / status-code for completed get remove', async () => {
        const response = await request(server).get('/remove');
        expect(response.status).toBe(204);
    });

    test('DEL / status-code for bad-request', async () => {
        const response = await request(server).get('/remove');
        expect(response.status).toBe(409);
    });

    test('GET / status-code for no-content', async () => {
        const response = await request(server).get('/last');
        expect(response.status).toBe(204);
    });

    test('GET / status-code for completed get first', async () => {
        const response = await request(server).get('/ksadkdkas');
        expect(response.status).toBe(404);
    });

    test('PORT_NUMBER / Check correct number', async () => {
        expect(PORT_NUMBER).toBe(3000);
    });
});


