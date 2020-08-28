const chai = require('chai');
const expect = chai.expect;

const UserSleep = require('../src/UserSleep')
const SleepRepository = require('../src/SleepRepository')
const sleepData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "hoursSlept": 5.4,
    "sleepQuality": 3
  }
];

describe('UserSleep', () => {

  it('should be a function', () => {
    expect(UserSleep).to.be.a('function')
  });

  it('should be an instantiation of UserSleep', () => {
    let userSleepStats = new UserSleep()
    expect(userSleepStats).to.be.an.instanceof(UserSleep)
  });
  
})
