const chai = require('chai');
const expect = chai.expect;

const UserHydration = require('../src/UserHydration')
const HydrationRepository = require('../src/HydrationRepository')
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
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 20
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 25
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numOunces": 75
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "numOunces": 100
  }
];

describe('UserHydration', () => {

  it('should be a function', () => {
    expect(UserHydration).to.be.a('function')
  });
  it('should be an instation of UserHydration', () => {
    let userWaterStats = new UserHydration()
    expect(userWaterStats).to.be.an.instanceof(UserHydration)
  });
  it('should calculate average fl oz per day consumed by the user', () => {
    let testRepository = new HydrationRepository(userData)
    userWaterIntake = testRepository.findUserById(4)
    let userWaterStats = new UserHydration(userWaterIntake)
    expect(calculateAverageWaterIntake()).to.equal(92.5)
  });
});
