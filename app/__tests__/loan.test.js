const supertest = require('supertest')
const createServer = require('../utils/server')

const app = createServer();

const loanPayload = {
  loanId: 456,
};

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

  /*
  describe("given the loan does exist", () => {
    it("should return a 200 status and the load", async () => {
      //const product = await createProduct(productPayload);
      const loanId = 1
      const { body, statusCode } = await supertest(app).get(
        `/api/loans/${loanId}`
      );

      expect(statusCode).toBe(200);
      expect(body.loanId).toBe(loanId);
    });
  });
  */

  it("should create the loan", async () => {
    const { statusCode, body } = await supertest(app)
      .post("/api/loans")
      .send(loanPayload);

    expect(statusCode).toBe(200);

    /*
    expect(body).toEqual({
      __v: 0,
      _id: expect.any(String),
      createdAt: expect.any(String),
      description:
        "Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.",
      image: "https://i.imgur.com/QlRphfQ.jpg",
      price: 879.99,
      productId: expect.any(String),
      title: "Canon EOS 1500D DSLR Camera with 18-55mm Lens",
      updatedAt: expect.any(String),
      user: expect.any(String),
    });
    */
  });
})