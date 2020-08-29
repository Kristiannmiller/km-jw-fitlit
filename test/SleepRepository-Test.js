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
    expect(testRepository.getSleepQualityAverage()).to.equal(3.03)
});
  it('should select a span of seven days', () => {
    let testRepository = new SleepRepository(sleepData);
    expect(testRepository.selectDay('2019/06/23')).to.deep.equal(['2019/06/15', '2019/06/16', '2019/06/17', '2019/06/18', '2019/06/19', '2019/06/20', '2019/06/20', '2019/06/21', '2019/06/22'])
  });

  it('should find all users who average a sleep quality greater than three for a given week', () => {
    let testRepository = new SleepRepository(sleepData);
    expect(testRepository.findGoodSleepers('2019/06/23')).to.deep.equal([2,3,4])
  });

  it('should return the sleeper who slept the most for a given date', () => {
    let testRepository = new SleepRepository(sleepData);
    expect(testRepository.findBestSleeper('2019/06/15')).to.equal(testRepository.allUserData[2])
  });
});
