const supertest = require('supertest')
const createServer = require('../utils/server')
const { loanId, pairId } = require('./data')
const { loanPayloadInput, loanPayloadCheck } = require('./data/loan.data')
const { borrowerPayloadUpdate } = require('./data/borrower.data')

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
      it("should return a 200 status and create the loan", async () => {
        const { body, statusCode } = await supertest(app).get(
          `/api/loans/${loanId}`
        );

        expect(statusCode).toBe(200);
        expect(body).toEqual(loanPayloadCheck);
      });
    });
  });

  describe("update borrower route", () => {
    describe("given the borrower does exist", () => {
      it("should return a 200 and update the borrower", async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/api/loans/${loanId}/borrower/${pairId}`)
          .send(borrowerPayloadUpdate);

        expect(statusCode).toBe(200);
        expect(body.message).toEqual("Borrower was updated successfully!");
      });
    });
  });

  describe("delete borrower route", () => {
    describe("given the borrower does exist", () => {
      it("should return a 200 status and borrower deleted message", async () => {
        const { body, statusCode } = await supertest(app).delete(
          `/api/loans/${loanId}/borrower/${pairId}`
        );

        expect(statusCode).toBe(200);
        expect(body.message).toEqual("Borrower was deleted successfully!");
      });
    });
  });

  describe("delete loan route", () => {
    describe("given the loan does exist", () => {
      it("should return a 200 status and loan deleted message", async () => {
        const { body, statusCode } = await supertest(app).delete(
          `/api/loans/${loanId}`
        );

        expect(statusCode).toBe(200);
        expect(body.message).toEqual("Loan was deleted successfully!");
      });
    });
  });

})