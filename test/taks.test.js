const request = require('supertest');
const app = require('../index'); // Path to your Express app

describe('GET /api/tasks', () => {
    it('should return a list of tasks', async () => {
        const response = await request(app).get('/api/tasks');

        expect(response.status).toBe(200);
    });
});
