const chai = require('chai');
const expect = chai.expect;

const UserHydration = require('../src/UserHydration')
const userData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numOunces": 75
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numOunces": 47
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "numOunces": 85
  }
];

describe('UserHydration', () => {

  it('should be a function', () => {
    expect(UserHydration).to.be.a('function')
  });
});
