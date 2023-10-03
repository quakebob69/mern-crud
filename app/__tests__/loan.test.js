const supertest = require('supertest')
const app = require('../../index');

describe("loan", () => {
  describe("get loan route", () => {
    describe("given the loan does not exist", () => {
      it("should return a 404", async () => {
        const loanId = 'product-123'
        await supertest(app).get('/api/loans/${loanId}')
          .expect(404);
      })
    })
  })

  describe("given the loan does exist", () => {
    it("should return a 200 status and the product", async () => {
      //const product = await createProduct(productPayload);
      const loanId = 1
      const { body, statusCode } = await supertest(app).get(
        `/api/loans/${loanId}`
      );

      expect(statusCode).toBe(200);
      expect(body.loanId).toBe(loanId);
    });
  });
})