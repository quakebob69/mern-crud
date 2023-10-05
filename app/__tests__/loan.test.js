const supertest = require('supertest')
const createServer = require('../utils/server')
const { loanPayloadInput, loanPayloadCheck, loanId} = require('./data/loan.data')

const app = createServer();

describe("loan", () => {
  describe("create loan route", () => {
    it("should return a 200 and create the loan", async () => {
      const { statusCode, body } = await supertest(app)
        .post("/api/loans")
        .send(loanPayloadInput);

      expect(statusCode).toBe(200);
      expect(body).toEqual(loanPayloadCheck);
    });
  });

  describe("get loan route", () => {
    describe("given the loan does not exist", () => {
      it("should return a 404", async () => {
        const loanId = 999
        await supertest(app).get(`/api/loans/${loanId}`)
          .expect(404);
      });
    });

    describe("given the loan does exist", () => {
      it("should return a 200 status and the loan", async () => {
        const { body, statusCode } = await supertest(app).get(
          `/api/loans/${loanId}`
        );

        expect(statusCode).toBe(200);
        expect(body).toEqual(loanPayloadCheck);
      });
    });
  });
})