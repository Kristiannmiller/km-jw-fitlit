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
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 4.1,
    "sleepQuality": 3.8
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7.5,
    "sleepQuality": 3.8
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 10.7,
    "sleepQuality": 3.4
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "hoursSlept": 8.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 8,
    "sleepQuality": 2.6
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "hoursSlept": 5.7,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 5.3,
    "sleepQuality": 4.9
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "hoursSlept": 5.7,
    "sleepQuality": 1.1
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 10.4,
    "sleepQuality": 3.1
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "hoursSlept": 10.8,
    "sleepQuality": 3.2
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 9.8,
    "sleepQuality": 2.6
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "hoursSlept": 5.9,
    "sleepQuality": 2.5
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "hoursSlept": 10.7,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "hoursSlept": 9.6,
    "sleepQuality": 2.5
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "hoursSlept": 7.2,
    "sleepQuality": 3.4
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "hoursSlept": 5.2,
    "sleepQuality": 2.3
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "hoursSlept": 9.3,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "hoursSlept": 10.1,
    "sleepQuality": 2.4
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "hoursSlept": 9.4,
    "sleepQuality": 1.2
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "hoursSlept": 8.3,
    "sleepQuality": 1.9
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "hoursSlept": 7.8,
    "sleepQuality": 4.2
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "hoursSlept": 4.3,
    "sleepQuality": 4.8
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "hoursSlept": 8.9,
    "sleepQuality": 3.7
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "hoursSlept": 10.6,
    "sleepQuality": 2.7
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "hoursSlept": 7,
    "sleepQuality": 3
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "hoursSlept": 4.8,
    "sleepQuality": 3.3
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "hoursSlept": 9.8,
    "sleepQuality": 2.1
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "hoursSlept": 7.7,
    "sleepQuality": 1.5
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "hoursSlept": 7.8,
    "sleepQuality": 1.5
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "hoursSlept": 8,
    "sleepQuality": 4.9
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "hoursSlept": 4.7,
    "sleepQuality": 3.9
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "hoursSlept": 9.9,
    "sleepQuality": 2.6
  },
  {
    "userID": 1,
    "date": "2019/06/24",
    "hoursSlept": 8,
    "sleepQuality": 1.3
  },
  {
    "userID": 2,
    "date": "2019/06/24",
    "hoursSlept": 10.8,
    "sleepQuality": 1
  },
  {
    "userID": 3,
    "date": "2019/06/24",
    "hoursSlept": 9.3,
    "sleepQuality": 1.8
  },
  {
    "userID": 4,
    "date": "2019/06/24",
    "hoursSlept": 5,
    "sleepQuality": 3.5
  },
  {
    "userID": 1,
    "date": "2019/06/25",
    "hoursSlept": 5.1,
    "sleepQuality": 3.7
  },
  {
    "userID": 2,
    "date": "2019/06/25",
    "hoursSlept": 9.7,
    "sleepQuality": 1.3
  },
  {
    "userID": 3,
    "date": "2019/06/25",
    "hoursSlept": 6.4,
    "sleepQuality": 4.9
  },
  {
    "userID": 4,
    "date": "2019/06/25",
    "hoursSlept": 7.2,
    "sleepQuality": 2.4
  },
  {
    "userID": 1,
    "date": "2019/06/26",
    "hoursSlept": 7.7,
    "sleepQuality": 2.4
  },
  {
    "userID": 2,
    "date": "2019/06/26",
    "hoursSlept": 9.3,
    "sleepQuality": 2.6
  },
  {
    "userID": 3,
    "date": "2019/06/26",
    "hoursSlept": 6.1,
    "sleepQuality": 1.5
  },
  {
    "userID": 4,
    "date": "2019/06/26",
    "hoursSlept": 10.5,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/06/27",
    "hoursSlept": 9.4,
    "sleepQuality": 4.6
  },
  {
    "userID": 2,
    "date": "2019/06/27",
    "hoursSlept": 9,
    "sleepQuality": 1.3
  },
  {
    "userID": 3,
    "date": "2019/06/27",
    "hoursSlept": 4.3,
    "sleepQuality": 4.2
  },
  {
    "userID": 4,
    "date": "2019/06/27",
    "hoursSlept": 4.3,
    "sleepQuality": 2.9
  },
  {
    "userID": 1,
    "date": "2019/06/28",
    "hoursSlept": 7.6,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/28",
    "hoursSlept": 5.2,
    "sleepQuality": 4.9
  },
  {
    "userID": 3,
    "date": "2019/06/28",
    "hoursSlept": 4.3,
    "sleepQuality": 3.7
  },
  {
    "userID": 4,
    "date": "2019/06/28",
    "hoursSlept": 6.4,
    "sleepQuality": 4.2
  },
  {
    "userID": 1,
    "date": "2019/06/29",
    "hoursSlept": 5.3,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/29",
    "hoursSlept": 5.1,
    "sleepQuality": 3.6
  },
  {
    "userID": 3,
    "date": "2019/06/29",
    "hoursSlept": 6.6,
    "sleepQuality": 4
  },
  {
    "userID": 4,
    "date": "2019/06/29",
    "hoursSlept": 5.2,
    "sleepQuality": 4.6
  },
  {
    "userID": 1,
    "date": "2019/06/30",
    "hoursSlept": 6.9,
    "sleepQuality": 2.5
  },
  {
    "userID": 2,
    "date": "2019/06/30",
    "hoursSlept": 9.5,
    "sleepQuality": 2.9
  },
  {
    "userID": 3,
    "date": "2019/06/30",
    "hoursSlept": 6.7,
    "sleepQuality": 1.1
  },
  {
    "userID": 4,
    "date": "2019/06/30",
    "hoursSlept": 4.9,
    "sleepQuality": 2.9
  },
  {
    "userID": 1,
    "date": "2019/07/01",
    "hoursSlept": 4.8,
    "sleepQuality": 4.3
  },
  {
    "userID": 2,
    "date": "2019/07/01",
    "hoursSlept": 9,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/07/01",
    "hoursSlept": 8.1,
    "sleepQuality": 1.8
  },
  {
    "userID": 4,
    "date": "2019/07/01",
    "hoursSlept": 4.3,
    "sleepQuality": 3
  }
];

describe('UserSleep', () => {

  it('should be a function', () => {
    expect(UserSleep).to.be.a('function')
  });

  it ('should return average hours slept for all time for a given user', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(1)
    let userSleepHours = new UserSleep(userSleepStats)

    expect(userSleepHours.calculateAverageSleepHours()).to.equal(7.41)
  });

  it ('should return average sleep quality for all time for a given user', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(1)
    let userSleepQuality = new UserSleep(userSleepStats);

    expect(userSleepQuality.calculateAverageSleepQuality()).to.equal(2.79)
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

    expect(userSleepData.calculateDailySleepHoursForWeek("2019/06/22")).to.deep.equal([8.3, 5.7, 5.9, 5.2, 8.3, 10.6, 7.7])
  });
  it ('should return the daily sleep quality for a given user each day over a week', () => {
    let sleepRepository = new SleepRepository(sleepData)
    userSleepStats = sleepRepository.findUserById(4)
    let userSleepData = new UserSleep(userSleepStats);

    expect(userSleepData.calculateDailySleepQualityForWeek("2019/06/22")).to.deep.equal([4.5, 1.1, 2.5, 2.3, 1.9, 2.7, 1.5])
});

it ('should calculate the average sleep quality for a given week', () => {
  let sleepRepository = new SleepRepository(sleepData)
  userSleepStats = sleepRepository.findUserById(4)
  let userSleepData = new UserSleep(userSleepStats);

  expect(userSleepData.calculateAverageWeeklySleepQuality('2019/06/22')).to.deep.equal(2.36)
})
});
