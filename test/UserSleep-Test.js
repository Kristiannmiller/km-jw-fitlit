const chai = require('chai');
const expect = chai.expect;

const UserSleep = require('../src/UserSleep')
const SleepRepository = require('../src/SleepRepository')
const sleepData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6,
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
  {
    "userID": 4,
    "date": "2019/06/16",
    "hoursSlept": 4.1,
    "sleepQuality": 4.2
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "hoursSlept": 4.1,
    "sleepQuality": 2.2
  },

  {
    "userID": 4,
    "date": "2019/06/18",
    "hoursSlept": 7.1,
    "sleepQuality": 5
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "hoursSlept": 6.1,
    "sleepQuality": 4.2
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "hoursSlept": 14,
    "sleepQuality": 1.2
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "hoursSlept": 5.5,
    "sleepQuality": 3.2
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "hoursSlept": 5.0,
    "sleepQuality": 2.6
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "hoursSlept": 9.1,
    "sleepQuality": 4.0
  },
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 3,
    "sleepQuality": 4.8
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

  it ('should return number of hours slept for a specific user on a specific date', () => {
    let sleepRepository = new SleepRepository(userSleepData)
    userSleepStats = sleepRepository.findUserById(1)
    let userSleepHours = new UserSleep(userSleepStats)

    expect(userSleepstats.calculateAverageSleepHours()).to.equal(4.5)
  });
})
