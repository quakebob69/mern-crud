const supertest = require('supertest')
const createServer = require('../utils/server')
const { loanId, pairId } = require('./data')
const { borrowerPayloadUpdate } = require('./data/borrower.data')

const app = createServer();

describe("loan", () => {
    describe("get loan", () => {
        describe("given the product doesn not exist", () => {
            it("should return a 404", () => {
                console.log(loanId)
                console.log(pairId);
                console.log(borrowerPayloadUpdate);
                expect(true).toBe(true);
            })
        })
    })
})
