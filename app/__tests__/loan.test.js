const supertest = require('supertest')
const createServer = require('../utils/server')

const app = createServer();

const loanId = 111;
const loanPayloadInput = {
  "loanId": loanId,
  "borrowers": [
    {
      "pairId": 1,
      "firstName": "Daniel",
      "lastName": "Call",
      "phone": "801 706 4567",
      "loanLoanId": null
    },
    {
      "pairId": 2,
      "firstName": "Kathyrn",
      "lastName": "Wafmuffin",
      "phone": "303 854 9078",
      "loanLoanId": null
    },
    {
      "pairId": 3,
      "firstName": "Avery",
      "lastName": "River",
      "phone": "212 511 6584",
      "loanLoanId": null
    }
  ]
};

const loanPayloadCheck = {
  "loanId": loanId,
  "borrowers": [
    {
      "pairId": 1,
      "loanId": loanId,
      "firstName": "Daniel",
      "lastName": "Call",
      "phone": "801 706 4567",
      "loanLoanId": null
    },
    {
      "pairId": 2,
      "loanId": loanId,
      "firstName": "Kathyrn",
      "lastName": "Wafmuffin",
      "phone": "303 854 9078",
      "loanLoanId": null
    },
    {
      "pairId": 3,
      "loanId": loanId,
      "firstName": "Avery",
      "lastName": "River",
      "phone": "212 511 6584",
      "loanLoanId": null
    }
  ]
};

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