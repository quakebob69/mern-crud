const loanId = 111;

const loanPayloadInput = {
  "loanId": loanId,
  "borrowers": [
    {
      "pairId": 1,
      "firstName": "Daniel",
      "lastName": "Call",
      "phone": "801 706 4567"
    },
    {
      "pairId": 2,
      "firstName": "Kathyrn",
      "lastName": "Wafmuffin",
      "phone": "303 854 9078"
    },
    {
      "pairId": 3,
      "firstName": "Avery",
      "lastName": "River",
      "phone": "212 511 6584"
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
      "phone": "801 706 4567"
    },
    {
      "pairId": 2,
      "loanId": loanId,
      "firstName": "Kathyrn",
      "lastName": "Wafmuffin",
      "phone": "303 854 9078"
    },
    {
      "pairId": 3,
      "loanId": loanId,
      "firstName": "Avery",
      "lastName": "River",
      "phone": "212 511 6584"
    }
  ]
};

module.exports = { loanId, loanPayloadInput, loanPayloadCheck };