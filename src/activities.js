class UserActivity {
  constructor(userActivity){
    this.userActivity = userActivity
  }
  calculateMiles(date){

  }
  calculateMinActive(id, date){

  }
  calculateAvgMinActivePerWeek(endingDate){
    let endingDateIndex = this.userActivity.findIndex(activityData => activityData.date === endingDate)
    let weekOfActivity = this.userActivity.slice(endingDateIndex-6, endingDateIndex+1)
    let result = weekOfActitivty.reduce((activityData, day) => {
      activityData[day.date] = day.minutesActive
      return activityData
    }, {})
    return result
  }
  calculateStepGoalAchieved(date){

  }
  calculateDaysGoalExceeded(user){

  }
  calculateMostStairsClimbed(user, date){

  }
}
