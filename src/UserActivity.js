const User = require('../src/User')
const UserRepository = require('../src/UserRepository')

class UserActivity {
  constructor(userActivity, user){
    this.userActivity = userActivity;
    this.user = user;
  }
  calculateMiles(date, user) {
    let dateData = this.userActivity.find(oneDate => oneDate.date == date);
    console.log(dateData)
    let stepsNeeded = 5280/user.strideLength;
    console.log(typeof(user.strideLength))
    let roundedStepsNeeded = Math.floor(stepsNeeded);
    let milesWalked = dateData.numSteps/roundedStepsNeeded;
    let roundedMilesWalked = Math.floor(milesWalked);
    return roundedMilesWalked;
  }
  calculateStepsTaken(date){
    let stepsPerDay = this.userActivity.find(stepsTaken => stepsTaken.date === date)
    return parseFloat((stepsPerDay.numSteps).toFixed(2))
  }

  calculateMinActive(date){
    let minPerDay = this.userActivity.find(minActive => minActive.date === date)
    return parseFloat((minPerDay.minutesActive).toFixed(2))
  }
  calculateAvgMinActivePerWeek(endingDate){
    let endingDateIndex = this.userActivity.findIndex(activityData => activityData.date === endingDate)
    let weekOfActivity = this.userActivity.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfActivity.reduce((acc, currentValue) => {
      acc += currentValue.minutesActive
      return acc
    }, 0)
    return parseFloat((result/weekOfActivity.length).toFixed(2))
  }
  calculateStepGoalAchieved(date){
    let stepGoalsAchieved = this.userActivity.find(goalAchieved =>
      goalAchieved.date > user.dailyStepGoal
    )
  }
  calculateStairsByDate(date) {
    let stairsPerDay = this.userActivity.find(stairRecord => stairRecord.date === date)
    return parseFloat((stairsPerDay.flightsOfStairs).toFixed(2))
  }

  calculateDaysGoalExceeded(){
    let stepGoalsAchieved = this.userActivity.filter(goalAchieved => goalAchieved)
  }
  calculateMostStairsClimbed(user, date){

  }
}

if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}
