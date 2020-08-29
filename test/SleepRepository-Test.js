const chai = require('chai');
const expect = chai.expect;

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
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 8.8,
    "sleepQuality": 3.7
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 5,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 7,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "hoursSlept": 7,
    "sleepQuality": 1.4
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "hoursSlept": 6.8,
    "sleepQuality": 4.1
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "hoursSlept": 10,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "hoursSlept": 4.8,
    "sleepQuality": 1.7
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "hoursSlept": 4.5,
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
  }
];

describe('SleepRepository', () => {

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function')
  });

  it('should be an instation of SleepRepository', () => {
    let testRepository = new SleepRepository;
    expect(testRepository).to.be.an.instanceof(SleepRepository)
  });

  it('should hold all of the user sleep objects', () => {
    let testRepository = new SleepRepository(sleepData);
    expect(testRepository.allUserData).to.equal(sleepData)
  });

  it('should calculate the average sleep quality for all users', () => {
    let testRepository = new SleepRepository(sleepData);
    expect(testRepository.getSleepQualityAverage()).to.equal(3.38)
});
  it('should select a span of seven days')
  it('should find all users who average a sleep quality greater than three for a given week', () => {
    let testRepository = new SleepRepository(sleepData);
    expect(testRepository.findGoodSleepers()).to.deep.equal([2,3,4])
  });

  it('should return the sleeper who slept the most for a given date', () => {
    let testRepository = new SleepRepository(sleepData);
    expect(testRepository.findBestSleeper('2019/06/15')).to.equal(testRepository.allUserData[2])
  });
});
