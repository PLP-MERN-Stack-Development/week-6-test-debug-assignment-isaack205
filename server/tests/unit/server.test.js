const request = require('supertest');
const { app, server } = require('../../server.js'); // Adjust path if needed

describe('Express Server', () => {
  afterAll((done) => {
    server.close(done); // Close the server after tests
  });

  it('GET / should return server running message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Socket\.io Chat Server is running/);
  });
});