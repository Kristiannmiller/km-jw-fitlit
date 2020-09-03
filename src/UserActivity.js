// const User = require('../src/User')
// const UserRepository = require('../src/UserRepository')

class UserActivity {
  constructor(userActivity, userData){
    this.userActivity = userActivity;
    this.user = userData;
  }
  calculateMiles(date, user) {
    let dateData = this.userActivity.find(oneDate => oneDate.date == date);
    let stepsNeeded = 5280/user.strideLength;
    let milesWalked = dateData.numSteps/stepsNeeded;
    return parseFloat((milesWalked).toFixed(2));
  }
  
  calculateStepsTaken(date){
    let stepsPerDay = this.userActivity.find(stepsTaken => stepsTaken.date === date)
    return parseFloat((stepsPerDay.numSteps).toFixed(2))
  }
  calculateAverageWeeklySteps(endingDate) {
   let endingDateIndex = this.userActivity.findIndex(activityData => activityData.date === endingDate)
   let weekOfActivity = this.userActivity.slice(endingDateIndex-6, endingDateIndex+1)
   let result = weekOfActivity.reduce((acc, currentValue) => {
     acc += currentValue.numSteps
     return acc
   }, 0)
   return parseFloat((result/weekOfActivity.length).toFixed(0))
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
  calculateStepGoalAchieved(date, user){
    let dailySteps = this.userActivity.find(oneDate => oneDate.date == date);
    if (dailySteps > user.dailyStepGoal){
      return true;
    } else {
      return false;
    }
  }
  calculateStairsByDate(date) {
    let stairsPerDay = this.userActivity.find(stairRecord => stairRecord.date === date)
    return parseFloat((stairsPerDay.flightsOfStairs).toFixed(2))
  }
  calculateStairsForWeek(endingDate) {
    let endingDateIndex = this.userActivity.findIndex(activityRecord => activityRecord.date === endingDate)
    let weekOfActivity = this.userActivity.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfActivity.reduce((weekData, day) => {
      weekData.push(day.flightsOfStairs)
      return weekData
    }, [])
  return result
  }
  calculateAverageStairsPerWeek(endingDate) {
    let endingDateIndex = this.userActivity.findIndex(activityData => activityData.date === endingDate)
    let weekOfActivity = this.userActivity.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfActivity.reduce((acc, currentValue) => {
      acc += currentValue.flightsOfStairs
      return acc
    }, 0)
  return parseFloat((result/weekOfActivity.length).toFixed(0))
  }
  findStepsRecord() {
    let bestStepper = this.userActivity.sort((a, b) => {
      return b.numSteps - a.numSteps
    })
    return bestStepper[0]
  }
  findStairsRecord() {
   let bestClimb = this.userActivity.sort((a, b) => {
     return b.flightsOfStairs - a.flightsOfStairs
   })
   return bestClimb[0]
  }
  findActiveMinRecord() {
  let bestActiveMin = this.userActivity.sort((a,b) => {
    return b.minutesActive - a.minutesActive
  })
  return bestActiveMin[0]
  }
  calculateActiveMinsForWeek(endingDate) {
    let endingDateIndex = this.userActivity.findIndex(activityRecord => activityRecord.date === endingDate)
    let weekOfActivity = this.userActivity.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfActivity.reduce((weekData, day) => {
      weekData.push(day.minutesActive)
      return weekData
    }, [])
    return result
  }
  calculateStepsForWeek(endingDate) {
    let endingDateIndex = this.userActivity.findIndex(activityRecord => activityRecord.date === endingDate)
    let weekOfActivity = this.userActivity.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfActivity.reduce((weekData, day) => {
      weekData.push(day.numSteps)
      return weekData
    }, [])
    return result
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}
