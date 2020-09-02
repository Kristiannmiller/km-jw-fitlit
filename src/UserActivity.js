class UserActivity {
  constructor(userActivity, userData){
    this.userActivity = userActivity
    this.userData = userData
  }
  calculateMiles(date){
    let userStrideLength = this.userData[0].strideLength
    let stepsPerDate = this.userActivity.find(stepsTaken.date === date)
    const milesPerDate = (userStrideLength*stepsPerDate)/5280
    return milesPerDate
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
  // calculateStepGoalAchieved(date){
  //   let stepGoalsAchieved = this.userActivity.find(goalAchieved =>
  //     goalAchieved.date >
  //   )
  // }

  calculateDaysGoalExceeded(){
    let stepGoalsAchieved = this.userActivity.filter(goalAchieved => goalAchieved)
  }
  calculateMostStairsClimbed(user, date){

  }
}

if (typeof module !== 'undefined') {
  module.exports = UserActivity;
}
