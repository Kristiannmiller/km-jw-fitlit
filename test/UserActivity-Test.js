const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository')
const UserActivity = require('../src/UserActivity')
const User = require('../src/User')

const userData = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  }
]
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
  },
  {
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
  }
];
describe('UserActivity', () => {

  it('should be a function', () => {
    expect(UserActivity).to.be.a('function')
  });
  it('should be an instance of Activity', () => {
    let testActivity1 = new UserActivity(activityData[0]);

    expect(testActivity1).to.be.an.instanceof(UserActivity);
  });
  it('should be able to have a userID property', () => {
    let testRepository = new ActivityRepository(activityData)
    let userActivityData = testRepository.findUserById(1)
    let userActivityStats = new UserActivity(userActivityData[0])

    expect(userActivityStats.userID).to.equal(1);
  });

  it('should be able to have a date property', () => {
    let testRepository = new ActivityRepository(activityData)
    let userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData[0]);

    expect(userActivityStats.date).to.equal("2019/06/15");
  });

  it('should be able to track the number of miles the user has walked for a specific date', () => {
    let testUser = new User(userData[0])
    let testRepository = new ActivityRepository(activityData)
    let userActivityStats = new UserActivity(activityData);

    expect(userActivityStats.calculateMiles('2019/06/15', testUser)).to.equal(2.91)
  });

  it('should be able to track the number of steps taken by a given user for a specific date', () => {
    let testRepository = new ActivityRepository(activityData)
    let userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData);

    expect(userActivityStats.calculateStepsTaken('2019/06/15')).to.equal(3577)
  })
  it('should be able to track the number of minutes a given user was active for a specific date as specified by UserId', () => {
    let testRepository = new ActivityRepository(activityData)
    let userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData);

    expect(userActivityStats.calculateMinActive('2019/06/15')).to.equal(140)
  });

  it('should be able to calculate how many steps the user averaged for a given week', () => {
   let testRepository = new ActivityRepository(activityData)
   userActivityData = testRepository.findUserById(1);
   let userActivityStats = new UserActivity(userActivityData)
   console.log(userActivityStats)
   expect(userActivityStats.calculateAverageWeeklySteps('2019/06/21')).to.deep.equal(8376)
  });

  it('should be able to calculate how many minutes active the user averaged for a given week', () => {
    let testRepository = new ActivityRepository(activityData)
    let userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData)

    expect(userActivityStats.calculateAvgMinActivePerWeek('2019/06/22')).to.deep.equal(168.14)
  });
  it('should be able to calculate whether the user has exceeded their daily step goal', () => {
    let testUser = new User(userData[0])
    let testRepository = new ActivityRepository(activityData)
    let userActivityStats = new UserActivity(activityData[0]);

    expect(userActivityStats.stepGoalAchieved('2019/06/15', testUser)).to.equal(false)
  });
  it('should be able to track the number of stairs taken by a given user for a specific date', () => {
    let testUser = new User(userData[0])
    let testRepository = new ActivityRepository(activityData)
    let userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData);

    expect(userActivityStats.calculateStairsByDate('2019/06/15', testUser)).to.equal(16)
  });
  it('should return flights for each day over a week', () => {
   let testRepository = new ActivityRepository(activityData)
   userActivityData = testRepository.findUserById(1)
   let userActivityStats = new UserActivity(userActivityData)

   expect(userActivityStats.calculateStairsForWeek("2019/06/21")).to.deep.equal(
     [16, 36, 18, 33, 2, 12, 6])
   });
   it('should be able to calculate how many flights of stairs the user averaged for a given week', () => {
    let testRepository = new ActivityRepository(activityData)
    userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData)

    expect(userActivityStats.calculateAverageStairsPerWeek('2019/06/21')).to.equal(18)
  });
  it('should return the record of the users highest daily step count', () => {
    let testRepository = new ActivityRepository(activityData)
    userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData)

    expect(userActivityStats.findStepsRecord()).to.deep.equal({"userID": 1, "date": "2019/06/20", "numSteps": 14478, "minutesActive": 140, "flightsOfStairs": 12})
  });
  it('should return the record of the users highest daily stair count', () => {
    let testRepository = new ActivityRepository(activityData)
    userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData)

    expect(userActivityStats.findStairsRecord()).to.deep.equal({"userID": 1, "date": "2019/06/27", "numSteps": 3303, "minutesActive": 79, "flightsOfStairs": 39})
  });
  it('should return the record of the users highest daily active minutes count', () => {
    let testRepository = new ActivityRepository(activityData)
    userActivityData = testRepository.findUserById(1);
    let userActivityStats = new UserActivity(userActivityData)

    expect(userActivityStats.findActiveMinRecord()).to.deep.equal({"userID": 1, "date": "2019/06/19", "numSteps": 8429, "minutesActive": 275, "flightsOfStairs": 2})
  });
  it('should return minutes active for each day over a week', () => {
    let testRepository = new ActivityRepository(activityData)
    userActivityData = testRepository.findUserById(1)
    let userActivityStats = new UserActivity(userActivityData)

    expect(userActivityStats.calculateActiveMinsForWeek("2019/06/21")).to.deep.equal(
      [140, 175, 168, 165, 275, 140, 135])
  });
  it('should return number of steps for each day over a week', () => {
    let testRepository = new ActivityRepository(activityData)
    userActivityData = testRepository.findUserById(1)
    let userActivityStats = new UserActivity(userActivityData)

    expect(userActivityStats.calculateStepsForWeek("2019/06/21")).to.deep.equal(
      [3577, 6637, 14329, 4419, 8429, 14478, 6760])
  });
})
