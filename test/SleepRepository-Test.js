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
    expect(testRepository.allUserData[0].userID).to.equal(1)
    expect(testRepository.allUserData[1].userID).to.equal(2)
    expect(testRepository.allUserData[2].userID).to.equal(3)
    expect(testRepository.allUserData[3].userID).to.equal(4)
  })
});
