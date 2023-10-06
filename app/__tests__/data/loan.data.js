const { loanId } = require('.')

const loanPayloadInput = {
  "loanId": loanId,
  "borrowers": [
    {
      "pairId": 1,
      "firstName": "Daniel",
      "lastName": "Call",
      "phone": "111 111 1111"
    },
    {
      "pairId": 2,
      "firstName": "Kathyrn",
      "lastName": "Wafmuffin",
      "phone": "222 222 2222"
    },
    {
      "pairId": 3,
      "firstName": "Avery",
      "lastName": "River",
      "phone": "333 333 3333"
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
      "phone": "111 111 1111"
    },
    {
      "pairId": 2,
      "loanId": loanId,
      "firstName": "Kathyrn",
      "lastName": "Wafmuffin",
      "phone": "222 222 2222"
    },
    {
      "pairId": 3,
      "loanId": loanId,
      "firstName": "Avery",
      "lastName": "River",
      "phone": "333 333 3333"
    }
  ]
};

module.exports = { loanId, loanPayloadInput, loanPayloadCheck };