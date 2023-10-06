const { loanId } = require('.')

const loanPayloadInput = {
  "loanId": loanId,
  "borrowers": [
    {
      "pairId": 1,
      "firstName": "Daniel",
      "lastName": "Call",
      "phone": "801 706 1111"
    },
    {
      "pairId": 2,
      "firstName": "Kathyrn",
      "lastName": "Wafmuffin",
      "phone": "303 854 2222"
    },
    {
      "pairId": 3,
      "firstName": "Avery",
      "lastName": "River",
      "phone": "212 511 3333"
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
      "phone": "801 706 1111"
    },
    {
      "pairId": 2,
      "loanId": loanId,
      "firstName": "Kathyrn",
      "lastName": "Wafmuffin",
      "phone": "303 854 2222"
    },
    {
      "pairId": 3,
      "loanId": loanId,
      "firstName": "Avery",
      "lastName": "River",
      "phone": "212 511 3333"
    }
  ]
};

module.exports = { loanId, loanPayloadInput, loanPayloadCheck };