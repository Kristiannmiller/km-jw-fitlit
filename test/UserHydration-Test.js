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
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numOunces": 30
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numOunces": 80
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numOunces": 75
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numOunces": 75
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "numOunces": 75
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "numOunces": 75
  },
];

describe('UserHydration', () => {

  it('should be a function', () => {
    expect(UserHydration).to.be.a('function')
  });
  it('should be an instantiation of UserHydration', () => {
    let userWaterStats = new UserHydration()
    expect(userWaterStats).to.be.an.instanceof(UserHydration)
  });
  it('should calculate average fl oz per day consumed by the user', () => {
    let testRepository = new HydrationRepository(userData)
    userWaterIntake = testRepository.findUserById(4)
    let userWaterStats = new UserHydration(userWaterIntake)
    expect(userWaterStats.calculateAverageWaterIntake()).to.equal(92.5)
  });
  it('should return fl oz for a specified date', () => {
    let testRepository = new HydrationRepository(userData)
    userWaterIntake = testRepository.findUserById(4)
    let userWaterStats = new UserHydration(userWaterIntake)

    expect(userWaterStats.waterByDate("2019/06/15")).to.equal(85)
  });
  it('should return fl oz for each day over a week', () => {
    let testRepository = new HydrationRepository(userData)
    userWaterIntake = testRepository.findUserById(2)
    let userWaterStats = new UserHydration(userWaterIntake)

    expect(userWaterStats.waterForWeek("2019/06/21")).to.deep.equal(
      [75, 25, 30, 50, 80, 75, 75])
  });

});
