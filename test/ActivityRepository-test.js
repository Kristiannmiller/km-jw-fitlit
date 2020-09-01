const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository')
const UserActivity = require('../src/UserActivity')
const activityData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "numSteps": 3486,
    "minutesActive": 114,
    "flightsOfStairs": 32
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 6637,
    "minutesActive": 175,
    "flightsOfStairs": 36
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numSteps": 4112,
    "minutesActive": 220,
    "flightsOfStairs": 37
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numSteps": 12304,
    "minutesActive": 152,
    "flightsOfStairs": 8
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "numSteps": 10689,
    "minutesActive": 204,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numSteps": 14329,
    "minutesActive": 168,
    "flightsOfStairs": 18
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numSteps": 13750,
    "minutesActive": 65,
    "flightsOfStairs": 4
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numSteps": 4547,
    "minutesActive": 97,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "numSteps": 8160,
    "minutesActive": 72,
    "flightsOfStairs": 25
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "numSteps": 4419,
    "minutesActive": 165,
    "flightsOfStairs": 33
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numSteps": 4662,
    "minutesActive": 181,
    "flightsOfStairs": 31
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numSteps": 2546,
    "minutesActive": 274,
    "flightsOfStairs": 26
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "numSteps": 10056,
    "minutesActive": 120,
    "flightsOfStairs": 34
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numSteps": 8429,
    "minutesActive": 275,
    "flightsOfStairs": 2
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numSteps": 9858,
    "minutesActive": 243,
    "flightsOfStairs": 44
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numSteps": 10961,
    "minutesActive": 188,
    "flightsOfStairs": 17
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "numSteps": 13451,
    "minutesActive": 203,
    "flightsOfStairs": 2
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numSteps": 14478,
    "minutesActive": 140,
    "flightsOfStairs": 12
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numSteps": 8153,
    "minutesActive": 74,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numSteps": 5369,
    "minutesActive": 129,
    "flightsOfStairs": 46
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "numSteps": 3314,
    "minutesActive": 240,
    "flightsOfStairs": 6
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numSteps": 6760,
    "minutesActive": 135,
    "flightsOfStairs": 6
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numSteps": 10225,
    "minutesActive": 174,
    "flightsOfStairs": 26
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numSteps": 7498,
    "minutesActive": 199,
    "flightsOfStairs": 13
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "numSteps": 11807,
    "minutesActive": 142,
    "flightsOfStairs": 46
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "numSteps": 10289,
    "minutesActive": 119,
    "flightsOfStairs": 6
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "numSteps": 3605,
    "minutesActive": 124,
    "flightsOfStairs": 31
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "numSteps": 11342,
    "minutesActive": 53,
    "flightsOfStairs": 17
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "numSteps": 3595,
    "minutesActive": 243,
    "flightsOfStairs": 19
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "numSteps": 13928,
    "minutesActive": 218,
    "flightsOfStairs": 21
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "numSteps": 4148,
    "minutesActive": 142,
    "flightsOfStairs": 0
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "numSteps": 4665,
    "minutesActive": 219,
    "flightsOfStairs": 9
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "numSteps": 12134,
    "minutesActive": 99,
    "flightsOfStairs": 3
  },
  {
    "userID": 1,
    "date": "2019/06/24",
    "numSteps": 7186,
    "minutesActive": 25,
    "flightsOfStairs": 15
  },
  {
    "userID": 2,
    "date": "2019/06/24",
    "numSteps": 8568,
    "minutesActive": 81,
    "flightsOfStairs": 31
  },
  {
    "userID": 3,
    "date": "2019/06/24",
    "numSteps": 10142,
    "minutesActive": 269,
    "flightsOfStairs": 45
  },
  {
    "userID": 4,
    "date": "2019/06/24",
    "numSteps": 3704,
    "minutesActive": 118,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/25",
    "numSteps": 3093,
    "minutesActive": 185,
    "flightsOfStairs": 25
  },
  {
    "userID": 2,
    "date": "2019/06/25",
    "numSteps": 10305,
    "minutesActive": 214,
    "flightsOfStairs": 5
  },
  {
    "userID": 3,
    "date": "2019/06/25",
    "numSteps": 4473,
    "minutesActive": 158,
    "flightsOfStairs": 37
  },
  {
    "userID": 4,
    "date": "2019/06/25",
    "numSteps": 14547,
    "minutesActive": 253,
    "flightsOfStairs": 6
  },
  {
    "userID": 1,
    "date": "2019/06/26",
    "numSteps": 8105,
    "minutesActive": 219,
    "flightsOfStairs": 28
  },
  {
    "userID": 2,
    "date": "2019/06/26",
    "numSteps": 11522,
    "minutesActive": 88,
    "flightsOfStairs": 18
  },
  {
    "userID": 3,
    "date": "2019/06/26",
    "numSteps": 3126,
    "minutesActive": 229,
    "flightsOfStairs": 45
  },
  {
    "userID": 4,
    "date": "2019/06/26",
    "numSteps": 14142,
    "minutesActive": 124,
    "flightsOfStairs": 8
  },{
    "userID": 1,
    "date": "2019/06/27",
    "numSteps": 3303,
    "minutesActive": 79,
    "flightsOfStairs": 39
  },
  {
    "userID": 2,
    "date": "2019/06/27",
    "numSteps": 4240,
    "minutesActive": 151,
    "flightsOfStairs": 5
  },
  {
    "userID": 3,
    "date": "2019/06/27",
    "numSteps": 9789,
    "minutesActive": 265,
    "flightsOfStairs": 45
  },
  {
    "userID": 4,
    "date": "2019/06/27",
    "numSteps": 4053,
    "minutesActive": 90,
    "flightsOfStairs": 9
  },
  {
    "userID": 1,
    "date": "2019/06/28",
    "numSteps": 10517,
    "minutesActive": 169,
    "flightsOfStairs": 6
  },
  {
    "userID": 2,
    "date": "2019/06/28",
    "numSteps": 12555,
    "minutesActive": 193,
    "flightsOfStairs": 45
  },
  {
    "userID": 3,
    "date": "2019/06/28",
    "numSteps": 6535,
    "minutesActive": 188,
    "flightsOfStairs": 19
  },
  {
    "userID": 4,
    "date": "2019/06/28",
    "numSteps": 8401,
    "minutesActive": 263,
    "flightsOfStairs": 8
  },
  {
    "userID": 1,
    "date": "2019/06/29",
    "numSteps": 6984,
    "minutesActive": 33,
    "flightsOfStairs": 6
  },
  {
    "userID": 2,
    "date": "2019/06/29",
    "numSteps": 8096,
    "minutesActive": 181,
    "flightsOfStairs": 40
  },
  {
    "userID": 3,
    "date": "2019/06/29",
    "numSteps": 11823,
    "minutesActive": 85,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/29",
    "numSteps": 7702,
    "minutesActive": 84,
    "flightsOfStairs": 33
  },
  {
    "userID": 1,
    "date": "2019/06/30",
    "numSteps": 14880,
    "minutesActive": 21,
    "flightsOfStairs": 8
  },
  {
    "userID": 2,
    "date": "2019/06/30",
    "numSteps": 14974,
    "minutesActive": 300,
    "flightsOfStairs": 49
  },
  {
    "userID": 3,
    "date": "2019/06/30",
    "numSteps": 4434,
    "minutesActive": 174,
    "flightsOfStairs": 14
  },
  {
    "userID": 4,
    "date": "2019/06/30",
    "numSteps": 12910,
    "minutesActive": 84,
    "flightsOfStairs": 34
  },
  {
    "userID": 1,
    "date": "2019/07/01",
    "numSteps": 7388,
    "minutesActive": 207,
    "flightsOfStairs": 16
  },
  {
    "userID": 2,
    "date": "2019/07/01",
    "numSteps": 10276,
    "minutesActive": 46,
    "flightsOfStairs": 3
  },
  {
    "userID": 3,
    "date": "2019/07/01",
    "numSteps": 7293,
    "minutesActive": 112,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/07/01",
    "numSteps": 3116,
    "minutesActive": 254,
    "flightsOfStairs": 42
  }
];
describe('ActivityRepository', () => {

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function')
  });
  it('should be an instantiation of ActivityRepository', () => {
    let testRepository = new ActivityRepository;
    expect(testRepository).to.be.an.instanceof(ActivityRepository)
  });
  it('should hold all of the user activity objects', () => {
    let testRepository = new ActivityRepository(activityData);
    expect(testRepository.allActivityData).to.equal(activityData)
  });
  it('should be able to access all activity data by a users id', () => {
    let testRepository = new ActivityRepository(userData);
    expect(testRepository.findUserById(3)).to.deep.equal([userData[2], userData[6], userData[10], userData[14], userData[18], userData[22]])
  });
  it ('should calculate the average stairs climbed by all users on a given date', () => {
    let testRepository = new ActivityRepository(activityData);
    expect(testRepository.calculateAverageStairsClimbedbyDate('2019/06/15')).to.equal(22.75)
  });
  it ('should calculate the average number of steps taken by all users on a given date', () => {
    let testRepository = new ActivityRepository(activityData);
    expect(testRepository.calculateAverageStepsTakenbyDate('2019/06/15')).to.equal(4689.75)
  });
  it('should calculate the average minutes active for all users on a specific date', () => {
    let testRepository = new ActivityRepository(activityData);
    expect(testRepository.calculateMinActive('2019/06/15')).to.equal(127)
  });
  it('should calculate the best stair climber of all users on a given date', () => {
    let testRepository = new ActivityRepository(activityData);
    expect(testRepository.findBestClimber('2019/06/15')).to.equal(testRepository.activityData[2].userId)
  });
})
