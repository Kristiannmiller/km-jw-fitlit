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
  },
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

  it ('should return average hours slept for all time for a given user', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(1)
    let userSleepHours = new UserSleep(userSleepStats)

    expect(userSleepHours.calculateAverageSleepHours()).to.equal(4.5)
  });

  it ('should return average sleep quality for all time for a given user', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(1)
    let userSleepQuality = new UserSleep(userSleepStats);

    expect(userSleepQuality.calculateAverageSleepQuality()).to.equal(3.5)
  });

  it ('should return the hours slept by a specific user on a specific date', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(4)
    let userSleepData = new UserSleep(userSleepStats);

    expect(userSleepData.calculateSleepByDate("2019/06/15")).to.deep.equal(5.4)
  });

  it ('should return the quality of sleep by a specific user on a specific date', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(4)
    let userSleepData = new UserSleep(userSleepStats);

    expect(userSleepData.calculateSleepQualityByDate("2019/06/15")).to.deep.equal(3)
  })
  it ('should return the number of hours slept for a given user each day over a week', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(4)
    let userSleepData = new UserSleep(userSleepStats);

    expect(userSleepData.calculateDailySleepHoursForWeek("2019/06/22")).to.deep.equal({"2019/06/16":4.1, "2019/06/17":4.1, "2019/06/18": 7.1, "2019/06/19":6.1, "2019/06/20":14, "2019/06/21":5.5, "2019/06/22": 5.0})
  });
  it ('should return the daily sleep quality for a given user each day over a week', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(4)
    let userSleepData = new UserSleep(userSleepStats);

    expect(userSleepData.calculateDailySleepQualityForWeek("2019/06/22")).to.deep.equal({"2019/06/16":4.2, "2019/06/17":2.2, "2019/06/18": 5, "2019/06/19":4.2, "2019/06/20":1.2, "2019/06/21":3.2, "2019/06/22": 2.6})
});

it ('should calculate the average sleep quality for a given week', () => {
  let sleepRepository = new SleepRepository(sleepData)
  userSleepStats = sleepRepository.findUserById(4)
  let userSleepData = new UserSleep(userSleepStats);

  expect(userSleepData.calculateAverageWeeklySleepQuality('2019/06/22')).to.deep.equal(3.23)
})
});
