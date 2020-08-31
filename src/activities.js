class UserActivity {
  constructor(userActivity){
    this.userActivity = userActivity
  }
  calculateMiles(id, date){
    let milesPerDate = this.userActivity.find

    //we need to access this data from two different databases
  }
  calculateMinActive(date){
    let minPerDay = this.userActivity.find(minActive => {
      minActive.date === date)
      return parseFloat((minPerDay.minutesActive).toFixed(2))
    })
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
