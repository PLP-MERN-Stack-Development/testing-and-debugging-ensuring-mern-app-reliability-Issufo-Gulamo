const request = require('supertest');
const app = require('../index');

describe('User API', () => {
  test('GET /users returns all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: 'Issufo' }]);
  });

  test('POST /users creates a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Test User' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test User');
  });

  test('POST /users without name returns 400', async () => {
    const res = await request(app)
      .post('/users')
      .send({});
    expect(res.statusCode).toBe(400);
  });
});
