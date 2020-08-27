const chai = require('chai');
const expect = chai.expect;

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
  }
];

describe('HydrationRepository', () => {

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function')
  });

  it('should be an instantiation of HydrationRepository', () => {
    let testRepository = new HydrationRepository;
    expect(testRepository).to.be.an.instanceof(HydrationRepository)
  })

  it('should hold on to all of the user hydration objects', () => {
    let testRepository = new HydrationRepository(userData);
    expect(testRepository.data[0].userID).to.equal(1)
    expect(testRepository.data[1].userID).to.equal(2)
    expect(testRepository.data[2].userID).to.equal(3)
    expect(testRepository.data[3].userID).to.equal(4)
  })
  //
  // it('should be able to access user data by id', () => {
  //   let testRepository = new HydrationRepository(userData);
  //   expect(testRepository.findUserById(15)).to.deep.equal(userData[0])
  // })
  //
  // it('should be able to return the average step goal amongst all users', () => {
  //   let testRepository = new HydrationRepository(userData);
  //   expect(testRepository.calculateAverageStepGoal()).to.equal(7250)
  // })
});
