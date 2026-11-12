const request = require("supertest");
const app = require("./app");

test("GET / works", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});

test("GET /about works", async () => {
  const response = await request(app).get("/about");
  expect(response.status).toBe(200);
});