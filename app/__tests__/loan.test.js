const supertest = require('supertest')
const asdf = require('./index.js');
//const asdf = require("../controllers/loan.controller.js");


describe("loan", () => {
    describe("get loan route", () => {
        describe("given the loan does not exist", () => {
            it("should return a 404", async () => {
                const loanId = 'loan-123'
                //await supertest().get('/api/loans/${loanId}').
                //await supertest(asdf.app).get('http://localhost:3000/api/loans/1').
                //expect(404);
            })
        })
    })
})